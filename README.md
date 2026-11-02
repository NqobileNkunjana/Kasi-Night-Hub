# KASI NIGHT HUB Website

**WEDE5020 — POE Part 3 working branch**

KASI NIGHT HUB is a multi-page static website for a South African entertainment and lifestyle brand focused on Amapiano music, events and Kasi-inspired streetwear.

## Website pages
- Home — `index.html`
- About — `pages/about.html`
- Shop — `pages/shop.html`
- Enquiry — `pages/enquiry.html`
- Contact — `pages/contact.html`

## Technologies
HTML5, CSS3 and vanilla JavaScript. The website is static and is configured for GitHub Pages.

## Repository structure
- `assets/css/styles.css` — shared responsive styling and accessibility focus states
- `assets/js/script.js` — mobile navigation, preferred-date limits, form validation and email-draft preparation
- `assets/kasi-mark-mobile.svg` and `assets/kasi-mark-wide.svg` — responsive brand artwork
- `pages/` — About, Shop, Enquiry and Contact pages
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `CHANGELOG.md` — changes made during the project
- `TESTING.md` — test procedure and results to record
- `REFERENCES.md` — technical references
- `SUBMISSION_LINKS.md` — repository and expected live-site links

## Part 3 improvements in this branch
- Added an accessible mobile navigation button with `aria-expanded`, keyboard Escape support and close-on-navigation behaviour.
- Moved the contact and enquiry form behaviour into the shared external JavaScript file.
- Added page-specific meta descriptions, theme colour and Open Graph title/description metadata.
- Improved form validation to reject text fields containing only spaces, added length limits and autocomplete hints, and prevented past preferred dates.
- Forms prepare a pre-filled email draft for `info@kasinighthub.co.za`. The visitor must open their email application and send the message. The static website does not send or store form submissions automatically.
- Added visible keyboard-focus styling and reduced-motion support while retaining the existing black, white and electric-blue design.

## Testing before submission
Follow the steps in `TESTING.md`. Test the desktop and mobile layouts, all five navigation destinations, both forms, the generated email links and the deployed GitHub Pages URL. Only mark tests as passed after running them in a browser and record screenshots if required by the POE brief.

## Deployment
The repository contains a GitHub Actions workflow for GitHub Pages. The expected project URL is:

https://nqobilenkunjana.github.io/Kasi-Night-Hub/

Verify **Settings → Pages → Build and deployment → Source → GitHub Actions**, then check the live website after changes are merged into `main`.

## Part 1 feedback
No separate Part 1 lecturer feedback was present in the repository when the earlier documentation was prepared. Add the lecturer's actual feedback and the corresponding corrections here if that feedback is available; do not invent feedback.
