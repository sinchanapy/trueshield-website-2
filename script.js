
/* ==========================================
   TRUESHIELD TITLE SERVICE LLC
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Trueshield website loaded successfully.");

    // 1. Mobile navigation menu
    const headerContainer = document.querySelector(".header-container");
    const navigation = document.querySelector(".main-nav");

    if (headerContainer && navigation) {

        let menuButton = headerContainer.querySelector(".menu-toggle");

        // Create the menu button if missing
        if (!menuButton) {
            menuButton = document.createElement("button");
            menuButton.type = "button";
            menuButton.className = "menu-toggle";
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.setAttribute("aria-expanded", "false");

            headerContainer.insertBefore(menuButton, navigation);
        }

        // Open and close menu
        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("nav-open");

            menuButton.textContent = isOpen ? "✕" : "☰";

            menuButton.setAttribute("aria-expanded", String(isOpen));

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close menu after selecting a link
        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navigation.classList.remove("nav-open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
            });

        });

    }

    // 2. Automatically update footer year
    const footerYearElements = document.querySelectorAll(
        ".footer-bottom p, footer p"
    );

    footerYearElements.forEach(function (element) {
        element.textContent = element.textContent.replace(
            /\b2026\b/g,
            String(new Date().getFullYear())
        );
    });

    // 3. Contact form validation
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            const nameField = contactForm.querySelector('[name="name"]');
            const emailField = contactForm.querySelector('[name="email"]');
            const messageField = contactForm.querySelector('[name="message"]');

            if (
                (nameField && !nameField.value.trim()) ||
                (emailField && !emailField.value.trim()) ||
                (messageField && !messageField.value.trim())
            ) {
                event.preventDefault();
                alert("Please complete all required fields before submitting.");
            }

        });

    }

});
