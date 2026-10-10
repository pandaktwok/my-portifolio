// Scripts para o portfólio

document.addEventListener('DOMContentLoaded', () => {
    const cvLink = document.getElementById('cv-link');
    if (!cvLink) return;

    const setCv = (active) => {
        document.body.classList.toggle('cv-active', active);
        cvLink.setAttribute('aria-expanded', String(active));
    };

    cvLink.addEventListener('click', (e) => {
        e.preventDefault();
        setCv(!document.body.classList.contains('cv-active'));
    });

    // Esc fecha o currículo e volta para a home
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('cv-active')) {
            setCv(false);
        }
    });
});
