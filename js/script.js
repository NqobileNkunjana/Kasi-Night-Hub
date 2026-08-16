const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
  menuButton.addEventListener("click", () => navLinks.classList.toggle("show"));
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#contactMessage").textContent =
      "Thanks! Your message has been received for this website prototype.";
    contactForm.reset();
  });
}

const enquiryForm = document.querySelector("#enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#enquiryMessage").textContent =
      "Your enquiry has been submitted for this website prototype.";
    enquiryForm.reset();
  });
}
