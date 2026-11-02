# KASI NIGHT HUB — Testing Evidence

## Test status

This file is a test plan and evidence log. Do not mark a test as passed until it has been run in a browser. Add dated screenshots or observations where the POE requires evidence.

| Test area | Procedure | Expected result | Result |
|---|---|---|---|
| Navigation — desktop | Open each of the five pages at a desktop width and use each navigation link. | Every link opens the correct page. | Not yet browser-verified |
| Navigation — mobile | At 800px wide or narrower, open and close the menu button. | Menu opens/closes and `aria-expanded` changes between true and false. | Not yet browser-verified |
| Keyboard navigation | Tab through links, buttons and form fields; press Escape while the mobile menu is open. | Focus is visible; Escape closes the menu. | Not yet browser-verified |
| Home artwork | Open Home on desktop and mobile widths. | Correct responsive artwork appears without horizontal overflow. | Not yet browser-verified |
| Required form fields | Submit each form with required fields empty. | Browser validation prevents submission and identifies invalid fields. | Not yet browser-verified |
| Invalid email | Enter an invalid email format on each form. | Browser validation prevents submission. | Not yet browser-verified |
| Whitespace-only values | Enter only spaces in name or message fields and submit. | Custom validation rejects the value. | Not yet browser-verified |
| Enquiry types | Submit each enquiry type with valid sample data. | A pre-filled email link appears with the selected enquiry type and form details. | Not yet browser-verified |
| Contact form | Submit valid contact details and message. | A pre-filled email link appears with name, email, type and message. | Not yet browser-verified |
| Email behaviour | Click the generated email link on a device with an email app configured. | Email app opens a draft addressed to `info@kasinighthub.co.za`; visitor can review and send it. | Not yet browser-verified |
| Preferred date | Try to select a past date in the enquiry form. | Browser date picker prevents selecting dates before today where supported. | Not yet browser-verified |
| SEO metadata | Inspect the `<head>` of each page. | Each page has a unique title and meta description, plus Open Graph title/description. | Source checked; browser/search indexing not verified |
| Responsive layout | Test at desktop, tablet and mobile widths. | Cards and forms stack appropriately; no horizontal overflow. | Not yet browser-verified |
| Live deployment | Open the published GitHub Pages URL after merging to `main`. | Latest pages load and assets/scripts return successfully. | Not yet verified |

## Manual browser procedure
1. Open Home, About, Shop, Enquiry and Contact.
2. Use the navigation on desktop, then repeat at a mobile viewport.
3. Test required fields, malformed email addresses and whitespace-only text.
4. Test a valid enquiry for each available enquiry type.
5. Test a valid contact form and click the generated email link.
6. Confirm the email draft contains the expected recipient, subject and message details.
7. Check the browser console for JavaScript errors and inspect the Network tab for missing CSS, JavaScript or image assets.
8. Check the live GitHub Pages website after the changes are merged and deployment finishes.
9. Capture screenshots of successful tests and include them in the submission if required.

## Important form limitation
The website is static. The forms prepare an email draft; they do not send or store submissions automatically. The visitor must send the email from their own email application. A real server-side form handler would be required for automatic submission processing.
