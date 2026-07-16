# WHERE TO CHANGE CONTENT

This website is bilingual.

Most text appears like this:

```html
<span class="en">English text</span>
<span class="ar">Arabic text</span>
```

When changing content, update both English and Arabic.

---

## 1. Change name / title

Open `index.html`.

Find:

```html
<strong>Aazad Mir</strong>
```

Change if needed.

Find the hero heading:

```html
Sr. IT Support Specialist | System & ERP Administrator
```

Change it in both English and Arabic.

---

## 2. Change professional summary

Open `index.html`.

Find:

```html
<section id="about"
```

Edit the paragraph inside the About section.

---

## 3. Change skills

Open `index.html`.

Find:

```html
<section id="skills"
```

Edit the skill cards and skill cloud tags.

---

## 4. Change projects

Open `index.html`.

Find:

```html
<section id="projects"
```

Edit project titles, descriptions, and metrics.

---

## 5. Change experience

Open `index.html`.

Find:

```html
<section id="experience"
```

Edit job titles, companies, dates, and descriptions.

---

## 6. Change contact details

Open `index.html`.

Find:

```html
<section id="contact"
```

Update:

- phone
- email
- location
- WhatsApp link

For WhatsApp use full number without plus sign or spaces:

```html
https://wa.me/966541802463
```

---

## 7. Replace profile photo

Replace this file:

```text
images/aazad-profile.jpg
```

Keep the same file name for easiest update.

---

## 8. Replace banner

Replace this file:

```text
images/linkedin-banner.jpg
```

Keep the same file name for easiest update.

---

## 9. Replace CV

Replace this file:

```text
assets/Aazad_Mir_CV.pdf
```

Keep the same file name for easiest update.

---

## 10. Change default language

Open `script.js`.

Find:

```js
setLanguage(localStorage.getItem("aazadPortfolioLang") || "en");
```

To make Arabic default, change `"en"` to `"ar"`.

---

## 11. Test

Double-click:

```text
index.html
```

Check:

- English language
- Arabic language
- mobile menu
- CV button
- WhatsApp button
- animations

---

## V2: LinkedIn button

LinkedIn link is used in `index.html`:

```html
https://www.linkedin.com/in/aazadmir1996/
```

Search for this link if you want to change it.

---

## V2: ERPNext content

ERPNext customization, custom apps, end-user training, AFMCO, and current company experience are added in:

- Skills section
- Projects section
- Experience section

Search for:

```text
ERPNext Customization
```

or

```text
AFMCO
```

to update those sections.

---

## V3: Change the three hiring highlights

Open `index.html` and search for:

```html
floating-metric metric-one
```

The three highlights are:

1. `8+ Years Saudi Experience`
2. `Multi Business Sector Experience`
3. `30–40% Paperwork Reduction`

Edit the English and Arabic text in those blocks if needed.

---

## V3: Change page width / left and right spacing

Open `style.css` and search for:

```css
--container: min(1040px, calc(100% - 80px));
```

To make the website wider, increase `1040px`.

To make more left/right space, increase `80px`.

Example:

```css
--container: min(1100px, calc(100% - 100px));
```

---

## V4: Edit AI Recruiter View answers

Open `script.js`.

Search for:

```js
const recruiterAnswers
```

You can change the English and Arabic quick-answer text there.

---

## V4: Edit command palette actions

Open `script.js`.

Search for:

```js
const commands
```

You can change quick actions like CV, LinkedIn, Email, WhatsApp, Save Contact, and section jumps.

---

## V4: Change vCard contact details

Open:

```text
assets/Aazad_Mir_Contact.vcf
```

Edit phone, email, title, or LinkedIn link.

---

## V4: Command shortcut

On the website, press:

```text
Ctrl + K
```

or on Mac:

```text
Cmd + K
```

This opens the command palette.
