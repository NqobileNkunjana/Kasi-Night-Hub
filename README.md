# KASI NIGHT HUB Website

**WEDE5020 — POE Part 3**

KASI NIGHT HUB is a multi-page static website for a South African entertainment and lifestyle brand focused on Amapiano music, events and Kasi-inspired streetwear.

## Website pages
- Home — `index.html`
- About — `pages/about.html`
- Shop — `pages/shop.html`
- Enquiry — `pages/enquiry.html`
- Contact — `pages/contact.html`

## Technologies and configuration
- HTML5 for page structure and semantic content.
- CSS3 in `assets/css/styles.css` for the shared responsive layout and styling.
- Vanilla JavaScript in `assets/js/script.js` for mobile navigation and form validation/email-draft preparation.
- GitHub Pages for static hosting, deployed through the GitHub Actions workflow at `.github/workflows/pages.yml`.
- No database or server-side form handler is configured.

## Repository structure
- `index.html` — home page
- `pages/` — About, Shop, Enquiry and Contact pages
- `assets/css/styles.css` — shared stylesheet
- `assets/js/script.js` — shared JavaScript
- `assets/kasi-mark-mobile.svg` and `assets/kasi-mark-wide.svg` — responsive brand artwork
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `sitemap.md` and `sitemap.xml` — website page structure and sitemap
- `WIREFRAMES.md` — desktop and mobile low-fidelity page wireframes
- `CHANGELOG.md` — development changes
- `TESTING.md` — test plan and evidence log
- `REFERENCES.md` — technical references
- `SUBMISSION_LINKS.md` — repository and live-site links

## Part 1 feedback and improvements record

The following record is based on the lecturer's Formative 1 Part 1 feedback dated 6 September 2026. It distinguishes website changes visible in this repository from proposal/document items that must be checked in the POE document.

| Lecturer feedback | Improvement / current status |
|---|---|
| Wireframes must be neatly designed (0/2) | Added desktop and mobile low-fidelity wireframes in `WIREFRAMES.md` based on the current website. Insert/export them into the POE in the format required by the lecturer. |
| Timeline must align with semester weeks and POE deadlines (1/2) | Still outstanding in the POE document. The official semester week numbers and POE deadlines were not provided, so a timeline has not been invented. |
| Improve academic writing (3/5) | Proposal-document item. Proofread the proposal for formal academic wording, grammar and clarity. |
| No strong evidence of research (6.5/10) | Research and sourcing must be strengthened in the POE document, with relevant evidence and in-text citations. |
| Provide a clearly designed sitemap (0/5) | Added `sitemap.md` and `sitemap.xml` to document the website hierarchy and page URLs. |
| Correct file and folder management (2/5) | Website files are organised into `pages/` and shared `assets/css/` and `assets/js/` folders. |
| Add sufficient code comments (0/5) | Descriptive HTML comments are present in the home page. Review the remaining HTML, CSS and JavaScript files to ensure comments explain important sections and logic. |
| Commit regularly throughout development (5/10) | Part 3 changes have been grouped into descriptive GitHub commits and a pull request. Earlier commit frequency cannot be recreated retrospectively; continue making small, meaningful commits during final changes. |
| README must contain necessary documentation (2/5) | README now documents the site pages, technologies, hosting configuration, repository structure, testing and Part 1 feedback improvements. Add actual browser screenshots before submission if the rubric requires them. |
| References must be provided in README (0/5) | A reference list is now included below and expanded in `REFERENCES.md`. |

**Proposal checks still required:** wireframes, semester-aligned timeline, academic writing and research evidence must be checked in the actual POE proposal. Do not mark these as complete based only on the website repository.

## Part 3 improvements
- Added an accessible mobile navigation button with `aria-expanded`, keyboard Escape support and close-on-navigation behaviour.
- Moved contact and enquiry form behaviour into the shared external JavaScript file.
- Added page-specific meta descriptions, theme colour and Open Graph title/description metadata.
- Improved form validation to reject text fields containing only spaces, added length limits and autocomplete hints, and prevented past preferred dates.
- Forms prepare a pre-filled email draft for `info@kasinighthub.co.za`. The visitor must open their email application and send the message. The static website does not send or store form submissions automatically.
- Added visible keyboard-focus styling and reduced-motion support while retaining the existing black, white and electric-blue design.

## Testing before submission
Follow `TESTING.md`. Test the desktop and mobile layouts, all five navigation destinations, both forms, the generated email links and the deployed GitHub Pages URL. Only mark tests as passed after running them in a browser. Capture and add genuine screenshots if required by the POE rubric.

## Deployment
The expected GitHub Pages project URL is:

https://nqobilenkunjana.github.io/Kasi-Night-Hub/

Verify **Settings → Pages → Build and deployment → Source → GitHub Actions**, then check the live website after changes are merged into `main` and the workflow completes.

## References
1. GitHub. (n.d.). *Creating a GitHub Pages site*. https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
2. GitHub. (n.d.). *Deploying a website automatically*. https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically
3. MDN Web Docs. (n.d.). *Responsive images*. https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
4. MDN Web Docs. (n.d.). *Responsive web design*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design
5. MDN Web Docs. (n.d.). *The HTML picture element*. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture
