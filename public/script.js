const button = document.querySelector('.sparkling-button');
const sparklesContainer = document.querySelector('.sparkles');
const body = document.body;

button.addEventListener('mouseover', () => {
    // Hintergrund verdunkeln
    body.classList.add('dark');

    // Sterne erstellen
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = Math.random() * 100 + 'px';
        sparkle.style.top = Math.random() * 100 - 50 + 'px';
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        sparklesContainer.appendChild(sparkle);

        // Entferne den Stern nach der Animation
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
});

button.addEventListener('mouseout', () => {
    // Hintergrund zurücksetzen
    body.classList.remove('dark');
});
