// script.js
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío por defecto del formulario

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const missatge = document.getElementById('missatge').value.trim();

    if (!nom || !email || !missatge) {
        alert('Si us plau, completa tots els camps.');
        return;
    }

    alert(`Gràcies, ${nom}, per contactar amb nosaltres!`);
    this.reset(); // Resetea el formulario
});
// script.js
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// script.js
const heroMessage = document.querySelector('.hero h2');
const hour = new Date().getHours();

if (hour < 12) {
    heroMessage.textContent = 'Bon dia! Porta el teu negoci al següent nivell';
} else if (hour < 18) {
    heroMessage.textContent = 'Bona tarda! Porta el teu negoci al següent nivell';
} else {
    heroMessage.textContent = 'Bona nit! Porta el teu negoci al següent nivell';
}
