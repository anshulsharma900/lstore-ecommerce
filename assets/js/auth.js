/* ================================================================
   LSTORE - Authentication
   Frontend demo authentication using localStorage
================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.querySelector(".auth-form");
    const authInput = document.querySelector(".auth-input");
    const continueBtn = document.querySelector(".auth-form-submit-btn");

    if (!authForm || !authInput || !continueBtn) return;

    authForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = authInput.value.trim();

        // Validate input
        if (email === "") {
            showMessage("Please enter your email address.", "error");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        // Save logged-in user
        const user = {
            email: email,
            loggedIn: true
        };

        localStorage.setItem("lstoreUser", JSON.stringify(user));

        showMessage("Login successful!", "success");

        // Redirect after login
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);
    });

    function showMessage(message, type) {
        let messageBox = document.querySelector(".auth-message");

        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.className = "auth-message";
            authForm.appendChild(messageBox);
        }

        messageBox.textContent = message;
        messageBox.className = `auth-message ${type}`;
    }
});