document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navUl = document.querySelector('nav ul');
    const menuIconContent = document.getElementById('menu-icon-content');
  
    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('show');
        const isMenuVisible = navUl.classList.contains('show');
        // Bytt ikon basert på om menyen er synlig eller ikke
        menuIconContent.innerHTML = isMenuVisible ? '&#10005;' : '&#9776;';
    });
});