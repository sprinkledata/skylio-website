/**
 * Form Submission Handler
 * Handles Web3Forms submission with hCaptcha validation
 */

(function () {
  "use strict";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForm);
  } else {
    initForm();
  }

  function initForm() {
    var form = document.getElementById("wf-form-Book-demo-skylio-form");
    var successMessage = document.querySelector(".success-message");
    var errorMessage = document.querySelector(".error-message");
    var formElement = document.querySelector(".form");
    var submitBtn = document.getElementById("submit-btn");
    var hideTimeout;

    if (!form) {
      console.warn("Form not found");
      return;
    }

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Validate hCaptcha
      var hCaptcha = form.querySelector("textarea[name=h-captcha-response]");
      if (!hCaptcha || !hCaptcha.value) {
        alert("Please complete the captcha verification");
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      try {
        var keyResponse = await fetch("/.netlify/functions/get-web3forms-key");
        var keyData = await keyResponse.json();
        var accessKey = keyData?.accessKey;

        var formData = new FormData(form);
        formData.append("access_key", accessKey);
        formData.append("subject", "New Demo Request - Skylio");
        formData.append("from_name", "Skylio Website");

        var response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        var data = await response.json();

        if (data?.success) {
          showSuccess();
        } else {
          throw new Error(data?.message || "Form submission failed");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        showError();
      }
    });

    form.addEventListener("input", function () {
      if (successMessage.style.display === "block") {
        hideSuccess();
      }
    });

    function showSuccess() {
      formElement.style.display = "none";
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
      form.reset();

      hideTimeout = setTimeout(function () {
        hideSuccess();
      }, 3000);
    }

    function hideSuccess() {
      successMessage.style.display = "none";
      formElement.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    }

    function showError() {
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";

      setTimeout(function () {
        errorMessage.style.display = "none";
      }, 3000);
    }
  }
})();
