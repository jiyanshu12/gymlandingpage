document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links li a');

    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuIcon.classList.toggle('active');
    });

    // Close mobile nav when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuIcon.classList.remove('active');
            }
        });
    });
});