// assets/js/script.js
// Exemple de code JavaScript pour changer de thème (clair/sombre)
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

toggleBtn.onclick = () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
};

// Charger le thème à partir du stockage local
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }
};

