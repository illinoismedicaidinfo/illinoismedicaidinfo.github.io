/*
 * visitor-count.js — the one-time "Who is visiting today?" prompt.
 *
 * WHAT IT DOES
 *   The first time someone opens the site in a browser, ONE row
 *   {"role": "visit"} is sent to Supabase, so every first-time visitor is
 *   counted even if they never answer. Then a small panel just below the page
 *   title (it scrolls with the page) asks whether they are a patient/family
 *   member or a provider/staff (or Skip). It shows on every page until they choose.
 *   A patient or provider answer is sent as ONE more row: {"role": "..."}.
 *   Both facts are remembered in that browser (localStorage key
 *   "hesjlp-visitor"), so the visit is counted once and the prompt never shows
 *   there again after an answer.
 *   Nothing else is sent: no names, no IP logging by us, no cookies.
 *   If Supabase is down, paused, or unreachable, the site works normally and
 *   the answer is simply not counted (errors go to console.debug only).
 *
 * HOW TO TURN IT OFF
 *   In config.js set  supabaseUrl: ""  (empty quotes). The prompt will not
 *   appear at all. (Or remove the <script> tag for this file from the pages.)
 *
 * HOW TO SEE THE PROMPT AGAIN (for testing)
 *   - Add ?resetvisitor=1 to the page address, e.g. index.html?resetvisitor=1
 *   - or open the browser console and run:
 *       localStorage.removeItem('hesjlp-visitor')
 *     then reload the page.
 *   - or in the console: window.__hesjlpVisitorPrompt.reset()
 *
 * Requires config.js to be loaded BEFORE this file. No other dependencies.
 * Works from file:// and http(s)://.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "hesjlp-visitor";
  var TIMEOUT_MS = 5000;

  function debug() {
    try {
      if (window.console && console.debug) {
        console.debug.apply(console, ["[visitor-count]"].concat([].slice.call(arguments)));
      }
    } catch (e) { /* ignore */ }
  }

  // ---- storage helpers (every access wrapped; storage can throw) ----
  function storageGet() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(value) {
    try { window.localStorage.setItem(STORAGE_KEY, value); return true; } catch (e) { return false; }
  }
  function storageRemove() {
    try { window.localStorage.removeItem(STORAGE_KEY); return true; } catch (e) { return false; }
  }
  // True only if we can both write and read back. If not, we never show the
  // prompt (we could not remember the answer and would count people twice).
  function storageWorks() {
    try {
      var probe = STORAGE_KEY + "-probe";
      window.localStorage.setItem(probe, "1");
      var ok = window.localStorage.getItem(probe) === "1";
      window.localStorage.removeItem(probe);
      return ok;
    } catch (e) {
      return false;
    }
  }

  // What is stored, as JSON:
  //   {"visitedAt": "..."}                                  visit counted, not answered yet
  //   {"visitedAt": "...", "role": "patient", "at": "..."}  answered
  // Older values from before the visit count look like {"role": "...", "at": "..."}
  // and still mean "answered".
  function readState() {
    var raw = storageGet();
    if (raw === null) return null;
    try {
      var state = JSON.parse(raw);
      return (state && typeof state === "object") ? state : {};
    } catch (e) { return {}; }
  }

  // Testing hook (the only global this file creates).
  window.__hesjlpVisitorPrompt = {
    reset: function () { return storageRemove(); }
  };

  function getConfig() {
    var c = window.SITE_CONFIG;
    if (!c || typeof c !== "object") return null;
    var url = typeof c.supabaseUrl === "string" ? c.supabaseUrl.trim() : "";
    if (!url) return null;
    return {
      url: url.replace(/\/+$/, ""),
      key: typeof c.supabaseKey === "string" ? c.supabaseKey : "",
      table: (typeof c.table === "string" && c.table) ? c.table : "visitor_responses"
    };
  }

  // ---- send one answer; every failure is silent ----
  function send(cfg, role) {
    try {
      if (typeof window.fetch !== "function") { debug("fetch unavailable; not sent"); return; }
      var controller = typeof AbortController === "function" ? new AbortController() : null;
      var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT_MS) : null;
      var opts = {
        method: "POST",
        headers: {
          "apikey": cfg.key,
          "Authorization": "Bearer " + cfg.key,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({ role: role }),
        credentials: "omit"
      };
      if (controller) opts.signal = controller.signal;
      window.fetch(cfg.url + "/rest/v1/" + encodeURIComponent(cfg.table), opts)
        .then(function (res) {
          if (!res.ok) debug("insert failed: HTTP " + res.status);
          else debug("counted:", role);
        })
        .catch(function (err) { debug("insert failed:", err && err.name, err && err.message); })
        .then(function () { if (timer) clearTimeout(timer); });
    } catch (e) {
      debug("insert failed:", e && e.message);
    }
  }

  var MARKUP =
    '<div class="vp-card">' +
      '<h2 id="vp-title">Who is visiting today?</h2>' +
      '<div class="vp-actions">' +
        '<button type="button" class="vp-btn" data-role="patient">Patient or family member</button>' +
        '<button type="button" class="vp-btn" data-role="provider">Provider or staff</button>' +
      '</div>' +
      '<button type="button" class="vp-skip" data-role="skip">Skip</button>' +
    '</div>';

  function init() {
    var params = "";
    try { params = window.location.search || ""; } catch (e) { /* ignore */ }
    if (/[?&]resetvisitor=1(&|$)/.test(params)) storageRemove();

    var cfg = getConfig();
    if (!cfg) { debug("no supabaseUrl in SITE_CONFIG; prompt disabled"); return; }
    if (!storageWorks()) { debug("localStorage unavailable; prompt disabled"); return; }
    var state = readState();
    if (state && state.role) return; // already answered in this browser
    if (document.getElementById("visitor-prompt")) return; // already on page

    // First time in this browser: count the visit once, before asking anything.
    // Remember it first, so a failed request is never retried later.
    if (state === null) {
      state = { visitedAt: new Date().toISOString() };
      storageSet(JSON.stringify(state));
      send(cfg, "visit");
    }

    var body = document.body;
    // A small panel under the page title, in the normal page flow (CSS: .vp in base.css).
    // Not a dialog: no aria-modal, no focus trap, no inert background.
    var banner = document.createElement("section");
    banner.id = "visitor-prompt";
    banner.className = "vp";
    banner.setAttribute("aria-labelledby", "vp-title");
    banner.innerHTML = MARKUP;

    var buttons = [].slice.call(banner.querySelectorAll("button[data-role]"));

    var done = false;
    function choose(role) {
      if (done) return;
      done = true;
      // 1. Remember first, so a failed request is never retried later.
      state.role = role;
      state.at = new Date().toISOString();
      storageSet(JSON.stringify(state));
      // 2. Remove the panel. If keyboard focus was on it, move focus to the
      //    main content so it is not lost.
      var hadFocus = banner.contains(document.activeElement);
      if (banner.parentNode) banner.parentNode.removeChild(banner);
      if (hadFocus) {
        try {
          var target = document.getElementById("main") || body;
          var hadTabindex = target.hasAttribute("tabindex");
          if (!hadTabindex) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          if (!hadTabindex) {
            target.addEventListener("blur", function rm() {
              target.removeAttribute("tabindex");
              target.removeEventListener("blur", rm);
            });
          }
        } catch (e) { /* ignore */ }
      }
      // 3. Count it (patient/provider only).
      if (role === "patient" || role === "provider") send(cfg, role);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () { choose(btn.getAttribute("data-role")); });
    });

    // Place it inside <main> right after the title band (.hero on the home
    // page, .page-head on inner pages); else first in #main; else after the
    // site header.
    var main = document.getElementById("main");
    var head = main ? main.querySelector(".hero, .page-head") : null;
    if (head && head.parentNode) {
      head.parentNode.insertBefore(banner, head.nextSibling);
    } else if (main) {
      main.insertBefore(banner, main.firstChild);
    } else {
      var header = document.querySelector(".site-header");
      if (header && header.parentNode) header.parentNode.insertBefore(banner, header.nextSibling);
      else body.insertBefore(banner, body.firstChild);
    }
  }

  function safeInit() {
    try { init(); } catch (e) { debug("prompt error:", e && e.message); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
  } else {
    safeInit();
  }
})();
