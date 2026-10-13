// DARK MODE
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}

// SKILL BAR ANIMATION
const progressBars = document.querySelectorAll(".progress div");

progressBars.forEach(function (bar) {
    const width = bar.getAttribute("data-width");

    if (width) {
        setTimeout(function () {
            bar.style.width = width;
        }, 300);
    }
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    });
}
