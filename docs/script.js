const navLinks = document.querySelectorAll('.sidebar-nav-item a');
const sections = document.querySelectorAll('section');

let currentSection = 'home';
document.getElementById('home-link').classList.add('active');

window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 50) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
