/**
 * BOUTON RETOUR EN HAUT
 * Gère l'affichage et le défilement fluide vers le haut
 */
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        // Apparaît après 400px de scroll
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
 * CHARGEMENT DES PARTIALS (Header)
 * Permet d'insérer le menu de navigation sur toutes les pages
 */
function loadPartial(url, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Erreur de chargement du partial');
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Détection automatique du chemin pour les fichiers dans /courses/
const isSub = window.location.pathname.includes('/courses/');
const pPath = isSub ? '../partials/' : 'partials/';

document.addEventListener('DOMContentLoaded', () => {
    // Cache-bust pour éviter les problèmes de mise à jour du navigateur
    const v = '?v=' + Date.now();
    loadPartial(pPath + 'header.html' + v, 'header-placeholder');
});

/**
 * INITIALISATION PARTICULES
 * Configuration du fond dynamique cyan électrique
 */
if (document.getElementById("particles-js")) {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ffcc" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 1.5, "random": true },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#00ffcc", 
                "opacity": 0.1, 
                "width": 1 
            },
            "move": { 
                "enable": true, 
                "speed": 1, 
                "direction": "none", 
                "out_mode": "out" 
            }
        },
        "interactivity": {
            "events": { 
                "onhover": { "enable": true, "mode": "grab" } 
            }
        },
        "retina_detect": true
    });
}
