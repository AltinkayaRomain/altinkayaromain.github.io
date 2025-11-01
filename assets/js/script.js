// Initialisation de particles.js
// On vérifie d'abord si l'élément 'particles-js' existe sur la page
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,  // Nombre de particules
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"  // Couleur des particules
      },
      shape: {
        type: "circle",  // Forme des particules
      },
      opacity: {
        value: 0.5,  // Opacité des particules
        random: true,
      },
      size: {
        value: 3,  // Taille des particules
        random: true,
      },
      move: {
        enable: true,
        speed: 2,  // Vitesse de déplacement des particules
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
} // Fin du 'if' pour particles-js

// Switch theme (Light/Dark mode)
const themeToggleButton = document.getElementById("themeToggle");
// On vérifie SI le bouton existe AVANT de lui attacher un 'listener'
if (themeToggleButton) {
  themeToggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    const themeText = document.getElementById("themeText");
    // On vérifie aussi si le texte existe
    if (themeText) {
      if (document.body.classList.contains("dark")) {
        themeText.textContent = "🌙 Mode Clair";
      } else {
        themeText.textContent = "🌙 Mode Sombre";
      }
    }
  });
} // Fin du 'if' pour themeToggle

// Scroll back to top button
const backToTopButton = document.getElementById("backToTop");
// On vérifie SI le bouton existe AVANT de lui attacher un 'listener'
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
} // Fin du 'if' pour backToTop

/* =================================
   CHARGEMENT AUTOMATIQUE HEADER/FOOTER
   (Cette partie est déjà correcte)
   ================================= */

// Fonction pour charger un fichier HTML (un "partial")
function loadPartial(url, elementId) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Réseau: Réponse non OK');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Erreur lors du chargement du partial:', url, error);
      document.getElementById(elementId).innerHTML = `<p style="color:red;">Erreur: impossible de charger ${url}</p>`;
    });
}

// Détecter le chemin correct des partials
const isSubdirectory = window.location.pathname.includes('/courses/');
const partialsPath = isSubdirectory ? '../partials/' : 'partials/';

// Quand le contenu de la page est chargé, on lance le chargement
document.addEventListener('DOMContentLoaded', () => {
  
  const cacheBust = '?v=' + new Date().getTime();
  
  // Charge le header
  loadPartial(partialsPath + 'header.html' + cacheBust, 'header-placeholder');
  
  // Charge le footer (si tu en as un)
  // loadPartial(partialsPath + 'footer.html' + cacheBust, 'footer-placeholder');
});
