// Tusaale 1: Fariin Salaan ah marka badhan la riixo
document.addEventListener("DOMContentLoaded", function () {
    const greetButton = document.createElement("button");
    greetButton.textContent = "Say Hello";
    greetButton.style.padding = "10px 20px";
    greetButton.style.margin = "20px";
    greetButton.style.backgroundColor = "#007BFF";
    greetButton.style.color = "#fff";
    greetButton.style.border = "none";
    greetButton.style.borderRadius = "5px";
    greetButton.style.cursor = "pointer";

    document.body.appendChild(greetButton);

    greetButton.addEventListener("click", function () {
        alert("Hello, Maryan Ahmed! Welcome to your website!");
    });
});

// Tusaale 2: Hubinta foomka
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault(); // Hakinta dirista foomka
        alert("Please fill in all the fields before submitting!");
    } else {
        alert("Thank you for your message, " + name + "!");
    }
});
