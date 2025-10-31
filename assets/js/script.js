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

/* =================================
   CHARGEMENT AUTOMATIQUE HEADER/FOOTER
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
      // Injecte le HTML dans l'élément_cible
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Erreur lors du chargement du partial:', url, error);
      document.getElementById(elementId).innerHTML = `<p style="color:red;">Erreur: impossible de charger ${url}</p>`;
    });
}

// Détecter le chemin correct des partials
// Si l'URL contient '/courses/', on est dans un sous-dossier, il faut remonter (../)
// Sinon, on est à la racine.
const isSubdirectory = window.location.pathname.includes('/courses/');
const partialsPath = isSubdirectory ? '../partials/' : 'partials/';

// Quand le contenu de la page est chargé, on lance le chargement
document.addEventListener('DOMContentLoaded', () => {
  // Charge le header dans la div #header-placeholder
  loadPartial(partialsPath + 'header.html', 'header-placeholder');
  
  // Charge le footer dans la div #footer-placeholder
  // Tu peux décommenter la ligne ci-dessous si tu as un 'footer.html'
  // loadPartial(partialsPath + 'footer.html', 'footer-placeholder');
});
