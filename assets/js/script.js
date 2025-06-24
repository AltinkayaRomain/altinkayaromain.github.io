// Switch theme (Light/Dark mode)
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark");
  const themeText = document.getElementById("themeText");
  if (document.body.classList.contains("dark")) {
    themeText.textContent = "🌙 Mode Clair";
  } else {
    themeText.textContent = "🌙 Mode Sombre";
  }
});

// Scroll back to top button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
