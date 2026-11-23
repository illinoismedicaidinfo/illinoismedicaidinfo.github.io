/*
 * quiz.js: the "Am I exempt?" checklist on am-i-exempt.html.
 *
 * Runs only in the browser. Nothing is saved (no cookies, no localStorage)
 * and nothing is sent anywhere. Without JavaScript, the page simply shows
 * every result as a reference list.
 */
(function () {
  "use strict";

  // Words this file writes on the page, per language. Chosen by <html lang>;
  // anything else falls back to English. Plain text only (set with textContent).
  var STRINGS = {
    en: {
      title: "Your results",
      notAca: "The work rules may not apply to you. See below, and check your Medicaid group to be sure.",
      // n is 1 or more: the number of exemptions that may fit.
      exemptions: function (n) {
        return n === 1
          ? "1 exemption may fit you. Only HFS can decide. Here's what to do and who to call."
          : n + " exemptions may fit you. You only need one. Only HFS can decide. Here's what to do and who to call.";
      },
      checkGroup: "Check your Medicaid group first. If you're an ACA Adult, you may need to meet the work rules.",
      none: "None of the exemptions were checked. If you're an ACA Adult, you may need to meet the work rules."
    },
    es: {
      title: "Sus resultados",
      notAca: "Es posible que los requisitos laborales no se apliquen a usted. Lea la información de abajo y revise su grupo de Medicaid para confirmarlo.",
      exemptions: function (n) {
        return n === 1
          ? "Puede que le corresponda 1 exención. Solo HFS puede decidirlo. Abajo verá qué hacer y a quién llamar."
          : "Puede que le correspondan " + n + " exenciones. Solo necesita una. Solo HFS puede decidirlo. Abajo verá qué hacer y a quién llamar.";
      },
      checkGroup: "Primero revise su grupo de Medicaid. Si usted está en el grupo de adultos de la ACA, es posible que tenga que cumplir con los requisitos laborales.",
      none: "No se marcó ninguna exención. Si usted está en el grupo de adultos de la ACA, es posible que tenga que cumplir con los requisitos laborales."
    }
  };
  var lang = (document.documentElement.getAttribute("lang") || "en").toLowerCase().split("-")[0];
  var T = STRINGS[lang] || STRINGS.en;

  var form = document.getElementById("quiz");
  var results = document.getElementById("results");
  if (!form || !results) return;

  var title = document.getElementById("results-title");
  var summary = document.getElementById("results-summary");
  var actions = form.querySelector(".quiz-actions");
  var cards = [].slice.call(results.querySelectorAll("[data-result]"));
  var unsureNotes = [].slice.call(results.querySelectorAll("[data-show-if]"));

  // With JavaScript: show the buttons, hide results until asked.
  if (actions) actions.hidden = false;
  results.hidden = true;

  function checkedValues() {
    var vals = {};
    [].forEach.call(form.querySelectorAll("input[type=checkbox]:checked"), function (box) {
      vals[box.value] = true;
    });
    // "Not sure if it counts" shows the health result too.
    if (vals["health-unsure"]) vals.health = true;
    return vals;
  }

  function show() {
    var vals = checkedValues();
    var shownExemptions = 0;
    var anyStep1 = vals["not-aca"] || vals["group-unsure"];

    cards.forEach(function (card) {
      var key = card.getAttribute("data-result");
      var on = !!vals[key];
      if (key === "none") on = false;
      card.hidden = !on;
      if (on && key !== "not-aca" && key !== "group-unsure") shownExemptions++;
    });

    // Nothing in step 2 checked: show "work rules may apply".
    var none = results.querySelector('[data-result="none"]');
    if (none && shownExemptions === 0 && !vals["not-aca"]) none.hidden = false;

    unsureNotes.forEach(function (el) {
      el.hidden = !vals[el.getAttribute("data-show-if")];
    });

    title.textContent = T.title;
    if (vals["not-aca"]) {
      summary.textContent = T.notAca;
    } else if (shownExemptions > 0) {
      summary.textContent = T.exemptions(shownExemptions);
    } else if (anyStep1) {
      summary.textContent = T.checkGroup;
    } else {
      summary.textContent = T.none;
    }

    results.hidden = false;
    title.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    show();
  });

  form.addEventListener("reset", function () {
    results.hidden = true;
    var first = form.querySelector("input[type=checkbox]");
    // Let the reset finish before moving focus.
    setTimeout(function () { if (first) first.focus(); }, 0);
  });
})();
