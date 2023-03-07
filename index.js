
const menu = document.getElementById('menu');
const backdrop = document.getElementById('backdrop');

function showMenu() {
    menu.classList.remove('mobile-menu-hide');
    backdrop.classList.remove('backdrop-hidden');
    document.body.style.overflow = 'hidden';
}

function hideMenu() {
    menu.classList.add('mobile-menu-hide');
    backdrop.classList.add('backdrop-hidden');
    document.body.style.overflow = 'auto';
}
