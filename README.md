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
- Vanilla JavaScript in `assets/js/script.js` for mobile navigation, forms, shop search/filter/sort, image lightbox, map, FAQ accordion and scroll animation.
- Leaflet 1.9.4 (included in `assets/vendor/leaflet/`) with OpenStreetMap tiles for the Contact page map.
- GitHub Pages for static hosting, deployed through the GitHub Actions workflow at `.github/workflows/pages.yml`.
- No database or server-side form handler is configured.

## Repository structure
- `index.html` — home page
- `pages/` — About, Shop, Enquiry and Contact pages
- `assets/css/styles.css` — shared stylesheet
- `assets/js/script.js` — shared JavaScript
- `assets/images/products/` and `data/products.json` — shop product images and product data
- `assets/vendor/leaflet/` — Leaflet map library (BSD-2-Clause licence)
- `robots.txt` — search engine instructions
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
- **Shop:** products load from `data/products.json` with `fetch`, with live search, category filter, sorting and an image lightbox.
- **Contact:** interactive Leaflet map.
- **Enquiry:** FAQ accordion.
- **Animation:** cards fade in on scroll, disabled for visitors who prefer reduced motion.
- **Images:** product artwork with descriptive alt text. The current images are on-brand illustrations and can be replaced with real photos.
- **SEO:** canonical and `og:url` tags and `robots.txt`, in addition to the unique titles and descriptions.

## Adding or changing products and images
Save the image in `assets/images/products/`, then add or edit an entry in `data/products.json` with `name`, `category`, `price`, `description`, `image` and `alt`. Use JPG or WebP photos about 800 px wide and under 200 KB, and write alt text that describes the item. The shop page updates automatically.

## Testing before submission
Follow `TESTING.md`. Test the desktop and mobile layouts, all five navigation destinations, both forms, the generated email links and the deployed GitHub Pages URL. Only mark tests as passed after running them in a browser. Capture and add genuine screenshots if required by the POE rubric.

## Deployment
The expected GitHub Pages project URL is:

https://nqobilenkunjana.github.io/Kasi-Night-Hub/

Verify **Settings → Pages → Build and deployment → Source → GitHub Actions**, then check the live website after changes are merged into `main` and the workflow completes.

The shop loads its products with `fetch`, so view it through GitHub Pages or a local server (`python3 -m http.server`). Opening `shop.html` straight from the file system blocks the request.

## References
1. GitHub. (n.d.). *Creating a GitHub Pages site*. https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
2. GitHub. (n.d.). *Deploying a website automatically*. https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically
3. MDN Web Docs. (n.d.). *Responsive images*. https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
4. MDN Web Docs. (n.d.). *Responsive web design*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design
5. MDN Web Docs. (n.d.). *The HTML picture element*. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture
6. Agafonkin, V. (n.d.). *Leaflet: an open-source JavaScript library for interactive maps*. https://leafletjs.com/
7. OpenStreetMap contributors. (n.d.). *Copyright and licence*. https://www.openstreetmap.org/copyright
8. MDN Web Docs. (n.d.). *HTMLDialogElement*. https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement
9. MDN Web Docs. (n.d.). *Using the Fetch API*. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
10. MDN Web Docs. (n.d.). *Intersection Observer API*. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
11. W3C. (n.d.). *Accordion pattern*, WAI-ARIA Authoring Practices Guide. https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
