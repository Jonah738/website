document.addEventListener('DOMContentLoaded', () => {
    // ===== THEME TOGGLE LOGIC =====
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Text des Buttons anpassen
        if (body.classList.contains('light-mode')) {
            themeToggleButton.textContent = 'Dark Mode';
        } else {
            themeToggleButton.textContent = 'Light Mode';
        }
    });

    // ===== NEU: ACCORDION LOGIC =====
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Aktives Akkordeon umschalten
            accordion.classList.toggle('active');

            // Den Inhalt ein- oder ausblenden
            const content = accordion.querySelector('.accordion-content');
            if (accordion.classList.contains('active')) {
                //scrollHeight gibt die gesamte Höhe des Inhalts an
                content.style.maxHeight = content.scrollHeight + 'px'; 
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});
