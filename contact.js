document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var messageField = document.getElementById("message");
  var charCount = document.getElementById("charCount");
  var formSuccess = document.getElementById("formSuccess");

  if (messageField && charCount) {
    messageField.addEventListener("input", function () {
      charCount.textContent = messageField.value.length + " / 100 minimum";
    });
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var submitButton = form.querySelector('button[type="submit"]');
    var name = document.getElementById("fullName").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var preferred = document.getElementById("preferred").value;
    var message = messageField.value.trim();

    if (!name || !phone || !email || message.length < 100) {
      showStatus("Please complete every field and write at least 100 characters.", true);
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      var response = await fetch("https://kandrex.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, phone: phone, email: email, preferred: preferred, message: message })
      });
      var data = await response.json();
      if (!response.ok) throw new Error(data.error || data.message || "Failed to send message.");

      showStatus("Message sent. We will reach out on " + preferred + " shortly.", false);
      form.reset();
      if (charCount) charCount.textContent = "0 / 100 minimum";
    } catch (error) {
      showStatus(error.message || "Failed to send message. Please try WhatsApp instead.", true);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });

  function showStatus(message, isError) {
    if (!formSuccess) return;
    formSuccess.classList.add("is-visible");
    formSuccess.style.color = isError ? "#fca5a5" : "var(--success)";
    formSuccess.querySelector("span").textContent = message;
  }
});
