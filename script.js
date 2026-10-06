// Highlight the sidebar link for the section currently in view (home page only).
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav-item a.nav-link');

if (sections.length) {
    const updateActive = () => {
        let current = sections[0].id;
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 50) {
                current = section.id;
            }
        });
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.hash === '#' + current);
        });
    };
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
}
