const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');


hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Close menu when clicking outside the nav
document.addEventListener('click', (event) => {
if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
}
});

// Optional: close when any nav link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
link.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
});

