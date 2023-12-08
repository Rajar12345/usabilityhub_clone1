const menuLink = document.getElementById('menu-link');
const toggleBtn = document.getElementById('nav-toggle');

toggleBtn.addEventListener('click', () => {
    menuLink.classList.toggle('active');
})