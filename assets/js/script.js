/* KASI NIGHT HUB — shared JavaScript for navigation and forms. */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.add("js");
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

  // ---------------------------------------------------------------
  // Shop: load products with fetch, then search, filter, sort and lightbox.
  // ---------------------------------------------------------------
  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    const searchInput = document.getElementById("shopSearch");
    const categorySelect = document.getElementById("shopCategory");
    const sortSelect = document.getElementById("shopSort");
    const toolsForm = document.getElementById("shopTools");
    const countText = document.getElementById("shopCount");
    const emptyText = document.getElementById("shopEmpty");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxText = document.getElementById("lightboxText");
    const lightboxClose = document.getElementById("lightboxClose");
    let products = [];
    let lastTrigger = null;

    function formatPrice(value) {
      return "R" + Number(value).toLocaleString("en-ZA");
    }

    function openLightbox(product, trigger) {
      lastTrigger = trigger;
      lightboxImage.src = "../" + product.image;
      lightboxImage.alt = product.alt;
      lightboxTitle.textContent = product.name;
      lightboxText.textContent = product.description + " " + formatPrice(product.price);
      if (typeof lightbox.showModal === "function") {
        lightbox.showModal();
      } else {
        lightbox.setAttribute("open", "");
      }
      lightboxClose.focus();
    }

    function closeLightbox() {
      if (typeof lightbox.close === "function") {
        lightbox.close();
      } else {
        lightbox.removeAttribute("open");
      }
      if (lastTrigger) lastTrigger.focus();
    }

    lightboxClose.addEventListener("click", closeLightbox);
    // Clicking the dark backdrop (the dialog element itself) also closes it.
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });

    function buildCard(product, index) {
      const card = document.createElement("article");
      card.className = "product reveal";
      card.style.setProperty("--delay", Math.min(index, 6) * 60 + "ms");

      const imageButton = document.createElement("button");
      imageButton.type = "button";
      imageButton.className = "product-image";
      imageButton.setAttribute("aria-label", "View larger image of " + product.name);
      const img = document.createElement("img");
      img.src = "../" + product.image;
      img.alt = product.alt;
      img.loading = "lazy";
      img.width = 600;
      img.height = 600;
      imageButton.append(img);
      imageButton.addEventListener("click", function () { openLightbox(product, imageButton); });

      const title = document.createElement("h3");
      title.textContent = product.name;
      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = product.category;
      const desc = document.createElement("p");
      desc.textContent = product.description;
      const price = document.createElement("strong");
      price.textContent = formatPrice(product.price);
      const link = document.createElement("a");
      link.className = "btn small";
      link.href = "enquiry.html";
      link.textContent = "Enquire";

      card.append(imageButton, tag, title, desc, price, link);
      return card;
    }

    function render() {
      const query = searchInput.value.trim().toLowerCase();
      const category = categorySelect.value;
      const sort = sortSelect.value;

      const shown = products.filter(function (product) {
        const matchesCategory = category === "all" || product.category === category;
        const haystack = (product.name + " " + product.category + " " + product.description).toLowerCase();
        return matchesCategory && (!query || haystack.indexOf(query) !== -1);
      });

      if (sort === "price-asc") shown.sort(function (a, b) { return a.price - b.price; });
      if (sort === "price-desc") shown.sort(function (a, b) { return b.price - a.price; });
      if (sort === "name") shown.sort(function (a, b) { return a.name.localeCompare(b.name); });

      productGrid.replaceChildren.apply(productGrid, shown.map(buildCard));
      countText.textContent = "Showing " + shown.length + " of " + products.length + " products";
      emptyText.hidden = shown.length !== 0;
      observeReveals();
    }

    searchInput.addEventListener("input", render);
    categorySelect.addEventListener("change", render);
    sortSelect.addEventListener("change", render);
    toolsForm.addEventListener("submit", function (event) { event.preventDefault(); });
    toolsForm.addEventListener("reset", function () { window.setTimeout(render, 0); });

    // AJAX request for the product data.
    fetch("../data/products.json")
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(function (data) {
        products = data;
        Array.from(new Set(products.map(function (p) { return p.category; }))).forEach(function (name) {
          const option = document.createElement("option");
          option.value = name;
          option.textContent = name;
          categorySelect.append(option);
        });
        render();
      })
      .catch(function () {
        countText.textContent = "The collection could not be loaded. Please refresh the page or send us an enquiry.";
      });
  }

  // ---------------------------------------------------------------
  // Contact: Leaflet map (library is loaded from assets/vendor/leaflet).
  // ---------------------------------------------------------------
  const mapElement = document.getElementById("map");
  if (mapElement) {
    if (window.L) {
      // General Gqeberha area. Replace with the exact venue coordinates if the brand has one.
      const place = [-33.9608, 25.6022];
      const map = L.map(mapElement, { scrollWheelZoom: false }).setView(place, 12);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
      }).addTo(map);
      L.Icon.Default.imagePath = "../assets/vendor/leaflet/images/";
      L.marker(place).addTo(map).bindPopup("<strong>KASI NIGHT HUB</strong><br>Gqeberha, Eastern Cape");
    } else {
      mapElement.textContent = "The map could not be loaded. KASI NIGHT HUB is based in Gqeberha, Eastern Cape.";
    }
  }

  // ---------------------------------------------------------------
  // Enquiry: FAQ accordion.
  // ---------------------------------------------------------------
  document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });

  // ---------------------------------------------------------------
  // Scroll-reveal animation (skipped when the visitor prefers reduced motion).
  // ---------------------------------------------------------------
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealObserver = ("IntersectionObserver" in window && !reducedMotion)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.visible)").forEach(function (element) {
      if (revealObserver) {
        revealObserver.observe(element);
      } else {
        element.classList.add("visible");
      }
    });
  }
  observeReveals();
});
