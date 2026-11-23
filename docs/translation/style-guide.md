# Spanish style guide: Medicaid Is Changing

This guide is **binding** for everyone translating pages of this site. Use it together with `glossary.md`. If the two disagree, ask the terminology lead. A professional reviewer will check the final pages.

**Editorial decisions of 23 Nov. 2026** (reviewing editor) are folded into this version and override anything older: faithfulness (§1), glosses (§4), links (§5), and the fixed renderings in §3 and §7. The working hand-off for the reviewer is `translator-notes.md`.

## 1. Voice and reading level

- **Address the reader as "usted"**, always. Never "tú", even though some HFS materials mix the two. Use formal commands: "Llame", "Revise", "Guarde".
- **Warm, direct, plain.** Aim for about a 6th-grade reading level, like the English. Use short sentences (about 15-20 words), one idea per sentence, and common words: "pedir" rather than "solicitar" when either works, "ayuda" rather than "asistencia". "solicitar" is still the right verb for *apply for Medicaid*.
- Keep the English structure, headings and bullet lists. Do not add content or leave content out.
- **Faithfulness rule.** The Spanish must not contain information the English page lacks. No added instructions (for example "choose Español on abe.illinois.gov"), no added program descriptions (for example what ADAP or CareLink does), no "por escrito" or "firmada" unless the English says written or signed, no added definitions. Useful extras go in `translator-notes.md` under "Suggested Spanish-only additions" for the site owner to decide.
- **Do not fix the English.** If the English is ambiguous, wrong, or links to a dead or mislabeled page, mirror it and report it in `translator-notes.md`. Do not resolve an ambiguity by reordering the Spanish (for example, keep "sin tarjeta verde" where the English puts "without a green card").
- Use US/Latin American Spanish that Mexican readers find natural. Avoid Spain-only forms ("coste", "optar a", "vosotros", "acogida", "la Seguridad Social").
- **Do not copy general wording from HFS's Spanish toolkits.** Many are machine translated (see glossary). Official names and letter wording still come from HFS, as the glossary says.

## 2. Gender-inclusive writing

- Do not use x, @ or e endings ("todxs", "tod@s", "todes"). Avoid slashes like "exento/a" in body text.
- Prefer neutral wording: "las personas", "quien cuida a...", "tener una exención" (not "estar exento"), "personas que no son ciudadanas", "personas refugiadas".
- When a gendered noun cannot be avoided, use the masculine generic once, or both forms if it is short ("cuidador o cuidadora").
- Pregnancy wording stays "embarazada", as in the English and HFS letters.

## 3. Numbers, money, dates and times

- **Dates:** "1 de octubre de 2026". Month names are lowercase and written out. Do not copy the English abbreviations ("Oct.", "Nov."). "Jan. 1, 2027" becomes "1 de enero de 2027". A month with no day: "noviembre de 2026".
- **Times:** "5 p. m.", "8:30 a. m. a 5:30 p. m.". "Mon–Fri 8:30–5:30" becomes "lunes a viernes, de 8:30 a. m. a 5:30 p. m.". Days are lowercase.
- **Money:** US format, with the sign first and a comma for thousands: "$580", "$31,900", "unos $95,700 al año". Do not write "580 dólares" or "$580,00".
- **Numbers and percentages:** "80 horas", "6 meses", "100%" (no space, everywhere; the glossary's older "100 %" is replaced). Use numerals, as the English does. Ages: "de 19 a 64 años", "menor de 26 años".
- **Phone numbers:** copy them exactly as written in the English HTML, including the format, for example `1-877-805-5312`, `(866) 223-2817`, `2-1-1`. Never change a `tel:` link. **Never take a phone number from a Spanish HFS PDF.** Several have typos.
- **TTY:** keep "TTY:" before the number ("TTY: 1-866-324-5553"). Where the English explains it ("TTY = for deaf or hard of hearing."), write: "TTY = para personas sordas o con dificultad para oír."
- **Addresses, URLs, clinic and hospital names, statute citations (210 ILCS 70), and SHO #26-001:** unchanged.

## 4. Official English names

- Names that readers will see or hear **in English** stay in English, with a Spanish gloss in parentheses **on first use on each page**. After that, use the English name alone. Keep organization-name spellings exactly as the English page writes them (for example both "AIDS Foundation Chicago" and "AIDS Foundation of Chicago" appear in the English; copy whichever that sentence uses). Examples:
  - Manage My Case ("Administrar mi caso")
  - adultos de la ACA ("ACA Adults")
  - Moms & Babies (Medicaid para embarazadas y bebés)
  - Servicio al Cliente de ABE (ABE Customer Service)
- Button and menu labels inside ABE stay in English, with a gloss, because the reader has to match them on screen. This applies to Manage My Case, Case Summary, Benefit Details, Notices and the words "medical group": write `Manage My Case ("Administrar mi caso")`, `Case Summary (Resumen del caso) → Benefit Details (Detalles de los beneficios) → Notices (Avisos)` and `"medical group" (grupo médico)` on every page where they occur.
- **Quiz result cards** (am-i-exempt) can each be shown alone, so every card that mentions Manage My Case or the click path repeats the gloss, even if an earlier card already has it.
- **Agency names** (Illinois Attorney General, VA, HHS, CMS, HFS): English name + Spanish gloss on first use per page, e.g. `Illinois Attorney General (Procurador General de Illinois)`. HFS: `el Departamento de Servicios de Salud y Familia de Illinois (HFS)` once per page.
- **What counts as a gloss.** A gloss translates or expands a name: `Manage My Case ("Administrar mi caso")`, `TANF (Asistencia Temporal para Familias Necesitadas)`, `AABD (Medicaid para personas mayores, ciegas o con discapacidad)`, `Moms & Babies (Medicaid para embarazadas y bebés)`, `All Kids (Medicaid para menores de 19 años)`, `Family Care (Medicaid para padres y familiares cuidadores)`, `VA (Departamento de Asuntos de Veteranos)`. A description of what a program does is **not** a gloss and is not allowed (no "CareLink (programa de descuentos de Cook County Health)", no "ADAP, programa que ayuda a pagar medicamentos para el VIH", no "Get Covered Illinois (el mercado de seguros médicos de Illinois)", no "abe.illinois.gov (el sitio del Estado para ...)").
- The glossary gives each gloss. Do not invent new ones without telling the terminology lead.

## 5. Links

- A link to a page or PDF that exists **only in English** gets "(en inglés)" **inside the link text, at the end**: `<a ...>Preguntas frecuentes de HFS sobre Medicaid (en inglés)</a>`. Never put it after `</a>`.
- If the link text already ends with a metadata parenthesis (PDF, draft, date), merge: `(PDF, en inglés)`, `(borrador, PDF, en inglés)`, `(29 de junio de 2026, en inglés)`. A gloss or citation parenthesis is not merged: `Illinois Attorney General (Procurador General de Illinois) (en inglés)`, `Ley de Illinois (210 ILCS 70) (en inglés)`.
- If the link sits inside a parenthesis already, restructure so the label is not nested: `Línea de derechos de inmigrantes de Illinois, de <a>ICIRR (en inglés)</a>`.
- Where a **verified, good** Spanish version exists, link to it instead and do not add the label. Decided list (23 Nov. 2026):
  - **Use the Spanish URL:** HFS ACA Adult notice (`acaadultcustnoticespanish.pdf`, the only HFS Spanish PDF we link); getmedicaidfacts.com/es/; Cook County Health `/es/` pages (CareLink, Contáctenos, "Aquí todos son bienvenidos"); es.illinoislegalaid.org (appeals page, Get Legal Help, its FAQ); Erie `/es/` page; communityhealth.org/#espanol; Aunt Martha's `/es/` page (keep the clinic's English name as link text).
  - **Keep the English URL + "(en inglés)":** HFS Phase 2 toolkit, HFS Module 2 and Module 4 decks, HFS non-citizen toolkit. Their Spanish versions are machine-translated or draft and contain serious errors (see glossary warning).
  - Every other link is English-only and gets the label. The full list is in `translator-notes.md`, "Link decisions".
- Keep visually hidden link text in Spanish too: "(call Stroger Hospital)" becomes "(llamar a Stroger Hospital)", and "(opens Google Maps)" becomes "(abre Google Maps)".

## 6. Site-wide strings (use exactly)

Nav labels sit in one horizontal bar. Keep them as short as the Spanish below.

| English (verbatim from HTML) | Spanish |
|---|---|
| Medicaid Is Changing (site title, brand link) | Medicaid está cambiando |
| Page title pattern, e.g. `Home \| Medicaid Is Changing` | `Inicio \| Medicaid está cambiando` |
| Skip to main content | Ir al contenido principal |
| Menu | Menú |
| aria-label="Main" | aria-label="Principal" |
| Keep your Medicaid | Mantenga su Medicaid |
| Am I exempt? | ¿Tengo exención? |
| Get care | Atención médica |
| Clinics | Clínicas |
| Who to call | A quién llamar |
| About | Acerca de |
| Home | Inicio |
| Sources | Fuentes |
| Questions? Call Illinois Medicaid (HFS) | ¿Preguntas? Llame a Medicaid de Illinois (HFS) |
| Coverage & renewal questions | Preguntas sobre cobertura y renovación |
| free and 24/7 (2-1-1) | gratis, las 24 horas, todos los días |
| Bilingual | Bilingüe (no added language list) |
| See every phone number | Ver todos los números de teléfono |
| Call (in hidden text "(call X)") | Llamar ("(llamar a X)") |
| Information checked Nov. 2026. Call ahead, since programs and services can change. | Información revisada en noviembre de 2026. Llame antes de ir, porque los programas y servicios pueden cambiar. |
| aria-label="Footer" | aria-label="Pie de página" |
| This is not legal or medical advice. | Esta información no es asesoría legal ni médica. |
| About this site | Acerca de este sitio |

Notes:
- "¿Tengo exención?" avoids the gendered "¿Estoy exento?". The page heading can be longer: "¿Tiene una exención de los requisitos laborales?".
- "Atención médica" is clearer than a literal "Obtenga atención". The page heading keeps the full English idea: "¿Perdió Medicaid? Todavía puede recibir atención médica".
- Use the same footer and nav order as the English. Set `<html lang="es">` on Spanish pages.
