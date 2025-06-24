// Initialisation de particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,  // Nombre de particules
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"  // Couleur des particules
    },
    shape: {
      type: "circle",  // Forme des particules
    },
    opacity: {
      value: 0.5,  // Opacité des particules
      random: true,
    },
    size: {
      value: 3,  // Taille des particules
      random: true,
    },
    move: {
      enable: true,
      speed: 2,  // Vitesse de déplacement des particules
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  },
  retina_detect: true
});

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

