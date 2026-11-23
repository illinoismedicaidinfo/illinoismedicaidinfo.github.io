# Translator notes: Spanish version of "Medicaid Is Changing"

Prepared by the reviewing editor, 23 Nov. 2026. This is the one document the professional translator and the site owner work from. It replaces the seven files in `notes/` (kept for history; do not edit them).

## 1. How to use this

1. **What was translated:** all 7 pages (`es/index.html`, `es/keep-your-medicaid.html`, `es/am-i-exempt.html`, `es/get-care.html`, `es/clinics.html`, `es/who-to-call.html`, `es/about.html`) plus the `es` strings in `assets/js/quiz.js` (quiz result summary) and `assets/js/visitor-count.js` (visitor bar). Five translators did a first draft; the editor then made the set consistent and applied the decisions below.
2. **Compare side by side:** each Spanish page has an English original with the same file name at the repo root (`index.html` and `es/index.html`, and so on). Structure, ids, phone numbers and quiz values are identical (checked by `python3 scripts/check-i18n-parity.py`).
3. **Rules:** `style-guide.md` (voice, numbers, links, glosses, fixed site-wide strings) and `glossary.md` (every term, its source and confidence). Both were updated to match the final pages. If a page and the glossary disagree, the page wins and the glossary row says so.
4. **Read in this order:** section 2 (top priority), then section 7 for the page you are reviewing. Sections 3 to 5 are mainly for the site owner.
5. **Editing:** change the Spanish only in `es/*.html` and the `es:` blocks of the two JS files. Do not change ids, `tel:` links, quiz `value`s, or anything outside `es/`.

## 2. Top priority: please check these first

The highest-risk passages on the whole site. "Spanish" is what the page says now.

| # | Page | English | Spanish now | Question for you |
|---|---|---|---|---|
| 1 | am-i-exempt, Step 1 checkboxes (decide whether the work rules apply at all) | I'm younger than 19 or older than 64 / I have Medicare or qualify for it / My child (or a child I'm related to) under 18 lives with me / I'm in another Medicaid group (AABD, Moms & Babies, Family Care) | Tengo menos de 19 años o más de 64 años / Tengo Medicare o tengo derecho a Medicare / Vive conmigo un hijo (o un niño de mi familia) menor de 18 años / Estoy en otro grupo de Medicaid (AABD: para personas mayores, ciegas o con discapacidad; Moms & Babies: para embarazadas y bebés; Family Care: para padres y familiares cuidadores) | Are the age boundaries exact (19 and 64 are inside the ACA range in both)? Does "un niño de mi familia" cover any related child, as the English and the HFS letter intend? Is the long glossed group list still readable as a checkbox? |
| 2 | keep (Who lost Medicaid callout), get-care (Who lost Medicaid) | Refugees, asylees, parolees (including Ukrainian and Afghan), and trafficking/domestic violence survivors without a green card, among others. | Personas refugiadas, personas con asilo, personas con permiso humanitario (parole), incluidas personas de Ucrania y Afganistán, y sobrevivientes de trata de personas o de violencia doméstica sin tarjeta verde, entre otras. | The first draft moved "sin tarjeta verde" to the front, which decided that it applies to every group. The editor restored the English order so the Spanish is exactly as ambiguous as the English (see section 3). Check that the Spanish says no more and no less than the English. |
| 3 | keep, Non-citizens list | Have had a green card 5+ years, or have one and were a refugee, asylee, or trafficking survivor / Are a Cuban-Haitian entrant or COFA citizen (Micronesia, Marshall Islands, or Palau) / Have a green card and are a veteran, on active duty, or their spouse or child | Han tenido la tarjeta verde (green card) por 5 años o más, o la tienen y fueron personas refugiadas, personas con asilo o sobrevivientes de trata de personas / Son participantes cubanos o haitianos ("Cuban-Haitian entrants") o migrantes del Pacto de Libre Asociación (COFA) de Micronesia, las Islas Marshall o Palaos / Tienen la tarjeta verde y son veteranos, están en servicio militar activo, o son cónyuges o hijos de una de estas personas | "personas con asilo" (granted asylum) must never become "solicitantes de asilo". English says COFA "citizen"; the Spanish says "migrantes" (CuidadoDeSalud.gov usage): acceptable? "de una de estas personas" was needed for grammar; does it narrow "their"? |
| 4 | keep (Keeping your coverage), am-i-exempt (For everyone), about (first source) | keep: you can promise that you are through a written attestation. (Lying about it is a crime.) / exempt: you can promise that you are. (Lying about it is a crime.) / about: promising you are exempt | keep: podrá declarar por escrito que la tiene. (Mentir sobre esto es un delito.) / exempt: usted puede declarar que la tiene. (Mentir sobre esto es un delito.) / about: cómo declarar que tiene una exención | The first draft added "por escrito" on exempt and about, where the English does not say written; removed. Is "declarar" the right weight for "promise"? Is "delito" (not "delito grave", not "perjurio") right for "a crime"? |
| 5 | keep (Update), am-i-exempt (health card), about (Stateline item) | a federal judge ruled that people with special medical needs [people in these groups] don't also have to prove they can't work | un juez federal decidió que las personas con necesidades médicas especiales [de estos grupos] no tienen que demostrar, además, que no pueden trabajar | Now the same on all three pages. Does ", además," read as "in addition to being in the group", not "they don't have to prove anything"? |
| 6 | All pages (footer), about (callout heading) | This is not legal or medical advice. | Esta información no es asesoría legal ni médica. | No reputable Spanish model found (glossary Medium). Is it as strong as the English? |
| 7 | am-i-exempt (pregnant card) | your pregnancy ended in the last 12 months (including a miscarriage) | su embarazo terminó en los últimos 12 meses (incluso por una pérdida del embarazo, también llamada aborto espontáneo) | Sensitive wording. Keep both terms, or only one? Does "incluso por" keep "ended" broad (any ending), not narrow it to miscarriage? |
| 8 | index, keep, am-i-exempt (not-aca, group-unsure, snap cards), who-to-call, about | Manage My Case; Case Summary → Benefit Details → Notices | Manage My Case ("Administrar mi caso"); Case Summary (Resumen del caso) → Benefit Details (Detalles de los beneficios) → Notices (Avisos) | Low confidence: the Spanish ABE screens could not be seen. The 2026 HFS toolkits say "Gestionar mi caso"; the letter and the 2023 guide say "Administrar". Please check a live Spanish ABE session. Each quiz card now repeats the gloss because cards show alone. |
| 9 | index, keep, am-i-exempt, who-to-call | Check State letters for your "medical group" / Check your medical group | Busque las palabras "medical group" (grupo médico) en las cartas del Estado / Revise su "medical group" (grupo médico) | Low confidence: what do Spanish HFS letters actually print? If they print a Spanish term, the reader will not find "medical group". Check a real Spanish eligibility notice. |
| 10 | am-i-exempt, Step 2 and cards | I'm staying in a hospital, rehab, or psychiatric hospital... / Parents, guardians, relatives, and family caregivers (paid or unpaid) of a child under 14 or a person with a disability... / If you had Medicaid while in foster care and you're under 26 | Estoy internado o internada en un hospital, centro de rehabilitación u hospital psiquiátrico... / Los padres, tutores, familiares y cuidadores familiares (con pago o sin pago) de un niño menor de 14 años o de una persona con discapacidad... / Si usted tuvo Medicaid mientras estaba en cuidado de crianza (foster care) y tiene menos de 26 años | Exemption criteria. "internado" (inpatient) is narrower than "en un hospital" on purpose; right? Is the scope of "(con pago o sin pago)" as ambiguous as the English, no more? "cuidado de crianza (foster care)" is Low confidence. |
| 11 | am-i-exempt (snap card), keep (Keeping your coverage) | Meeting SNAP's work rules... counts for Medicaid. HFS marks you exempt on its own. A SNAP exemption may not count for Medicaid. | Cumplir con los requisitos laborales de SNAP... cuenta para Medicaid. HFS le da la exención automáticamente. Una exención de SNAP puede no contar para Medicaid. | The key distinction (meeting the rules counts; an exemption may not) must survive. Would "es posible que no cuente" be harder to misread than "puede no contar"? |
| 12 | keep (Keeping your coverage) | If you're not exempt AND you don't meet the rules, Medicaid stops when your coverage period ends. | Si usted no tiene una exención Y no cumple con los requisitos, su Medicaid termina cuando se acabe su período de cobertura. | HFS letters say "período de elegibilidad". The draft's added gloss was removed (section 5). Is "período de cobertura" clear enough alone? |
| 13 | keep (If you lose Medicaid) | Many people can get help paying premiums, but NOT if you lost Medicaid for not meeting work rules. | Muchas personas pueden recibir ayuda para pagar las primas, pero NO si usted perdió Medicaid por no cumplir con los requisitos laborales. | Penalty statement. "mensual" (added in the draft) was removed. |
| 14 | keep (Option 2), am-i-exempt (none card) | Go to school half-time / at least half-time | Vaya a la escuela a medio tiempo / al menos a medio tiempo | Decided term. HFS's letter says "a tiempo parcial" (broader, part-time). Should "(half-time)" be added? |
| 15 | am-i-exempt (For everyone), index (Key dates) | Work rules start at your first renewal on or after Jan. 1, 2027 (first renewals: March). New applications after 5 p.m. on Dec. 31, 2026 must meet them too. | Los requisitos laborales empiezan en su primera renovación a partir del 1 de enero de 2027 (las primeras renovaciones son en marzo). Las personas que hagan una solicitud nueva después de las 5 p. m. del 31 de diciembre de 2026 también deben cumplirlos. | Deadlines. "a partir del" includes 1 January; confirm. Rephrased "applications must meet them" as people. |
| 16 | get-care (Emergency) | Every hospital ER must treat emergencies, even if you have no insurance or can't pay. | La sala de emergencias de todos los hospitales debe atender las emergencias, aunque usted no tenga seguro médico o no pueda pagar. | Legal duty statement. Is "atender" the same strength as "treat"? |
| 17 | get-care (CareLink), who-to-call | For uninsured adults 19–64 in Cook County 30+ days, any immigration status. / up to 100% off | Para adultos de 19 a 64 años sin seguro médico que han vivido en el condado de Cook por 30 días o más, sin importar su estatus migratorio. / hasta un 100% de descuento | "han vivido" interprets "in Cook County 30+ days" (Cook County Health's own wording). Acceptable, or too specific? |
| 18 | get-care (Hospital bill) | Earn up to about $31,900 a year (more for families)? Free care at most hospitals. / ... $95,700 ... You can get a discount. | ¿Gana hasta unos $31,900 al año (más para familias)? Atención gratuita en la mayoría de los hospitales. / ... $95,700 ... Puede recibir un descuento. | Amounts copied exactly. Does "(más para familias)" read as "the limit is higher for families"? |
| 19 | keep, am-i-exempt, about | veteran rated 100% disabled (by the VA) | veterano o veterana con una calificación de discapacidad del 100% (del VA where the English names the VA) | "calificación de discapacidad" is Medium confidence. The draft added "del VA" on keep, where the English does not name the VA; removed. |
| 20 | clinics (free clinic), about (CommunityHealth) | free (low-income, uninsured adults, any status) | gratis (para adultos de bajos ingresos y sin seguro médico, sin importar su estatus) | Decided: literal until the site owner confirms "status" means immigration status (section 3). |
| 21 | assets/js/quiz.js | 1 exemption may fit you... / n exemptions may fit you. You only need one... | Puede que le corresponda 1 exención... / Puede que le correspondan n exenciones. Solo necesita una... | Singular and plural are separate strings. Does "corresponder" sound like a promise of entitlement? |
| 22 | am-i-exempt (jail card) | Keep your release papers. | Guarde sus papeles de salida (documentos de liberación). | No source (Low). A reentry or legal-aid reviewer should confirm common usage. |
| 23 | keep, about | HBIS, AATV / Illinois law: Emergency Medical Treatment Act... | HBIS (programa estatal para inmigrantes mayores), AATV (programa estatal para solicitantes de asilo y víctimas de tortura) / Ley de Illinois: Emergency Medical Treatment Act (Ley de Tratamiento Médico de Emergencia), 210 ILCS 70 (en inglés) | Name glosses with no official Spanish source (HBIS unverified, statutes Low). AATV correctly says "solicitantes": it is the program for applicants. |
| 24 | am-i-exempt (health card) | Use the screener at abe.illinois.gov: "Check to see if I meet SNAP & Medicaid Work Requirements." | Use la herramienta de evaluación en abe.illinois.gov: "Check to see if I meet SNAP & Medicaid Work Requirements" ("Comprobar si cumplo con los requisitos laborales de SNAP y Medicaid"). | If the reader switches ABE to Spanish, the real button label is unknown. Not "prueba piloto" (the HFS letter's error). |

## 3. Possible problems in the English source (for the site owner)

The Spanish mirrors all of these on purpose. Fix the English first; then tell the translator which Spanish sentence to change.

**Ambiguous or inconsistent statements**
- **"without a green card" scope** (keep and get-care, "Who lost Medicaid"): it can attach only to "trafficking/domestic violence survivors" or to the whole list. HFS materials suggest the whole list. Please reword the English (for example "People without a green card who are refugees, asylees, ..."). The Spanish will follow.
- **keep, Non-citizens:** "Have a green card and are a veteran, on active duty, or their spouse or child": whose spouse or child, and must the spouse or child also have a green card?
- **keep vs am-i-exempt dates:** keep says "By Jan. 2027, you can ask for an exemption ... in Manage My Case"; am-i-exempt says the screener and exemption requests "are coming in late 2026". Also, today is late November 2026, so "coming in late 2026" may already be out of date.
- **"(first renewals: March)"** (index, am-i-exempt) gives no year (presumably 2027; about says March 2027).
- **"after 5 p.m." on Dec. 31, 2026**: no time zone (presumably Central).
- **"Mon–Fri 8:30–5:30"** (AIDS Foundation Chicago): no a.m./p.m. The Spanish infers 8:30 a. m. to 5:30 p. m.
- **"New applicants are checked on the month before they apply"** (about) and **"SNAP counting for Medicaid"** (about) are terse.
- **keep, exemptions heading vs lead:** "You don't need to meet work requirements if you:" is certain; the next line says "you may not need to". Both mirrored.
- **Tense:** keep and am-i-exempt say "Illinois was one of the states that sued"; about says "Illinois is one of the states that sued".
- **"Work rules" vs "work requirements"**: the English uses both. The Spanish uses one term ("requisitos laborales"), so readers do not think they are different things.

**Checkbox vs result card mismatches (am-i-exempt) and similar**
- Caregiver checkbox says "I care for a child under 14"; the caregiver card limits it to "parents, guardians, relatives, and family caregivers".
- Foster checkbox omits the card's condition "had Medicaid while in foster care".
- Step 1 checkbox says "have Medicare or qualify for it"; the not-aca card says only "have Medicare".
- index says "don't have a child under 18 living with them"; the quiz and the HFS letter say a *related* child.
- keep's exemption list says "a veteran rated 100% disabled" without saying by the VA; am-i-exempt says "by the VA".

**"any status"**
- clinics (free clinic, Cost) and about (CommunityHealth item) say "any status". Elsewhere the English says "any immigration status". Please confirm it means immigration status; if so, write "any immigration status" and the Spanish becomes "sin importar su estatus migratorio".

**Naming inconsistencies**
- "AIDS Foundation Chicago" (am-i-exempt health card, who-to-call card) vs "AIDS Foundation of Chicago" (source links). The Spanish copies each.
- "Family Care" (site) vs "FamilyCare" (HFS's spelling).
- "Illinois immigrant rights hotline (ICIRR)" (get-care, clinics, who-to-call) vs "The Family Support Hotline" (about). Same number, two names.

**Dates**
- about: "HFS: Non-citizen coverage notice (June 26, 2026, PDF)". The PDF itself is dated July 6, 2026 (the file name `cn06262026...` says 06/26). Note: `link-map.md` wrongly says about.html shows no date; it does.

**Dead, mislabeled or unverified links** (from `link-map.md`)
- DEAD (404): `https://cookcountyhealth.org/?p=138910` ("Pay my bill", clinics and about). Working page: `https://cookcountyhealth.org/patient-and-visitors/billing-and-insurance/`. When fixed, the Spanish can link to `https://cookcountyhealth.org/es/paciente-y-visitantes/facturacion-y-seguros/` (not yet fetched).
- WRONG LANGUAGE PATH: "All are welcome" (clinics, who-to-call, about) uses the Arabic `/ar/` path. The Spanish pages already use the `/es/` page.
- CONTENT MISMATCH: `https://cookcountypublichealth.org/?p=8636`, labeled "Cook County clinic directory", is "Testing Sites In Cook County" (STD/HIV testing).
- MISLABELED: `https://communityhealth.org/9347-2/`, labeled "CommunityHealth", is a press article (ICIRR, "Healing Without Borders").
- ODD PLACEMENT: who-to-call's 2-1-1 card cites "Cook County immigrant resources".
- REDIRECT: `https://snapworkrequirements.illinois.gov` redirects to an IDHS page.
- NOT VERIFIABLE by the link auditor (403 or certificate errors; check in a browser): stateline.org/?p=18999, both aidschicago.org links, the chicago.gov FQHC flyer (may be a 2020 flyer), the three ilga.gov statute links, 340bopais.hrsa.gov.

## 4. Link decisions

Rule: "(en inglés)" sits inside the link text, at the end. When the link text ends with a PDF/draft/date parenthesis, it merges: "(PDF, en inglés)", "(borrador, PDF, en inglés)", "(29 de junio de 2026, en inglés)". A gloss or citation parenthesis stays separate: "Illinois Attorney General (Procurador General de Illinois) (en inglés)".

| Resource | Pages | Spanish pages link to | Label | Why |
|---|---|---|---|---|
| HFS ACA Adult customer notice | index, keep, exempt, about | `.../medicaidguide/acaadultcustnoticespanish.pdf` | none | Careful human translation of the letter people received. The only HFS Spanish PDF we link. |
| HFS H.R. 1 Phase 2 toolkit | index, keep, exempt, about | English: `.../fedresctr/englishhr1phase2toolkit.pdf` | (en inglés) / (PDF, en inglés) | Spanish version is machine-translated with serious errors ("Obra" for Work, "a media hora", phone typo). Reverted. |
| HFS Module 4, Exemptions (draft deck) | keep, exempt, about | English: `.../fedresctr/hr1mod4exempteng.pdf` | (en inglés) / (borrador, PDF, en inglés) | Spanish draft has errors ("al menos a media hora"). Reverted. |
| HFS Module 2, Non-citizen eligibility (draft deck) | keep, get-care, about | English: `.../fedresctr/hr1mod2englishsd.pdf` | (en inglés) / (borrador, PDF, en inglés) | Spanish draft uses "libertad condicional" for parole. Reverted. |
| HFS non-citizen toolkit | keep, get-care, about | English: `.../fedresctr/hr1noncitizentkenglish.pdf` | (en inglés) / (PDF, en inglés) | Draft-quality Spanish. Reverted. |
| getmedicaidfacts.com | keep, who-to-call, about | `https://getmedicaidfacts.com/es/` | none | Verified Spanish site. |
| Cook County Health: CareLink | get-care, who-to-call, about | `https://cookcountyhealth.org/es/enlace-de-cuidado/` | none | Verified. Link text keeps "CareLink" (not "Enlace de cuidado"). |
| Cook County Health: locations / Contact Us | clinics, who-to-call, about | `https://cookcountyhealth.org/es/contactenos/` | none | Verified. Spanish page title is only "Contáctenos", so "Locations" is lost in about's link text. |
| Cook County Health: All are welcome | clinics, who-to-call, about | `https://cookcountyhealth.org/es/presione-soltar/cook-county-health-all-are-welcome-here-aqui-todos-son-bienvenidos/` | none | Verified; also avoids the English page's `/ar/` bug. |
| Illinois Legal Aid Online (appeals, Get Legal Help, its FAQ) | exempt, who-to-call, about | `https://es.illinoislegalaid.org/...` (same paths) | none | Verified. |
| Erie Sankofa Village | clinics, about | `https://www.eriefamilyhealth.org/es/locations/sankofavillage/` | none | Verified, but much body text is still English. Consider "(en parte en inglés)" (would need a site-owner decision). |
| CommunityHealth home | clinics, who-to-call | `https://communityhealth.org/#espanol` | none | Spanish section on the same page; anchor not tested in a browser. |
| Aunt Martha's, Chicago Heights | clinics, about | `https://www.auntmarthas.org/es/location/centro-de-salud-y-bienestar-pediatrico/` | none | Same address, but the Spanish page is titled "Centro de salud y bienestar pediátrico" (pediatric) while the English calls it a family health center. Link text keeps the clinic's English name so readers do not think it is children-only. **Ask Aunt Martha's or check by phone whether the Spanish title is wrong.** |
| abe.illinois.gov (Manage My Case) | index, keep, exempt, who-to-call | same URL | none | Site has its own "Español" switch; no stable Spanish URL. Not labeled "(en inglés)". |
| Cook County Health: Pay my bill | clinics, about | same (dead) URL | (en inglés) | Dead link; mirrors the English (section 3). |
| All other links (HFS changes page, HFS FAQs, HFS prescriptions, HFS non-citizen notice, CMS, SHVS, Stateline, Illinois Attorney General, VA, HHS, ilga.gov x3, chicago.gov flyer, HRSA, CDC, Austin Weekly News, The Resurrection Project, cookcountypublichealth.org, cookcountyil.gov, ICIRR, AIDS Foundation of Chicago x2, illinoisfreeclinics.org, snapworkrequirements, communityhealth.org/9347-2/) | various | English URL | (en inglés) | No Spanish version found or verifiable (`link-map.md`). |

## 5. Suggested Spanish-only additions for the site owner to consider

These were in the first draft. They are not in the English, so they were removed. Each could help Spanish readers; the site owner decides. If approved, add the same idea to the English too, or approve it as Spanish-only.

| # | Page and place | Removed Spanish | What it adds |
|---|---|---|---|
| 1 | keep (Steps, step 1); exempt (group-unsure card) | "(puede elegir "Español" en la parte de arriba)" / "puede elegir "Español" arriba en la página" | Tells readers abe.illinois.gov has a Spanish switch. Probably the most useful one. |
| 2 | exempt (group-unsure card) | "(el sitio del Estado para pedir y administrar beneficios ...)" after abe.illinois.gov | Describes ABE. |
| 3 | exempt (health card) | "(bilingüe, inglés y español; ...)" | Claims AIDS Foundation Chicago helps in Spanish. Not confirmed by any source; confirm with AFC first. |
| 4 | keep (If you lose Medicaid); about (HFS prescriptions item) | "el AIDS Drug Assistance Program (ADAP), programa que ayuda a pagar medicamentos para el VIH" | Says what ADAP does. A neutral name gloss could be offered instead. |
| 5 | keep (Work requirements, last paragraph) | "La ACA es la Ley de Cuidado de Salud Asequible, u Obamacare." (also inside about's ACA-notice description) | Defines the ACA. index already glosses it faithfully, because the English there says "the ACA (Obamacare)". |
| 6 | exempt (For everyone); about (first source) | "declarar **por escrito**" | Says the attestation is written. True on keep ("written attestation"), but not stated on these pages. |
| 7 | keep (Keeping your coverage) | "(las cartas lo llaman "período de elegibilidad")" | Matches the term on HFS Spanish letters. |
| 8 | keep (If you lose Medicaid) | "la prima **mensual**" | Explains "premium". |
| 9 | keep (exemption list) | "del VA (Departamento de Asuntos de Veteranos)" after the 100% rating | Says who gives the rating. |
| 10 | index (card 3); about (CareLink item) | "CareLink (programa de descuentos de Cook County Health)" | Says what CareLink is. |
| 11 | about (Get Medicaid Facts link) | "(Cook County Health, el sistema de salud público del condado de Cook)" | Describes Cook County Health. |
| 12 | keep (If you lose Medicaid) | "Get Covered Illinois (el mercado de seguros médicos de Illinois)" | Describes GCI (repeats the sentence). |
| 13 | about (ACA-notice description) | "TTY (para personas sordas o con dificultad para oír)" | Explains TTY (who-to-call already explains it, because the English does). |
| 14 | get-care, clinics, who-to-call, about | "Línea Directa de Apoyo Familiar de (la Coalición de Illinois por los Derechos de los Inmigrantes y Refugiados) ICIRR" | Replaced the English description ("Illinois immigrant rights hotline") with the line's name and the coalition's full name. Now literal. Consider using one name in both languages. |
| 15 | keep, get-care (Who lost Medicaid) | "Personas sin tarjeta verde que son refugiadas, ..." (reordered) | Resolved the "without a green card" ambiguity. Fix the English instead (section 3). |

## 6. Layout risks

Spanish strings much longer than the English (characters, English → Spanish). Please check on a phone (about 360 px wide) and at 200% zoom.

| Where | English | Spanish | Length |
|---|---|---|---|
| Main nav, whole bar (all pages) | Keep your Medicaid · Am I exempt? · Get care · Clinics · Who to call · About | Mantenga su Medicaid · ¿Tengo exención? · Atención médica · Clínicas · A quién llamar · Acerca de | 61 → 82 |
| Phone strip button (all pages) | See every phone number | Ver todos los números de teléfono | 22 → 33 |
| Visitor bar button (`visitor-count.js`) | Provider or staff | Proveedor de salud o personal | 17 → 29 |
| Visitor bar title | Who is visiting today? | ¿Quién nos visita hoy? | 22 → 22 |
| index, topic button 3 and card 3 title | Lost Medicaid? Get care | ¿Perdió Medicaid? Reciba atención médica | 23 → 40 |
| index, topic hint 3 | You can still get care | Todavía puede recibir atención médica | 22 → 37 |
| index, Manage My Case path chips | Case Summary / Benefit Details / Notices | Case Summary (Resumen del caso) / Benefit Details (Detalles de los beneficios) / Notices (Avisos) | 12/15/7 → 31/44/16 |
| index, Key dates column | Oct. 1, 2026 / Dec. 31, 2026 / Jan. 1, 2027 | 1 de octubre de 2026 / 31 de diciembre de 2026 / 1 de enero de 2027 | 12 → 23 max |
| am-i-exempt, result badges | May be exempt / Work rules may apply / Work rules may not apply | Puede tener una exención / Es posible que deba cumplir los requisitos / Puede que no se apliquen los requisitos | 13 → 24, 20 → 42, 24 → 39 |
| am-i-exempt, quiz buttons | See my results / Start over | Ver mis resultados / Empezar de nuevo | 14 → 18, 10 → 16 |
| am-i-exempt, Step 1 "another Medicaid group" checkbox | (AABD, Moms & Babies, Family Care) | three glosses added | about 70 → 160 |
| keep, quiz button | Not sure? Try the "Am I exempt?" quiz | ¿Tiene dudas? Haga el cuestionario "¿Tengo exención?" | 37 → 51 |
| keep, button | Where to get care | Dónde recibir atención médica | 17 → 29 |
| keep, jump nav | Who doesn't need to / Non-citizens | Quién no tiene que cumplirlos / Personas que no son ciudadanas | 19 → 29, 12 → 30 |
| keep, two-column exemption list | Are in another Medicaid group (...) | glossed list | much longer |
| get-care, jump nav | Need help finding care? | ¿Necesita ayuda para encontrar atención médica? | 23 → 47 |
| get-care, eyebrows | Emergency? / Got a hospital bill? | ¿Es una emergencia? / ¿Le llegó una factura del hospital? | 10 → 19, 20 → 35 |
| who-to-call, jump nav | HIV care and coverage / Finding care | Atención y cobertura para el VIH / Cómo encontrar atención médica | 21 → 32, 12 → 30 |
| who-to-call, card titles | Illinois immigrant rights hotline (ICIRR) / AIDS Foundation Chicago / illinoisfreeclinics.org | ... (en inglés) added | 41 → 64, 23 → 35, 23 → 35 |
| about, source links | e.g. CMS: Guidance on ... (Apr. 8, 2026, PDF) | CMS (la agencia federal de Medicare y Medicaid): ... (8 de abril de 2026, PDF, en inglés) | long but in running lists |

## 7. Page-by-page flags

Flags that the decisions above settled were dropped (placement of "(en inglés)", "100%" spacing, "todos los días", "bilingüe", the Spanish HFS toolkit links, the ABE "Español" note, the ACA definition, "por escrito" where not in the English). "Spanish now" is the current text. Types: LEGAL (eligibility, deadline, cost, legal statement), TERM, LINK, LENGTH, AMBIGUOUS-SOURCE (the English is unclear), REGISTER/REGIONAL.

### 7.0 Site-wide strings (all 7 pages; identical on every page)

| English | Spanish now | Type | Note |
|---|---|---|---|
| `Home \| Medicaid Is Changing` (title pattern); brand "Medicaid Is Changing" | `Inicio \| Medicaid está cambiando`; "Medicaid está cambiando" | TERM | Page titles: Inicio, Mantenga su Medicaid, ¿Tengo exención?, Atención médica, Clínicas, A quién llamar, Acerca de. |
| Skip to main content / Menu / aria-label Main / Footer | Ir al contenido principal / Menú / Principal / Pie de página | TERM | Style guide §6. |
| Nav: Keep your Medicaid, Am I exempt?, Get care, Clinics, Who to call, About; footer adds Home, Sources | Mantenga su Medicaid, ¿Tengo exención?, Atención médica, Clínicas, A quién llamar, Acerca de; Inicio, Fuentes | TERM / LENGTH | "¿Tengo exención?" avoids gendered "exento". "Atención médica" is clearer than "Obtenga atención". Translator may prefer other short labels. |
| Questions? Call Illinois Medicaid (HFS) / Coverage & renewal questions / See every phone number | ¿Preguntas? Llame a Medicaid de Illinois (HFS) / Preguntas sobre cobertura y renovación / Ver todos los números de teléfono | TERM | HFS's full Spanish name is not in this fixed strip; it appears once in the body of index, keep and am-i-exempt only. Add it on get-care, clinics, who-to-call and about? |
| Information checked Nov. 2026. Call ahead, since programs and services can change. | Información revisada en noviembre de 2026. Llame antes de ir, porque los programas y servicios pueden cambiar. | TERM | |
| This is not legal or medical advice. About this site | Esta información no es asesoría legal ni médica. Acerca de este sitio | LEGAL | Top priority #6. |
| Source: / Sources: | Fuente: / Fuentes: | TERM | |
| (call X) / Map (opens Google Maps) | (llamar a X) / Mapa (abre Google Maps) | TERM | Hidden text; clinic names after "a" stay in English. |
| Call 312-... | Llame al 312-... | TERM | |
| "work rules" and "work requirements" | requisitos laborales (one term) | TERM | See section 3. |
| ACA Adults (first use per page) | adultos de la ACA ("ACA Adults"); about the reader: "estar en el grupo de adultos de la ACA" | TERM | Gender-neutral. |
| Illinois Attorney General (first use per page) | Illinois Attorney General (Procurador General de Illinois) | TERM | Decision 4. "Fiscal General" is the common news alternative. |

### 7.1 index

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | Hero | Here's how to stay covered. | Aquí le explicamos cómo mantenerla. | REGISTER | "mantenerla" refers to "su cobertura". |
| 2 | Does this apply to you? | Work rules and 6-month renewals are for ACA Adults: people with Medicaid through the ACA (Obamacare). | ... para los adultos de la ACA ("ACA Adults"): personas que tienen Medicaid por medio de la Ley de Cuidado de Salud Asequible (ACA, u Obamacare). | LEGAL | Defines who the rules apply to. `<strong>` covers the gloss. |
| 3 | Does this apply to you? | Most are 19 to 64, aren't on Medicare, and don't have a child under 18 living with them. | La mayoría tiene de 19 a 64 años, no tiene Medicare y no vive con ningún niño menor de 18 años. | LEGAL | Mirrors "a child" (not "related"); see section 3. |
| 4 | Not sure? | Not sure? | ¿Tiene dudas? | REGISTER | Avoids gendered "seguro/segura". |
| 5 | Not sure? | Check State letters for your "medical group," ... go to Manage My Case: Case Summary / Benefit Details / Notices | Busque las palabras "medical group" (grupo médico) en las cartas del Estado ... entre a Manage My Case ("Administrar mi caso"): Case Summary (Resumen del caso) / ... | TERM / LENGTH | Top priority #8, #9. Path chips are about twice as long. |
| 6 | Key dates | Some non-citizens lost federally funded Medicaid. | Algunas personas que no son ciudadanas perdieron el Medicaid pagado con fondos federales. | LEGAL | |
| 7 | Key dates | Work rules apply to new applications made after 5 p.m. / (first renewals: March) | ... a las solicitudes nuevas hechas después de las 5 p. m. / (primeras renovaciones: marzo) | LEGAL | No time zone or year in the English. |
| 8 | 3 things, step 2 | Tell HFS right away if anything changes. | Si algo cambia, avísele de inmediato al Departamento de Servicios de Salud y Familia de Illinois (HFS). | TERM | HFS full name once per page (glossary Medium: three Spanish names in use). |
| 9 | 3 things, step 3 | some adults must renew every 6 months and show work, school, or volunteer hours. | algunos adultos deberán renovar cada 6 meses y demostrar horas de trabajo, estudio o voluntariado. | LEGAL | "demostrar" vs "comprobar"/"reportar". |
| 10 | Card 2 | Check which work rule exemptions might fit you | Vea qué exenciones de los requisitos laborales podrían corresponderle | LEGAL | "corresponderle" used site-wide for "fit you". |
| 11 | Sources | HFS work rules toolkit | Materiales de HFS sobre los requisitos laborales (en inglés) | LINK | Reverted to English PDF (section 4). |

### 7.2 keep-your-medicaid

Note: this page has no Case Summary click path; only Manage My Case and "medical group".

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | Work requirements lead | Unless you're exempt, do ONE of these for at least 1 month out of every 6: | A menos que tenga una exención, haga UNA de estas cosas por lo menos 1 mes de cada 6: | LEGAL | Must read as every 6-month period, not once ever. |
| 2 | Option 1 | $580: seasonal workers can average it over 6 months. | $580: los trabajadores de temporada pueden sacar un promedio de sus ingresos de 6 meses. | TERM | "temporada" (seasonal), not "temporal" (temporary). |
| 3 | Option 2 | Go to school half-time / high school ... (at least half-time) | Vaya a la escuela a medio tiempo / high school (preparatoria) ... (al menos a medio tiempo) | LEGAL / TERM | Top priority #14. "secundaria" avoided (grades 7-9 in Mexico). |
| 4 | Option 3 | 80 hours a month: any combination of work, volunteering, school, or a work program. | 80 horas al mes: cualquier combinación de trabajo, voluntariado, escuela o un programa de trabajo. | LEGAL | |
| 5 | New applicants callout | New applicants / You must have met one requirement in the month before you apply. ... HFS can ask for proof from any month since your last renewal. | Si solicita Medicaid por primera vez / Debe haber cumplido con un requisito en el mes anterior a su solicitud. ... El Departamento de Servicios de Salud y Familia de Illinois (HFS) puede pedirle comprobantes de cualquier mes desde su última renovación. | LEGAL / LENGTH | Look-back rule. Heading turned into a clause. |
| 6 | Work requirements, last line | Work rules are for ACA Adults. | Los requisitos laborales son para los adultos de la ACA ("ACA Adults"). | TERM | Added ACA definition removed (section 5). |
| 7 | Exemptions h2 / lead | You don't need to meet work requirements if you: / ... you may not need to ... HFS makes the final decision. | No tiene que cumplir con los requisitos laborales si usted: / ... es posible que no tenga que ... HFS toma la decisión final. | LEGAL / AMBIGUOUS-SOURCE | Certain heading vs hedged lead, as in English. |
| 8 | Exemptions list | Are in another Medicaid group (AABD, Moms & Babies, Family Care) | Está en otro grupo de Medicaid: AABD (Medicaid para personas mayores, ciegas o con discapacidad), Moms & Babies (...) o Family Care (...) | TERM / LENGTH | Name glosses (allowed). "o" before the last item: same scope as the English list? |
| 9 | Exemptions list | Care for a child under 14 or a dependent person with a disability | Cuida a un niño menor de 14 años o a una persona con discapacidad que depende de usted | LEGAL | Keep distinct from the "under 18" ACA rule. |
| 10 | Exemptions list | Are a veteran rated 100% disabled | Es veterano o veterana con una calificación de discapacidad del 100% | LEGAL | "del VA" removed (not in English). |
| 11 | Exemptions list | Are American Indian or Alaska Native | Es una persona indígena americana o nativa de Alaska | REGISTER | Made gender-neutral, matching am-i-exempt. |
| 12 | Exemptions list | ... a serious mental health or substance use condition ... | ... una afección de salud mental grave, un trastorno por consumo de drogas o alcohol ... | TERM | "drogas o alcohol" is narrower-sounding than "sustancias". |
| 13 | Exemptions list | Get TANF and follow its work rules / Meet SNAP work rules, or are in SNAP's 3-month grace period | Recibe TANF (Asistencia Temporal para Familias Necesitadas) y cumple con los requisitos laborales de TANF / Cumple con los requisitos laborales de SNAP (Programa de Asistencia Nutricional Suplementaria, o cupones de alimentos), o está en el período de gracia de 3 meses de SNAP | LEGAL | "de TANF" makes "its" explicit (was "sus"), as on am-i-exempt. |
| 14 | Exemptions list | Were in foster care and are now under 26 / Have a short-term hardship, like a hospital stay | Estuvo en cuidado de crianza (foster care) y ahora tiene menos de 26 años / Tiene una dificultad a corto plazo, como una hospitalización | TERM | foster care Low. "hospitalización" avoids gendered "internado". |
| 15 | Update callout | (court ruling) | see top priority #5 | LEGAL | |
| 16 | Keeping your coverage | ACA Adults must renew every 6 months, even if exempt. / 30 days ... still covered | Los adultos de la ACA deben renovar cada 6 meses, aunque tengan una exención. / Si HFS le pide más información, tiene 30 días para enviarla. Usted sigue teniendo cobertura durante ese tiempo. | LEGAL | |
| 17 | Keeping your coverage | coverage period / SNAP exemption may not / By Jan. 2027 ... written attestation ... crime | see top priority #12, #11, #4 | LEGAL | "Para enero de 2027" = by January. |
| 18 | Steps, step 1 | Go to abe.illinois.gov. Check your medical group and renewal date. | Vaya a abe.illinois.gov. Revise su "medical group" (grupo médico) y su fecha de renovación. | TERM | ABE "Español" note removed (section 5). |
| 19 | Steps, step 2 | Tell HFS right away if your address, phone, email, or immigration status changes. | Avise a HFS de inmediato si cambia su dirección, teléfono, correo electrónico o estatus migratorio. | LEGAL | |
| 20 | Non-citizens lead | Since Oct. 1, 2026, non-citizens keep Medicaid only if they: | Desde el 1 de octubre de 2026, las personas que no son ciudadanas mantienen Medicaid solo si: | LEGAL | |
| 21 | Non-citizens list | (see top priority #3) / Are under 19 or pregnant (any immigration status) / Were already in HBIS, AATV, or certain other state programs | ... / Son menores de 19 años o están embarazadas (sin importar su estatus migratorio) / Ya estaban en HBIS (programa estatal para inmigrantes mayores), AATV (...) o algunos otros programas del Estado | LEGAL / TERM | HBIS gloss unverified. |
| 22 | Who lost Medicaid | (see top priority #2) | | AMBIGUOUS-SOURCE | |
| 23 | If you lose Medicaid | Citizens and qualifying non-citizens can apply for marketplace insurance through Get Covered Illinois. | Las personas ciudadanas y las personas no ciudadanas que califican pueden solicitar un seguro del Mercado de Seguros Médicos a través de Get Covered Illinois. | TERM | GCI gloss removed. |
| 24 | If you lose Medicaid | If you're living with HIV, the AIDS Drug Assistance Program may help pay certain marketplace premiums. | Si vive con el VIH, el AIDS Drug Assistance Program puede ayudarle a pagar ciertas primas del Mercado. | TERM | ADAP description removed. Spanish availability of the ADAP line unknown. |
| 25 | Sources | HFS work rules toolkit / exemptions guide / non-citizen guide / non-citizen toolkit / Illinois Attorney General | Materiales de HFS sobre los requisitos laborales (en inglés) / Guía de HFS sobre exenciones (en inglés) / Guía de HFS para personas que no son ciudadanas (en inglés) / Materiales de HFS para personas que no son ciudadanas (en inglés) / Illinois Attorney General (Procurador General de Illinois) (en inglés) | LINK | Reverted to English PDFs; labels unified across pages. |
| 26 | Jump nav, buttons | (several) | (longer) | LENGTH | Section 6. |

### 7.3 am-i-exempt and quiz.js

General: "ACA Adult" about the reader = "estar en el grupo de adultos de la ACA". "screener" = "herramienta de evaluación". "fit you" = "corresponderle". Cards repeat the Manage My Case gloss (decision 5). ABE Customer Service is glossed "(ABE Customer Service)" only in the first card; consider repeating it in each card too.

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | h1 | Am I Exempt from Work Rules? | ¿Tiene una exención de los requisitos laborales? | REGISTER | Shifts from "Am I" to usted. |
| 2 | Top callout | This quiz can't decide if you're exempt. Only HFS can. | Este cuestionario no puede decidir si usted tiene una exención. Solo el Departamento de Servicios de Salud y Familia de Illinois (HFS) puede decidirlo. | LENGTH | HFS full name inside the bold sentence. |
| 3 | Step 1 | Work rules are only for ACA Adults. Check any that are true for you. | Los requisitos laborales son solo para los adultos de la ACA ("ACA Adults"). Marque todas las que se apliquen a usted. | TERM | No ACA full-name gloss here (ACA appears only inside "ACA Adults"). |
| 4 | Step 1 checkboxes | (top priority #1) | | LEGAL | |
| 5 | Health checkboxes | I'm blind or have a disability (by Social Security standards) / serious mental health condition / drug or alcohol use condition / serious or complex medical condition / physical, intellectual, or developmental disability | Soy una persona ciega o con discapacidad (según las reglas del Seguro Social) / Tengo una afección de salud mental grave / Tengo un trastorno por consumo de drogas o alcohol / ... grave o compleja que necesita tratamiento regular / ... que me dificulta las actividades diarias | LEGAL | "afección" vs plainer "problema de salud"; "trastorno" is a little more clinical than "condition". |
| 6 | Health checkbox | I have a health condition, but I'm not sure if it counts | Tengo una afección de salud, pero no sé si cuenta | TERM | Avoids "no estoy seguro". |
| 7 | Health checkbox | I'm staying in a hospital ... or I must travel far for medical care | Estoy internado o internada en un hospital ... o tengo que viajar lejos para recibir atención médica | LEGAL | Top priority #10. |
| 8 | Family checkboxes | I care for a child under 14 (paid or unpaid) / ... a person with a disability / I was in foster care and I'm now under 26 | Cuido a un niño menor de 14 años (con pago o sin pago) / ... / Estuve en cuidado de crianza (foster care) y ahora tengo menos de 26 años | LEGAL / AMBIGUOUS-SOURCE | Checkbox vs card mismatch (section 3). |
| 9 | Other checkboxes | I'm a veteran rated 100% disabled by the VA / American Indian ... Indian Health Service / jail / TANF / SNAP | Soy veterano o veterana y el VA (Departamento de Asuntos de Veteranos) me dio una calificación de discapacidad del 100% / Soy una persona indígena americana o nativa de Alaska, o puedo recibir atención médica a través del Servicio de Salud Indígena (IHS) / Estoy en la cárcel o en prisión, o salí en los últimos 3 meses / Recibo TANF (...) y cumplo con los requisitos laborales de TANF / Recibo SNAP (...) y cumplo con los requisitos laborales de SNAP, o estoy en el período de gracia de 3 meses de SNAP | LEGAL / LENGTH | SNAP item is long. "(A y B) o C" structure kept. |
| 10 | not-aca card | ... have Medicare, have a related child under 18 living with you ... they likely don't apply | ... tiene Medicare, vive con un hijo u otro niño de su familia menor de 18 años ... es probable que los requisitos no se apliquen a usted | LEGAL | |
| 11 | not-aca card | Check your medical group in State letters, or in Manage My Case: Case Summary → ... | Revise su "medical group" (grupo médico) en las cartas del Estado, o en Manage My Case ("Administrar mi caso"): Case Summary (Resumen del caso) → ... | TERM | Order unified with other pages. |
| 12 | not-aca card | Think HFS has you in the wrong group? Call ABE Customer Service. | ¿Cree que HFS le asignó el grupo equivocado? Llame al Servicio al Cliente de ABE (ABE Customer Service). | REGISTER | Avoids gendered "lo/la tiene". |
| 13 | group-unsure card | Sign in to Manage My Case at abe.illinois.gov. Go to Case Summary → Benefit Details → Notices. | Inicie sesión en Manage My Case ("Administrar mi caso") en abe.illinois.gov. Vaya a Case Summary (Resumen del caso) → Benefit Details (Detalles de los beneficios) → Notices (Avisos). | TERM | Gloss repeated (card can show alone); ABE description and "Español" note removed. |
| 14 | health card | HFS calls this "medically frail" / HFS lists these groups | HFS llama a esto ser "médicamente frágil" / HFS menciona estos grupos | LEGAL / TERM | "menciona" implies neither a complete nor an incomplete list. |
| 15 | health card | Blind or disabled under Social Security standards | Ceguera o discapacidad según las reglas del Seguro Social | LEGAL | Nouns, to avoid gender. |
| 16 | health card | (court ruling) / HFS hasn't updated its guidance yet, so check back. | top priority #5 / HFS todavía no ha actualizado sus instrucciones, así que vuelva a revisar más adelante. | LEGAL | |
| 17 | health card | keep copies of records in case HFS asks | guarde copias de su expediente médico por si HFS se las pide | TERM | |
| 18 | health card | Use Illinois Legal Aid Online's Get Legal Help. | Use Obtenga ayuda legal de Illinois Legal Aid Online. | LINK | Tool's own Spanish name; links to es.illinoislegalaid.org. |
| 19 | health card | AIDS Foundation Chicago helps with insurance questions (bilingual, Mon–Fri 8:30–5:30). | AIDS Foundation Chicago ayuda con preguntas sobre seguros médicos (bilingüe; lunes a viernes, de 8:30 a. m. a 5:30 p. m.). | TERM | "(inglés y español)" removed. a.m./p.m. inferred. |
| 20 | treatment card | ... can also count as a special medical need. | ... también puede contar como una necesidad médica especial. | LEGAL | |
| 21 | hardship card | ... can count. You must ask for this exemption. / HFS gives this exemption on its own if you live in a county with a federal disaster or high unemployment. | Puede contar una estancia en un hospital ... Usted tiene que pedir esta exención. / HFS le da esta exención automáticamente si usted vive en un condado con un desastre declarado por el gobierno federal o con mucho desempleo. | LEGAL | "estancia" (Mexico) vs "estadía". "mucho desempleo" vs S1's more precise "alta tasa de desempleo". |
| 22 | pregnant card | (miscarriage) / Moms & Babies | top priority #7 / Moms & Babies (Medicaid para embarazadas y bebés) | LEGAL | |
| 23 | caregiver card | Caregivers / (criteria) | Personas que cuidan a otras / top priority #10 | LEGAL | Neutral heading. |
| 24 | foster card | Former foster youth under 26 / It doesn't matter which state ... | Jóvenes menores de 26 años que estuvieron en cuidado de crianza / No importa en qué estado estuvo en cuidado de crianza. | LEGAL / TERM | Both conditions kept. |
| 25 | veteran card | Veterans with a VA disability rating of 100% ... / VA disability rating page | Los veteranos con una calificación de discapacidad del 100% del VA ... / página del VA sobre calificaciones de discapacidad (en inglés) | LEGAL / LINK | Masculine generic "veteranos". |
| 26 | native card | American Indians, Alaska Natives, American Urban Indians, California Indians, members of a recognized tribe ... | Los indígenas americanos, los nativos de Alaska, los indígenas urbanos estadounidenses, los indígenas de California, los miembros de una tribu reconocida ... | LEGAL / TERM | Legal categories; "indígenas urbanos estadounidenses" is literal; check against S1. |
| 27 | jail card | Keep your release papers. | top priority #22 | TERM | |
| 28 | tanf card | If you get TANF and follow its work rules, you don't have to meet Medicaid's work rules too. | Si usted recibe TANF y cumple con los requisitos laborales de TANF, no tiene que cumplir también con los requisitos laborales de Medicaid. | LEGAL | |
| 29 | snap card | (SNAP rule) / Check your SNAP status in Manage My Case | top priority #11 / Revise su situación en SNAP en Manage My Case ("Administrar mi caso") | LEGAL / TERM | Gloss repeated. |
| 30 | none card | If you're an ACA Adult and none of these fit you, do ONE of these for at least 1 month out of every 6: Earn $580 or more / Go to school at least half-time / Do 80 hours of work, volunteering, school, or a work program in a month | Si usted está en el grupo de adultos de la ACA y no se aplica a usted ninguna de estas situaciones, haga UNA de estas cosas durante por lo menos 1 mes de cada 6: Ganar $580 o más en el mes / Ir a la escuela al menos a medio tiempo / Hacer 80 horas de trabajo, voluntariado, escuela o un programa de trabajo en un mes | LEGAL | Whether hours can be combined is as unclear as the English (keep says "any combination"). |
| 31 | For everyone | (dates, 30 days, attestation, crime, appeal) | top priority #15, #4 / ¿Cree que una decisión está mal? Tiene 60 días para apelar. Llame a Apelaciones de Medicaid: | LEGAL / TERM | "Apelaciones de Medicaid" is descriptive (no official line name). "from the date of the notice" not added. |
| 32 | For everyone | HFS says the abe.illinois.gov screener and exemption requests are coming in late 2026. | HFS dice que la herramienta de evaluación de abe.illinois.gov y las solicitudes de exención estarán disponibles a fines de 2026. | AMBIGUOUS-SOURCE | Possibly stale (section 3). |
| 33 | Badges | May be exempt / Work rules may apply / Check first / Work rules may not apply | Puede tener una exención / Es posible que deba cumplir los requisitos / Revise primero / Puede que no se apliquen los requisitos | TERM / LENGTH | Section 6. |
| 34 | quiz.js | Your results / notAca / checkGroup / none | Sus resultados / Es posible que los requisitos laborales no se apliquen a usted. Lea la información de abajo y revise su grupo de Medicaid para confirmarlo. / Primero revise su grupo de Medicaid. Si usted está en el grupo de adultos de la ACA, es posible que tenga que cumplir con los requisitos laborales. / No se marcó ninguna exención. Si usted ... | LEGAL | "para confirmarlo" avoids "seguro/segura". Plurals: top priority #21. |
| 35 | Sources | HFS work rules toolkit / HFS exemptions guide | Materiales de HFS sobre los requisitos laborales (en inglés) / Guía de HFS sobre exenciones (en inglés) | LINK | Reverted to English PDFs. |

### 7.4 get-care

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | Lead | Help is available no matter your immigration status. | Hay ayuda sin importar su estatus migratorio. | LEGAL | Same strength as the English. |
| 2 | Emergency | (ER duty) / Can't get regular Medicaid? Emergency Medicaid (ages 19+) may pay the ER bill. / The hospital can apply for Emergency Medicaid for you. | top priority #16 / ¿No puede recibir Medicaid regular? El Medicaid de emergencia (para personas de 19 años o más) podría pagar la factura de la sala de emergencias. / El hospital puede solicitar el Medicaid de emergencia por usted. | LEGAL | "sala de emergencias", not "urgencias". "regular" vs "completo". |
| 3 | Health centers | No one is turned away for not being able to pay. Any immigration status is welcome. | No se le niega la atención a nadie por no poder pagar. Son bienvenidas las personas de cualquier estatus migratorio. | LEGAL | |
| 4 | Health centers | community health centers / Check-ups and sick visits | centros de salud comunitarios / Chequeos y consultas por enfermedad | TERM | Medium, not confirmed on HRSA Spanish pages. |
| 5 | CareLink | Cook County Health's discount program / Up to 100% off care at Cook County's public hospitals and clinics. / (eligibility) / Bring ID and proof of income and address. | Programa de descuentos de Cook County Health / Hasta un 100% de descuento en la atención médica de los hospitales y clínicas públicos del condado de Cook. / top priority #17 / Lleve una identificación y comprobantes de ingresos y de domicilio. | LEGAL | "Traiga" changed to "Lleve" to match who-to-call. |
| 6 | Hospital bill | No insurance and live in Illinois? Ask the hospital for help before you pay. / (thresholds) | ¿No tiene seguro médico y vive en Illinois? Pida ayuda al hospital antes de pagar. / top priority #18 | LEGAL | |
| 7 | Kids | Under 19 or pregnant? You may get coverage through All Kids or Moms & Babies. / Got a green card? You may qualify for Medicaid again. | ¿Es menor de 19 años o está embarazada? Es posible que reciba cobertura por medio de All Kids (Medicaid para menores de 19 años) o Moms & Babies (Medicaid para embarazadas y bebés). / ¿Obtuvo la tarjeta verde (green card)? Es posible que vuelva a calificar para Medicaid. | LEGAL | Name glosses on first use. No waiting-period caveat added (not in English). |
| 8 | Who lost Medicaid | (top priority #2) / Getting a green card may restore Medicaid. | / Si obtiene la tarjeta verde, es posible que vuelva a tener Medicaid. | AMBIGUOUS-SOURCE | |
| 9 | Need help finding care? | Illinois immigrant rights hotline (ICIRR). Choose your language, then press 7 for healthcare. | Línea de derechos de inmigrantes de Illinois, de ICIRR (en inglés). Elija su idioma y luego marque el 7 para temas de salud. | TERM | Now a literal rendering of the English description (section 5, #14). Phone menu not checked; after choosing Spanish the option may differ. |
| 10 | Need help finding care? | for local services, free and 24/7 | para servicios locales, gratis, las 24 horas, todos los días | TERM | Decided. |
| 11 | Sources | HFS non-citizen toolkit / guide | Materiales de HFS para personas que no son ciudadanas (en inglés) / Guía de HFS para personas que no son ciudadanas (en inglés) | LINK | Reverted. |
| 12 | Jump nav | Need help finding care? | ¿Necesita ayuda para encontrar atención médica? | LENGTH | Section 6. |

### 7.5 clinics

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | All cards | Best for: / Cost: | Recomendado para: / Costo: | TERM | Recurring labels; "Costo", not "Coste". |
| 2 | Free clinic, Cost | free (low-income, uninsured adults, any status) | top priority #20 | LEGAL | All three conditions kept. |
| 3 | Free clinic, Best for | some specialty care | algunos tipos de atención especializada | TERM | Does "algunos tipos" suggest more than "some"? |
| 4 | CommunityHealth cards | Main clinic / Kedzie site / Wood St. site / Smaller site. The phone number is for the main clinic. | clínica principal / sede de Kedzie / sede de Wood St. / Sede más pequeña. El número de teléfono es el de la clínica principal. | TERM | Descriptions after the proper name were translated. |
| 5 | Wood St. note | Back of the Yards, Southwest Side | Back of the Yards, en el Southwest Side | REGIONAL | Place names kept; "lado suroeste" possible. |
| 6 | CCH h2 | Cook County Health: open to all, any immigration status | Cook County Health: abierto a todas las personas, sin importar su estatus migratorio | LEGAL | "abierto" agrees with the health system. |
| 7 | CCH Cost | you get a bill, but CareLink can take up to 100% off. You don't need it to be seen. | le mandan una factura, pero CareLink puede darle hasta un 100% de descuento. No necesita CareLink para recibir atención. | LEGAL | "it" made explicit. |
| 8 | CHC section | based on your income / No one is turned away ... Each has more sites; call to find one near you. | según sus ingresos / No se le niega la atención a nadie por no poder pagar. Cada centro tiene más sedes; llame para encontrar una cerca de usted. | LEGAL | |
| 9 | Not sure? | Illinois immigrant rights hotline (ICIRR): pick a language, then press 7 for healthcare. Or call 2-1-1. | Línea de derechos de inmigrantes de Illinois, de ICIRR (en inglés): elija un idioma y luego marque el 7 para temas de salud. O llame al 2-1-1. | TERM | Literal, as on get-care. |
| 10 | Sources | Cook County Health: Pay my bill (dead) / Cook County clinic directory (mismatch) / CommunityHealth (press article) / City of Chicago flyer / HRSA / CDC listing | Cook County Health: Pagar mi factura (en inglés) / Directorio de clínicas del condado de Cook (en inglés) / CommunityHealth (en inglés) / Folleto de la Ciudad de Chicago sobre centros de salud (en inglés) / Registro federal de centros de salud (HRSA) (en inglés) / Ficha del centro de salud en el sitio de los CDC (en inglés) | LINK | Section 3 and 4. Flyer label unified with get-care. |
| 11 | Sources | Aunt Martha's; Erie Family Health | Aunt Martha's; Erie Family Health (Spanish URLs) | LINK | Section 4 (pediátrico issue; Erie partly English). |
| 12 | Addresses, names, phones | (19 cards) | unchanged | TERM | Verified by script and parity check. |

### 7.6 who-to-call

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | Lead | Tap a number to call. | Toque un número para llamar. | TERM | |
| 2 | Medicaid section | TTY = for deaf or hard of hearing. | TTY = para personas sordas o con dificultad para oír. | TERM | Style guide wording. |
| 3 | HFS card | Medicaid (HFS) | Medicaid (HFS) | TERM | No full HFS name on this page (site-wide table). |
| 4 | Appeals card | Medicaid Appeals / Medicaid appeals | Apelaciones de Medicaid / Apelaciones de Medicaid | TERM | Descriptive; title and description now identical, as in English. |
| 5 | ADAP card | AIDS Drug Assistance Program / If you're living with HIV, may help pay certain marketplace premiums. | AIDS Drug Assistance Program / Si usted vive con el VIH, este programa puede ayudarle a pagar ciertas primas del Mercado de Seguros Médicos. | LEGAL | "este programa" added for grammar only. Wording unified with keep. |
| 6 | AFC card | AIDS Foundation Chicago / Bilingual / Mon–Fri 8:30–5:30 | AIDS Foundation Chicago (en inglés) / Bilingüe / lunes a viernes, de 8:30 a. m. a 5:30 p. m. | TERM / AMBIGUOUS-SOURCE | Bilingual claim unconfirmed; a.m./p.m. inferred. |
| 7 | ICIRR card | Illinois immigrant rights hotline (ICIRR) / Need help finding care? Choose your language, then press 7 for healthcare. | Línea de derechos de inmigrantes de Illinois (ICIRR) (en inglés) / ¿Necesita ayuda para encontrar atención médica? Elija su idioma y luego marque el 7 para temas de salud. | TERM / LENGTH | Literal; section 5, #14. |
| 8 | 2-1-1 card | Local services, free and 24/7. | Servicios locales, gratis, las 24 horas, todos los días. | TERM | |
| 9 | CareLink card | Discount program: up to 100% off ... Bring ID and proof of income and address. | Programa de descuentos: hasta un 100% de descuento en la atención en los hospitales y clínicas públicos del condado de Cook. Lleve una identificación y comprobantes de ingresos y de domicilio. | LEGAL | "comprobantes" now plural, as on get-care. |
| 10 | CCH card | Hospital, specialist, or emergency care. Open to all, any immigration status. | Atención en hospital, con especialistas o de emergencia. Abierto a todas las personas, sin importar su estatus migratorio. | LEGAL | |
| 11 | Clinics | Call ahead to check hours, services, and what to bring. See addresses and maps. / CommunityHealth (free clinic) | Llame antes de ir para confirmar el horario, los servicios y qué debe llevar. Ver direcciones y mapas. / CommunityHealth (clínica gratuita) | TERM | Same sentence as clinics lead. |
| 12 | Websites | Manage My Case. Check your medical group and renewal date. / abe.illinois.gov | Manage My Case ("Administrar mi caso"). Revise su "medical group" (grupo médico) y su fecha de renovación. / no label | TERM / LINK | No ABE "Español" note (section 5, #1). |
| 13 | Jump nav | HIV care and coverage / Finding care | Atención y cobertura para el VIH / Cómo encontrar atención médica | LENGTH | |

### 7.7 about and visitor-count.js

Convention on this page: each source link keeps the English document title (it is a citation) and gets "(en inglés)"; dates, "draft" ("borrador") and "Illinois law" ("Ley de Illinois") are in Spanish; descriptions are fully translated. Spanish-URL links use the Spanish page's own title.

| # | Location | English | Spanish now | Type | Why look |
|---|---|---|---|---|---|
| 1 | Who made this site | This site was made by a public health education project. | Este sitio lo hizo un proyecto de educación en salud pública. | REGISTER | Active voice. |
| 2 | Medicaid Changes item | ... promising you are exempt, the Manage My Case steps ... | ... cómo declarar que tiene una exención, los pasos en Manage My Case ("Administrar mi caso") ... | LEGAL | "por escrito" removed. |
| 3 | ACA notice item | HFS: Notice to ACA Adults (Sept. 1, 2026, PDF) / Who is an ACA Adult, ... no help with premiums after losing Medicaid for work rules. Also the exemption screener coming in late 2026 and the ABE Customer Service number and TTY. | HFS: Aviso sobre los requisitos laborales de Medicaid (1 de septiembre de 2026, PDF) / Quién está en el grupo de adultos de la ACA ("ACA Adults"), ... que no hay ayuda para pagar las primas si pierde Medicaid por los requisitos laborales. También la herramienta de evaluación de exenciones que llegará a finales de 2026, y el número de teléfono y el número TTY del Servicio al Cliente de ABE (ABE Customer Service). | LINK / TERM | Spanish PDF title; confirm the Spanish notice's date is the 1st. ACA and TTY glosses removed. |
| 4 | Toolkit, Module 4, Module 2, non-citizen toolkit | (titles) | HFS: H.R. 1 Phase 2 Toolkit (PDF, en inglés) / HFS: H.R. 1 Module 4, Exemptions from Work Requirements (borrador, PDF, en inglés) / HFS: H.R. 1 Module 2, Non-citizen Eligibility Changes (borrador, PDF, en inglés) / HFS: Non-citizen toolkit (PDF, en inglés) | LINK | Reverted to English PDFs and English titles. |
| 5 | Module 4 description | ... caregivers ... former foster youth, veterans ... | ... cuidadores o cuidadoras ... jóvenes que estuvieron en cuidado de crianza (foster care), veteranos ... | TERM | |
| 6 | Get Medicaid Facts | Get Medicaid Facts (Cook County Health) / New applicants are checked on the month before they apply. | Get Medicaid Facts (Cook County Health) / Para las personas que solicitan Medicaid por primera vez, se revisa el mes anterior a la solicitud. | AMBIGUOUS-SOURCE | Terse English. CCH description gloss removed. |
| 7 | HFS FAQs | SNAP counting for Medicaid | si SNAP (cupones de alimentos) cuenta para Medicaid | AMBIGUOUS-SOURCE | |
| 8 | Stateline / Attorney General | (court ruling) / Illinois is one of the states that sued over the "medically frail" rule. | top priority #5 / Illinois es uno de los estados que demandaron por la regla de "médicamente frágil". | LEGAL | "demandaron" agrees with "estados". |
| 9 | Non-citizen notice | HFS: Non-citizen coverage notice (June 26, 2026, PDF) / Coverage for others ended Sept. 30, 2026. | HFS: Non-citizen coverage notice (26 de junio de 2026, PDF, en inglés) / La cobertura de las demás terminó el 30 de septiembre de 2026. | LINK / LEGAL | Date discrepancy, section 3. |
| 10 | Non-citizen toolkit description | Emergency Medicaid (ages 19+, the hospital can apply) | el Medicaid de emergencia (para personas de 19 años o más; el hospital puede solicitarlo) | LEGAL | |
| 11 | Module 2 description | Veterans and active duty keep coverage only with a green card. Illinois still covers all children under 19 and pregnant people. | Los veteranos y las personas en servicio militar activo mantienen la cobertura solo si tienen la tarjeta verde (green card). Illinois todavía cubre a todos los niños menores de 19 años y a las personas embarazadas. | LEGAL | "solo si" keeps the restriction. |
| 12 | CMS / SHVS | The federal rules for non-citizens starting Oct. 1, 2026. / Getting a green card later can make you eligible again if you meet the other rules. | Las reglas federales para personas que no son ciudadanas a partir del 1 de octubre de 2026. / Si obtiene la tarjeta verde más adelante, puede volver a calificar si cumple con las demás reglas. | LEGAL | |
| 13 | Statutes | Illinois law: Emergency Medical Treatment Act (210 ILCS 70) ... / No one can be refused needed emergency treatment because they can't pay. / Hospitals must check and stabilize anyone who comes to the ER. / Free hospital care and discounts for uninsured patients, by income. | Ley de Illinois: Emergency Medical Treatment Act (Ley de Tratamiento Médico de Emergencia), 210 ILCS 70 (en inglés) ... / A nadie se le puede negar el tratamiento de emergencia que necesita por no poder pagar. / Los hospitales deben examinar y estabilizar a cualquier persona que llegue a la sala de emergencias. / Atención gratuita en el hospital y descuentos para pacientes sin seguro médico, según sus ingresos. | LEGAL | Glosses Low. "examinar" vs "revisar" for "check". |
| 14 | HHS | The yearly income amounts for free care (about $31,900) and discounts (about $95,700) for 1 person. | Los montos de ingreso anual para la atención gratuita (unos $31,900) y para los descuentos (unos $95,700), para 1 persona. | LEGAL | "límite" not added. |
| 15 | Cook County items | CareLink for any immigration status, and 2-1-1 (free, 24/7). / Cook County Health cares for all residents, any immigration status. / Uninsured patients get a bill. CareLink can lower it. | CareLink sin importar su estatus migratorio, y 2-1-1 (gratis, las 24 horas, todos los días). / Cook County Health atiende a todos los residentes, sin importar su estatus migratorio. / A los pacientes sin seguro médico les mandan una factura. CareLink puede reducirla. | LEGAL / REGISTER | "todos los residentes" is masculine generic. |
| 16 | CommunityHealth item | Free care for low-income, uninsured adults of any status | Atención gratuita para adultos de bajos ingresos y sin seguro médico, sin importar su estatus | LEGAL | Now literal (decision 6). |
| 17 | ICIRR item | The Family Support Hotline, 1-855-435-7693. Choose your language, then press 7 for healthcare. | La Family Support Hotline (Línea Directa de Apoyo Familiar), 1-855-435-7693. Elija su idioma y luego marque el 7 para temas de salud. | TERM | English name + gloss (decision 4). Gloss from a Quechua handout only (S30). |
| 18 | ILAO items | Appealing a Medicaid decision / Get Legal Help / A free tool that connects you to legal aid in your area. | Apelar una decisión de Medicaid / Obtenga ayuda legal / Una herramienta gratuita que le conecta con servicios de ayuda legal en su zona. | LINK / REGISTER | Spanish page titles. "le conecta" vs "lo conecta". |
| 19 | VA / HFS prescriptions / AFC | Where veterans can check their VA disability rating. / The AIDS Drug Assistance Program phone number and TTY. / Phone number, bilingual help, and hours. / The AIDS Drug Assistance Program may help pay marketplace premiums. | Dónde los veteranos pueden ver su calificación de discapacidad del VA. / El número de teléfono y el número TTY del AIDS Drug Assistance Program. / Número de teléfono, ayuda bilingüe y horario. / El AIDS Drug Assistance Program puede ayudar a pagar las primas del Mercado de Seguros Médicos. | TERM | ADAP description removed. |
| 20 | visitor-count.js | Who is visiting today? / Patient or family member / Provider or staff / Skip | ¿Quién nos visita hoy? / Paciente o familiar / Proveedor de salud o personal / Omitir | LENGTH / TERM | "Proveedor de salud o personal" is the longest button (section 6); "Personal de salud" is shorter but loses "provider". |
