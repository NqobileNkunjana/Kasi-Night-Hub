# KASI NIGHT HUB — Changelog

## Part 1 feedback record — 2 November 2026
- Added the actual lecturer feedback from Formative 1 Part 1 to the README, including the low-scoring criteria and their feedback.
- Documented the proposal-stage items that still need checking in the POE document: neat wireframes, semester-aligned timeline, academic writing and stronger research evidence.
- Added a readable website sitemap and an XML sitemap.
- Updated README documentation to include website configuration, folder structure, testing guidance and references.
- Corrected the stylesheet path on the custom 404 page.
- Added a references list to the README as requested by the lecturer.

## Part 2 — 18 September 2026
- Kept the KASI NIGHT HUB brand direction, multi-page structure and black/white/electric-blue visual identity established for the project.
- Expanded project documentation, testing guidance, references and submission links.
- Added GitHub Pages deployment workflow.
- Added responsive brand artwork and a custom 404 page.

## Part 3 — 2 November 2026
### Navigation and accessibility
- Added an accessible mobile navigation toggle to all five pages.
- Added keyboard Escape support, close-on-navigation behaviour and expanded-state announcements.
- Added visible keyboard focus styles and reduced-motion support while retaining the existing visual identity.

### JavaScript and forms
- Moved contact and enquiry form handling into `assets/js/script.js`.
- Added trimmed-input validation, field length limits, autocomplete hints and a minimum date for the optional preferred-date field.
- Both forms prepare a pre-filled email draft and clearly explain that the visitor must send it from their email application; the static website does not claim to send or store submissions.

### SEO and documentation
- Added unique meta descriptions, theme colour and Open Graph title/description metadata to each page.
- Corrected the README to reflect the actual `assets/css/styles.css` and `assets/js/script.js` paths.
- Updated testing guidance. Browser checks and deployment verification must still be completed before final submission.


## Final repository audit — 2 November 2026
- Removed duplicate Jekyll and static GitHub Pages workflows, leaving one deployment workflow to avoid competing deployments.
- Added descriptive HTML comments to the Enquiry and Contact pages.
- Formatted the technical references in IEEE-style numbered format.
- Added a source-level audit checklist and outstanding browser/deployment checks to `TESTING.md`.
- Updated the submission handover checklist to distinguish completed repository changes from outstanding POE document and browser evidence.

- Added desktop and mobile low-fidelity wireframes in `WIREFRAMES.md` based on the current five-page website.


## Part 3 — features and fixes added 5 November 2026

### Issues identified and the fix for each
| Issue | Change made | Reason |
|---|---|---|
| The shop showed text boxes instead of product images | Added product artwork in `assets/images/products/` with descriptive alt text | Visitors need to see what is for sale; alt text supports accessibility and SEO |
| JavaScript only handled the menu and forms | Added the interactive features listed below | Part 3 requires meaningful, working JavaScript |
| Forms had no `action` attribute | Added `action="mailto:info@kasinighthub.co.za"` to both forms; JavaScript still validates and prepares the draft | The form destination is now declared in the HTML as well as in the script |
| `404.html` used a relative stylesheet path, which breaks when a missing URL is inside `pages/` | Switched to project-absolute paths and added `noindex` | GitHub Pages serves the same 404 file for every missing URL |
| Pages had no canonical URLs or robots file | Added canonical and `og:url` tags and `robots.txt` that points to the sitemap | Helps search engines index the correct URLs |

### New JavaScript features (`assets/js/script.js`)
- **Dynamic content:** the shop loads `data/products.json` with `fetch` and builds the product cards in the page.
- **Search, filter and sort:** live text search, category filter and price/name sorting, with a result count and an empty-state message.
- **Image lightbox:** a native `<dialog>` that shows a larger product image; closes with the button, Escape or a click on the backdrop and returns focus.
- **Interactive map:** a Leaflet map on the Contact page, included locally in `assets/vendor/leaflet/` (Leaflet 1.9.4, BSD-2-Clause) with OpenStreetMap tiles.
- **FAQ accordion:** four questions on the Enquiry page using `aria-expanded` buttons.
- **Scroll-reveal animation:** cards fade in as they enter the screen; switched off when the visitor prefers reduced motion.
