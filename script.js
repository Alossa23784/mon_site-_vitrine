// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Animation d'apparition au défilement
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        // État initial pour l'animation
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Gestion simple du formulaire (simulation)
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre message a bien été envoyé à alossaange2@gmail.com. Je vous recontacte très vite au +237 686655685.');
            form.reset();
        });
    }
});