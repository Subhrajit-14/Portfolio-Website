function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show back to top button when scrolling
window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});
  