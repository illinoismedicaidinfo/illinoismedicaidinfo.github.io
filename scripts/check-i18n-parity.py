#!/usr/bin/env python3
"""Check that each Spanish page in es/ matches its English page where it must.

For every page at the root (index.html, about.html, ...), es/<page> must exist
and both files must have the SAME, in the SAME order:
  - tel: links (phone numbers)
  - element ids (jump links, quiz results, aria-labelledby targets)
  - form controls: name/value pairs (the quiz checkboxes)
  - data-result and data-show-if values (what quiz.js reads)
The Spanish page must also say <html lang="es"> and load every asset with ../
Each page's .lang-switch link must point at its own counterpart
(page.html -> es/page.html, es/page.html -> ../page.html).

Reported, but not a failure:
  - external (http/https) links that differ between the two pages
  - pages in es/ and files in assets/js/ that still contain a TODO-ES marker

Usage, from anywhere:  python3 scripts/check-i18n-parity.py
Exit code 0 = no failures, 1 = failures. Python 3 standard library only.
"""
import os
import sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ES = os.path.join(ROOT, "es")
MARKER = "TODO-ES"
FORM_TAGS = ("input", "select", "textarea", "button")
ASSET_ATTRS = ("href", "src")


class Collect(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tel = []
        self.ids = []
        self.controls = []
        self.data = []
        self.external = []
        self.assets = []
        self.lang = None
        self.switch = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        if "lang-switch" in (a.get("class") or "").split():
            self.switch.append(a.get("href"))
        if a.get("id") is not None:
            self.ids.append(a["id"])
        href = a.get("href") or ""
        if href.startswith("tel:"):
            self.tel.append(href)
        elif href.startswith(("http://", "https://")):
            self.external.append(href)
        if tag in FORM_TAGS and a.get("name") is not None:
            self.controls.append((a["name"], a.get("value")))
        for key in ("data-result", "data-show-if"):
            if a.get(key) is not None:
                self.data.append((key, a[key]))
        for key in ASSET_ATTRS:
            v = a.get(key) or ""
            if v.startswith("assets/") or v == "config.js":
                self.assets.append(v)

    handle_startendtag = handle_starttag


def parse(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    p = Collect()
    p.feed(text)
    p.close()
    return p, text


def first_difference(a, b):
    for i, (x, y) in enumerate(zip(a, b)):
        if x != y:
            return "item %d: English %r, Spanish %r" % (i + 1, x, y)
    return "English has %d, Spanish has %d" % (len(a), len(b))


def main():
    pages = sorted(f for f in os.listdir(ROOT) if f.endswith(".html"))
    failures, notes = [], []

    for page in pages:
        es_path = os.path.join(ES, page)
        if not os.path.isfile(es_path):
            failures.append("%s: es/%s is missing" % (page, page))
            continue
        en, _ = parse(os.path.join(ROOT, page))
        es, es_text = parse(es_path)

        for label, x, y in (("tel: links", en.tel, es.tel),
                            ("element ids", en.ids, es.ids),
                            ("form name/value pairs", en.controls, es.controls),
                            ("data-result / data-show-if", en.data, es.data)):
            if x != y:
                failures.append("%s: %s differ (%s)" % (page, label, first_difference(x, y)))

        if es.lang != "es":
            failures.append('es/%s: <html lang> is %r, expected "es"' % (page, es.lang))
        for who, got, want in (("", en.switch, "es/" + page), ("es/", es.switch, "../" + page)):
            if got != [want]:
                failures.append("%s%s: .lang-switch href is %r, expected [%r]" % (who, page, got, want))
        for v in es.assets:
            failures.append("es/%s: %r must start with ../" % (page, v))

        if en.external != es.external:
            only_en = [h for h in en.external if h not in es.external]
            only_es = [h for h in es.external if h not in en.external]
            msg = "%s: external links differ" % page
            if only_en:
                msg += "\n    only in English: " + ", ".join(sorted(set(only_en)))
            if only_es:
                msg += "\n    only in Spanish: " + ", ".join(sorted(set(only_es)))
            if not only_en and not only_es:
                msg += " (same links, different order or count)"
            notes.append(msg)

        n = es_text.count(MARKER)
        if n:
            notes.append("es/%s: %d %s marker(s) left" % (page, n, MARKER))

    js_dir = os.path.join(ROOT, "assets", "js")
    for name in sorted(os.listdir(js_dir)):
        if name.endswith(".js"):
            with open(os.path.join(js_dir, name), encoding="utf-8") as f:
                n = f.read().count(MARKER)
            if n:
                notes.append("assets/js/%s: %d %s marker(s) left" % (name, n, MARKER))

    extra = sorted(f for f in os.listdir(ES) if f.endswith(".html") and f not in pages) if os.path.isdir(ES) else []
    for f in extra:
        notes.append("es/%s has no English page at the root" % f)

    print("Checked %d page pairs." % len(pages))
    if notes:
        print("\nNotes (not failures):")
        for n in notes:
            print("  - " + n)
    if failures:
        print("\nFAILURES:")
        for f in failures:
            print("  - " + f)
        print("\nFAIL: %d problem(s)." % len(failures))
        return 1
    print("\nPASS: phone numbers, ids, quiz values and asset paths match.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
