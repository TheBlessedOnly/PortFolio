function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    
    if (hamburgerMenu && !hamburgerMenu.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

// Close menu when window is resized to desktop size
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});
