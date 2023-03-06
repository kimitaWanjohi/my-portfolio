
const menu = document.getElementById('menu');
const backdrop = document.getElementById('menu-backdrop');

function showMenu() {
    menu.classList.remove('mobile-menu-hide');
    backdrop.classList.remove('mobile-menu-hide');
}

function hideMenu() {
    menu.classList.add('mobile-menu-hide');
    backdrop.classList.add('mobile-menu-hide');
}
