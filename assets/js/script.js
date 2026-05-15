/* --- script.js --- */

// 1. Détection automatique : Suis-je dans un sous-dossier ?
function getBasePath() {
    if (window.location.pathname.includes('/courses/')) {
        return '..';
    }
    return '';
}

// 2. Chargement du Header avec le bon chemin
document.addEventListener('DOMContentLoaded', () => {
    const basePath = getBasePath();
    const headerPath = basePath + '/partials/header.html';
    loadPartial(headerPath + '?v=' + Date.now(), 'header-placeholder');
    initBackToTop();
});

function loadPartial(url, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Erreur chargement ${url}`);
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
            highlightActiveLink();
        })
        .catch(err => console.error("Problème menu :", err));
}

// 3. Gestion de la classe "Active" sur le menu
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.floating-nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace(/^\//, '');
        if (currentPath.endsWith(href) || (href === 'index.html' && currentPath.endsWith('/'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 4. Bouton Retour Haut
function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.style.display = "flex";
            btn.style.alignItems = "center";
            btn.style.justifyContent = "center";
        } else {
            btn.style.display = "none";
        }
    });
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 5. Particules
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
