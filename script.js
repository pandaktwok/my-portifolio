// Scripts para o portfólio

document.addEventListener('DOMContentLoaded', () => {
    const cvLink = document.getElementById('cv-link');
    
    if (cvLink) {
        cvLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('cv-active');
        });
    }
});
