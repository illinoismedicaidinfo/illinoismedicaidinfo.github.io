# Medicaid Is Changing: patient education site

A small, plain website that puts the content of five printed flyers and posters online for Illinois Medicaid patients and families. Patients reach it from a QR code on the flyer, so it is built for phones first. It is plain HTML, CSS, and JavaScript. There is no build step and nothing to install.

The site counts each first-time visitor as one row in a Supabase table, then asks once whether they are a patient or a provider. A patient or provider answer is saved as one more row, so the project can count how many people and how many patients use the site. No names, no personal data.

## What is where

| Path | What it is |
|---|---|
| `index.html` | Home page. Topic buttons, "Does this apply to you?", key dates, 3 things to do, links to every page. |
| `keep-your-medicaid.html` | Work requirements, exemptions, keeping coverage, non-citizens, what to do if you lose Medicaid. |
| `am-i-exempt.html` | "Am I exempt?" checklist quiz. Shows which exemptions might fit and who to call. Nothing is saved or sent. |
| `get-care.html` | Where to get care without Medicaid: ER, community health centers, CareLink, hospital bills, kids and pregnancy. |
| `clinics.html` | Free and low-cost clinics in Cook County, with addresses, phone links, and map links. |
| `who-to-call.html` | Every phone number and website on the site in one list. |
| `about.html` | What the site is and who made it, plus the full **Sources** list (`about.html#sources`), grouped by topic. Edit the placeholder text here. |
| `es/` | The same 7 pages in Spanish, with the same file names. See [Languages](#languages). |
| `assets/css/base.css` | Layout and components for every page. Colors, fonts, and shapes come from the theme file. |
| `assets/css/theme-green.css` | Theme A: the flyer's green and mint palette. This is the default. |
| `assets/css/theme-civic.css` | Theme B: navy and gold, public-service look. |
| `assets/css/theme-warm.css` | Theme C: cream, teal, and coral, soft clinic look. |
| `assets/js/site.js` | Skip link, mobile menu, the theme preview switch, and keeping your place when you switch language. |
| `assets/js/visitor-count.js` | The visit count, the patient/provider prompt, and the Supabase save. |
| `assets/js/quiz.js` | The "Am I exempt?" quiz logic. Without it, the page shows every result as a list. |
| `assets/fonts/` | Atkinson Hyperlegible Bold, used for headings. Self-hosted. License in `OFL.txt`. |
| `config.js` | Supabase project URL, public key, and table name. |
| `supabase/schema.sql` | Creates the table and its security rules. Run once in Supabase. |
| `scripts/verify-supabase.sh` | Checks the database rules from the command line. |
| `scripts/check-i18n-parity.py` | Checks that each Spanish page has the same phone numbers, ids, and quiz values as its English page. |
| `.github/workflows/pages.yml` | Publishes the site to GitHub Pages on every push to `main`. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is, with no Jekyll build. |
| `previews/` | Screenshots of every page in every theme, and a side-by-side compare page. |
| `.open-design/` | Open Design's record of the three design directions, with a compare page and contact sheet. |
| `.claude/`, `.mcp.json` | Open Design tooling for Claude Code. Not part of the website. |

## Preview the site on your computer

Option 1: double-click `index.html`. Everything works from a file, including the visitor prompt.

Option 2: serve the folder, which matches how GitHub Pages serves it:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser. Use your browser's device toolbar (F12, then the phone icon) to view it at phone width.

## Look at the three renderings

All three themes share the same HTML. To view a theme, add `?theme=` to any page address:

- `index.html?theme=green` (the flyer palette, default)
- `index.html?theme=civic`
- `index.html?theme=warm`

The choice is remembered in that browser until you pick another. Screenshots of every page in every theme are in `previews/`, and `previews/index.html` shows them side by side. Open Design's own comparison of the three directions is at `.open-design/a-mobile-first-public-health-education-website-f/compare.html`.

### Choose one theme for good

1. In every HTML file, change the `href` of the `<link id="theme-css">` tag in the `<head>` to the theme file you want, and set `data-theme="..."` on the `<html>` tag to match (`green`, `civic`, or `warm`).
2. Delete the two theme files you are not using.
3. Optional: in `assets/js/site.js`, delete section 3 (the theme preview switch) so `?theme=` does nothing.

A quick way to do step 1 for all pages from a terminal, for example to choose `warm`:

```bash
sed -i 's/theme-green\.css/theme-warm.css/; s/data-theme="green"/data-theme="warm"/' *.html es/*.html
```

## Edit the content

Every page is a normal HTML file. Open it in any text editor.

- **Change a word, date, or number.** Find the text in the page and change it. Phone numbers appear twice: once as the visible text and once in the `href="tel:+1..."` link. Change both.
- **Add a section.** Each section is a `<section id="..."> ... </section>` block with an HTML comment above it naming the section. Copy an existing section, give it a new `id` and a new `<h2>`, and edit the text inside. Keep one `<h1>` per page.
- **Add a clinic.** In `clinics.html`, copy one `<li class="clinic">` block and change the name, address, phone, and map link. The map link is a Google Maps search for the address.
- **Add a page.** Copy `about.html`, rename it, change the `<title>`, the `<meta name="description">`, the three `hreflang` links, the language switch link, and the `<h1>`. Then add a link to it in the `<nav>` of every page and in the "Find what you need" cards on `index.html`. Do the same in `es/` (see [Languages](#languages)).
- **Cite a source.** At the end of a section or card that states a fact, add one line: `<p class="source-note">Source: <a href="URL" target="_blank" rel="noopener">Short name</a></p>` ("Sources:" with commas for more than one). Add any new source to the Sources list on `about.html` and update its "Last checked" date.
- **Change "Information checked Nov. 2026".** It appears in the footer of every page. Search for it and change it everywhere.

Keep the writing plain: short sentences, no jargon, phone numbers as digits. Keep text contrast high and tap targets large. The class names in `assets/css/base.css` are listed in a comment at the top of that file.

## Languages

The site is in English and Spanish.

- **Structure.** English pages are at the root (`about.html`). Spanish pages are in `es/` with the same file names (`es/about.html`) and `<html lang="es">`. Spanish pages load the shared files with `../` (`../assets/...`, `../config.js`). Links between pages stay plain file names, so English links stay in English and Spanish links stay in Spanish. Every page works without JavaScript.
- **The switch.** The header of every page has a link to the same page in the other language: "Español" on English pages, "English" on Spanish pages. It is a plain link. With JavaScript on, it also keeps the section you were on (`#...`) and any `?theme=`. The site never picks a language for you.
- **Words added by JavaScript.** `assets/js/quiz.js` (quiz results) and `assets/js/visitor-count.js` (the visitor bar) each have a small `STRINGS` list with `en` and `es` words, picked by `<html lang>`. An entry marked `// TODO-ES` still needs translating.
- **Change content in both languages.** Any change to a page (a word, a date, a phone number, a clinic, a section) must be made in the English page and in its `es/` page, in the same commit. Never change ids, classes, `tel:` links, form values, or `data-result` / `data-show-if` values in only one language.
- **Check the two languages match.** Run this before every push. It fails if a Spanish page is missing, or if its phone numbers, ids, quiz values, or asset paths differ from the English page. It also lists external links that differ and any `TODO-ES` left.

```bash
python3 scripts/check-i18n-parity.py
```

- **Publishing.** The workflow publishes `es/` along with the root pages, so a Spanish page needs no change to the workflow. The Spanish site is at `https://illinoismedicaidinfo.github.io/es/`. Each page's `<head>` lists both language versions (`<link rel="alternate" hreflang="...">`). Add those three lines to any new page.

## Publish changes

GitHub Pages serves the site. The workflow in `.github/workflows/pages.yml` runs on every push to `main`. It copies only the website files (every `.html` file at the root, `config.js`, `assets/`, and the Spanish pages in `es/`) and publishes them. The README, screenshots, database files, and tooling are not published.

One-time setup:

1. The repository must be public, or the GitHub account must be on a paid plan (Pro, Team, or Enterprise). GitHub Free does not serve Pages from a private repository. To make it public: **Settings**, scroll to **Danger Zone**, **Change visibility**.
2. On GitHub, open the repository, then **Settings**, then **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**. There is nothing else to pick.
4. Open the **Actions** tab, select **Deploy to GitHub Pages**, and click **Run workflow** (or push any change to `main`).
5. After about a minute, the run shows the public address, `https://illinoismedicaidinfo.github.io/`, because the repository is named after the organization. The same address appears under **Settings**, then **Pages**. Put that address in the QR code on the flyers.

To publish a change afterward: commit and push to `main`. The workflow runs on its own and the site updates in about a minute. The **Actions** tab shows each run and whether it passed.

```bash
git add -A
git commit -m "Describe the change"
git push
```

Every `.html` file at the root of the repository is published, so a new page needs no change to the workflow.

## Visitor count (Supabase)

### How it works

On the first visit in a browser, `assets/js/visitor-count.js` does two things:

1. It sends one row, `{"role": "visit"}`, to the table `visitor_responses`. This counts every first-time visitor, whether or not they answer the question.
2. It shows a small bar pinned to the bottom of the screen: "Who is visiting today?" with three choices: patient or family member, provider or staff, or skip. The bar stays on every page until the visitor chooses. A patient or provider answer is sent as one more row, `{"role": "patient"}` or `{"role": "provider"}`. Skip sends nothing.

Both facts are remembered in that browser (localStorage key `hesjlp-visitor`), so a visit is counted once, the bar never shows there again after an answer, and repeat visits are not counted. The count is per browser, not per person.

If Supabase is down, paused, or unreachable, the pages work normally. The row is simply not saved. Nothing is retried later.

The key in `config.js` is Supabase's public "publishable" key. It is meant to be visible in web pages. The security rules in `supabase/schema.sql` are what protect the data: with that key, a visitor can add one visit, patient, or provider row and can never read, change, or delete rows.

### One-time setup

1. Sign in at https://supabase.com/dashboard and open the project.
2. Left menu: **SQL Editor**, then **New query**.
3. Paste the whole contents of `supabase/schema.sql` and click **Run**. Running it again later is safe. It never deletes saved answers. **Run it again after any change to the file.** For example, the `visit` role was added in Nov. 2026, and a database set up before that rejects visit rows until the file is run again.
4. Check it from a terminal in this folder. Every line should say PASS. Each run adds two test rows, one `provider` and one `visit`, never `patient`.

```bash
scripts/verify-supabase.sh https://bgwaofspmqaxnhpsbwvy.supabase.co sb_publishable_5Tfjj-lpZHxYzpJFHWbBTA_uJMJFyai
```

This was run on Nov. 4, 2026 and every check passed, before the `visit` role was added. Run it again after running the updated `schema.sql`.

### View the data

- **Table Editor:** in the dashboard, left menu **Table Editor**, then `visitor_responses`. This shows every row.
- **SQL Editor**, totals by role (`visit` = first-time visitors, `patient` and `provider` = answers):

```sql
select role, count(*) from public.visitor_responses group by role order by role;
```

- How many first-time visitors answered, and how many were patients:

```sql
select count(*) filter (where role = 'visit')                  as visitors,
       count(*) filter (where role in ('patient', 'provider')) as answered,
       count(*) filter (where role = 'patient')                as patients
from public.visitor_responses;
```

- Per day, Chicago time:

```sql
select (created_at at time zone 'America/Chicago')::date as day, role, count(*)
from public.visitor_responses group by day, role order by day desc, role;
```

Only the project owner can read these. The public website key cannot.

### Restore a paused database

Supabase pauses free-plan projects after about a week with no activity. It sends an email first. A paused project keeps its data but does not accept requests.

1. Open https://supabase.com/dashboard and select the project.
2. Click **Restore project**. It takes a few minutes.
3. Run `scripts/verify-supabase.sh` again to confirm.

While the project is paused, the site still works and the bar still shows, but visits and answers are not counted. The dashboard says how long a paused project can still be restored, so do not leave it paused for months.

### Turn the count off

In `config.js`, set `supabaseUrl: ""`. Nothing is counted and the bar no longer appears.

### See the prompt again in your own browser

Open any page with `?resetvisitor=1` added to the address, for example `index.html?resetvisitor=1`. Or run `localStorage.removeItem('hesjlp-visitor')` in the browser console and reload.

## Verification checklist

| Check | How | Status |
|---|---|---|
| An answer saves | `scripts/verify-supabase.sh`, check 1 returns HTTP 201. Also clicked through in a real browser. | Passed Nov. 4, 2026 |
| A first visit saves | `scripts/verify-supabase.sh`, check 1b returns HTTP 201 | Run after `schema.sql` is re-run |
| A visitor can't read, edit, or delete rows | `scripts/verify-supabase.sh`, checks 2 and 3 return HTTP 401 | Passed Nov. 4, 2026 |
| The database rejects invalid values | `scripts/verify-supabase.sh`, check 4: role `robot` and an extra field are rejected | Passed Nov. 4, 2026 |
| The site works if Supabase is unavailable | Loaded with `config.js` pointing at an unreachable address: no errors, bar closes, pages work | Passed Nov. 4, 2026 |
| The layout works on a phone | Screenshots at 320, 375, 768, and 1280 px wide in `previews/`, no horizontal scroll | Passed Nov. 4, 2026 |
| WCAG 2.1 AA | axe-core on every page and theme, keyboard walk-through, contrast ratios listed at the top of each theme file | See `previews/VERIFICATION.md` |

## Cost

Everything runs on free tiers: GitHub Pages and a Supabase free-plan project. No card is needed.

## Design notes

The three directions were planned with Open Design (the `open-design` tooling in `.claude/` and `.mcp.json`). The brief and the three direction descriptions are recorded under `.open-design/`. In a Claude Code session with that tooling, you can ask it to show the comparison, pick a direction, or explore new ones.

This site gives information, not legal or medical advice. Information was checked Nov. 2026.
