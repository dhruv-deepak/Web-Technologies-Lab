document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop form from submitting

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const phone = document.getElementById("phone").value.trim();

        let errorMessage = "";

        // Name validation
        if (name.length < 3) {
            errorMessage += "❌ Name must be at least 3 characters long.\n";
        }

        // Email validation (simple regex)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage += "❌ Enter a valid email address.\n";
        }

        // Password validation
        if (password.length < 6) {
            errorMessage += "❌ Password must be at least 6 characters long.\n";
        }

        // Phone number validation (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            errorMessage += "❌ Phone number must be 10 digits.\n";
        }

        // Show results
        if (errorMessage !== "") {
            alert(errorMessage); // Invalid inputs
        } else {
            alert("Registration successful!"); // All good
            form.reset();
        }
    });
});
