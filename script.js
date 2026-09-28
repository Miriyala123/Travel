/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Demo login details
    const correctUsername = "bhavya";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {

        // Hide login page
        document.getElementById("loginPage").style.display = "none";

        // Show main website
        document.getElementById("mainWebsite").style.display = "block";

        // Clear login message
        loginMessage.textContent = "";

        // Scroll to top
        window.scrollTo(0, 0);

    } else {

        loginMessage.textContent =
            "❌ Invalid username or password!";

        loginMessage.style.color = "red";
    }
});


/* ================= LOGOUT ================= */

function logout() {

    // Hide main website
    document.getElementById("mainWebsite").style.display = "none";

    // Show login page
    document.getElementById("loginPage").style.display = "flex";

    // Clear login fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Clear message
    loginMessage.textContent = "";

    // Scroll to top
    window.scrollTo(0, 0);
}


/* ================= DESTINATION BUTTON ================= */

function showMessage(place) {

    alert(
        "🌍 Welcome to " +
        place +
        "!\n\nExplore beautiful places, discover new experiences and enjoy your journey with Bhavya's Travel Blog."
    );
}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    contactMessage.textContent =
        "✅ Thank you! Your message has been received.";

    contactMessage.style.color = "green";

    // Clear form
    contactForm.reset();
});