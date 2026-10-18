
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Add a dark/light theme toggle
const themeButton = document.createElement("button");

themeButton.textContent = "☀️ Light Mode";
themeButton.className = "theme-toggle";
themeButton.setAttribute("aria-pressed", "false");
themeButton.setAttribute("aria-label", "Switch to light theme");

document.querySelector(".navbar").appendChild(themeButton);

themeButton.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");

  themeButton.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
  themeButton.setAttribute("aria-pressed", String(isLight));
  themeButton.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
});
