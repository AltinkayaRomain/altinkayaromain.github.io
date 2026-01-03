/**
 * GESTION DU THEME (DARK/LIGHT)
 * Bascule entre le mode sombre profond et un mode clair propre
 */
const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

if (themeToggleButton) {
    // On vérifie si l'utilisateur avait déjà choisi un thème
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.remove("dark"); // Par défaut on est en dark dans le CSS
        updateThemeIcon(false);
    }

    themeToggleButton.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeIcon(isDark);
    });
}

function updateThemeIcon(isDark) {
    const icon = themeToggleButton.querySelector("i");
    if (icon) {
        icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
    }
}

/**
 * BOUTON RETOUR EN HAUT
 */
const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopButton.style.display = "flex";
            backToTopButton.style.alignItems = "center";
            backToTopButton.style.justifyContent = "center";
        } else {
            backToTopButton.style.display = "none";
        }
    });
    
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * CHARGEMENT DES PARTIALS (Header / Footer)
 */
function loadPartial(url, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Erreur de chargement');
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
            // Optionnel : On peut relancer une petite animation ici
        })
        .catch(err => console.error(err));
}

// Détection auto du chemin (racine vs sous-dossiers)
const isSub = window.location.pathname.includes('/courses/');
const pPath = isSub ? '../partials/' : 'partials/';

document.addEventListener('DOMContentLoaded', () => {
    const v = '?v=' + Date.now();
    loadPartial(pPath + 'header.html' + v, 'header-placeholder');
    // loadPartial(pPath + 'footer.html' + v, 'footer-placeholder');
});

/**
 * INITIALISATION PARTICULES (Si l'élément existe)
 */
if (document.getElementById("particles-js")) {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ffcc" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 1.5, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" } }
        },
        "retina_detect": true
    });
}
