# KASI NIGHT HUB — Testing Evidence

## Testing scope

This document records the implementation checks for the Part 2 checklist.

| Test area | Evidence |
|---|---|
| External stylesheet | All HTML pages link to css/style.css. |
| Typography | Global typography plus responsive heading sizing are defined in css/style.css. |
| Layout | Cards, product grids and two-column sections use CSS grid. |
| Decoration and colour | The site uses the established black, white and electric-blue visual system. |
| Pseudo-classes | Navigation hover, button hover and form focus states are defined. |
| Media queries | A breakpoint at 800px changes multi-column layouts to one column and opens the mobile navigation. |
| Responsive typography | The home heading uses clamp(); page headings reduce at the mobile breakpoint. |
| Responsive navigation | The menu button toggles the mobile navigation. |
| Responsive images | The home page uses picture/source and responsive image sizing. |
| Forms | Contact and enquiry forms have required fields and prototype confirmation messages. |

## Browser test procedure

Before final submission, test the live site in a desktop browser and at a narrow mobile viewport:

1. Open Home, About, Shop, Enquiry and Contact.
2. Test Contact form validation and submission.
3. Test Enquiry form validation and submission.
4. Open and close the mobile menu.
5. Check the layout below 800px.
6. Check the home brand artwork at desktop and mobile widths.
7. Use keyboard focus on form controls.
8. Refresh every page and check for broken links or horizontal overflow.

## Expected results

- Navigation opens the intended pages.
- Forms display their prototype confirmation messages.
- The mobile menu opens and closes.
- Multi-column sections stack on smaller screens.
- Text remains readable without horizontal overflow.
- Responsive artwork remains inside its container.

## Evidence note

This file records the implementation and the test procedure. If the POE requires screenshots, capture browser screenshots after performing the checks above and add them to the repository.
