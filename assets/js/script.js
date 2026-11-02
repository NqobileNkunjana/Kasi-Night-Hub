/* KASI NIGHT HUB — shared JavaScript for navigation and forms. */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Accessible responsive navigation.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    function closeMenu() {
      navigation.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    }

    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("show");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 800) closeMenu();
    });
  }

  // Keep the optional preferred date from being set in the past.
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date();
    const localToday = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0")
    ].join("-");
    dateInput.min = localToday;
  }

  // Reject values that contain only spaces and clear custom errors as the user edits.
  document.querySelectorAll(".form-card").forEach(function (form) {
    form.querySelectorAll("input[type='text'], input[type='email'], textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.value.trim().length > 0) {
          field.setCustomValidity("");
        }
      });
    });
  });

  function prepareEmail(statusElement, recipient, subject, body, message) {
    const mailto = "mailto:" + recipient +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    statusElement.replaceChildren();
    statusElement.append(document.createTextNode(message + " "));

    const emailLink = document.createElement("a");
    emailLink.href = mailto;
    emailLink.textContent = "Open your email app to send it";
    emailLink.className = "email-action";
    statusElement.append(emailLink);

    const note = document.createElement("span");
    note.className = "form-note";
    note.textContent = " This website does not send or store the message automatically.";
    statusElement.append(note);
  }

  // Enquiry form: validate fields and prepare a message for the visitor's email app.
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameField = document.getElementById("fullName");
      const emailField = document.getElementById("email");
      const serviceField = document.getElementById("service");
      const dateField = document.getElementById("date");
      const detailsField = document.getElementById("details");
      const status = document.getElementById("enquiryMessage");

      [nameField, emailField, detailsField].forEach(function (field) {
        field.setCustomValidity(field.value.trim() ? "" : "Please enter a value. Spaces alone are not accepted.");
      });

      if (!enquiryForm.checkValidity()) {
        enquiryForm.reportValidity();
        return;
      }

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const service = serviceField.value;
      const date = dateField.value;
      const details = detailsField.value.trim();
      const dateText = date ? new Date(date + "T00:00:00").toLocaleDateString("en-ZA") : "Not specified";
      const subject = "KASI NIGHT HUB — " + service + " from " + name;
      const body = [
        "Name: " + name,
        "Email: " + email,
        "Enquiry type: " + service,
        "Preferred date: " + dateText,
        "",
        "Details:",
        details
      ].join("\n");

      prepareEmail(
        status,
        "info@kasinighthub.co.za",
        subject,
        body,
        "Your enquiry is ready. Review it in your email app before sending."
      );
    });
  }

  // Contact form: prepare a formatted email without claiming it was sent.
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const typeField = document.getElementById("messageType");
      const messageField = document.getElementById("message");
      const status = document.getElementById("contactMessage");

      [nameField, emailField, messageField].forEach(function (field) {
        field.setCustomValidity(field.value.trim() ? "" : "Please enter a value. Spaces alone are not accepted.");
      });

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const type = typeField.value;
      const message = messageField.value.trim();
      const subject = "KASI NIGHT HUB — " + type + " from " + name;
      const body = [
        "Name: " + name,
        "Email: " + email,
        "Message type: " + type,
        "",
        "Message:",
        message
      ].join("\n");

      prepareEmail(
        status,
        "info@kasinighthub.co.za",
        subject,
        body,
        "Your message is ready. Review it in your email app before sending."
      );
    });
  }
});
