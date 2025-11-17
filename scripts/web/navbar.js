/**
 * Mobile Navigation Menu
 * Handles mobile menu toggle, overlay, and dropdown functionality
 */

(function () {
  "use strict";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initMobileMenu();
    initDropdowns();
  }

  function initMobileMenu() {
    var menuButton = document.querySelector(".menu-button");
    var navMenu = document.querySelector(".nav-menu-wrapper");
    var overlay = document.getElementById("nav-overlay");

    if (!menuButton || !navMenu || !overlay) {
      console.warn("Mobile menu elements not found");
      return;
    }

    menuButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var isOpen = navMenu.classList.contains("w--open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener("click", function () {
      closeMenu();
    });

    var navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    function openMenu() {
      navMenu.classList.add("w--open");
      menuButton.classList.add("w--open");
      overlay.classList.add("w--open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      navMenu.classList.remove("w--open");
      menuButton.classList.remove("w--open");
      overlay.classList.remove("w--open");
      document.body.style.overflow = "";
    }
  }

  function initDropdowns() {
    var dropdowns = document.querySelectorAll(".w-dropdown");

    dropdowns.forEach(function (dropdown) {
      var toggle = dropdown.querySelector(".w-dropdown-toggle");

      if (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          var isOpen = dropdown.classList.contains("w--open");

          dropdowns.forEach(function (d) {
            if (d !== dropdown) {
              d.classList.remove("w--open");
            }
          });

          if (isOpen) {
            dropdown.classList.remove("w--open");
          } else {
            dropdown.classList.add("w--open");
          }
        });
      }
    });

    document.addEventListener("click", function (event) {
      var isClickInside = Array.from(dropdowns).some(function (dropdown) {
        return dropdown.contains(event.target);
      });

      if (!isClickInside) {
        dropdowns.forEach(function (dropdown) {
          dropdown.classList.remove("w--open");
        });
      }
    });
  }
})();
