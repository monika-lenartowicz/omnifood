const header = document.querySelector('.js-header');
const menu = document.querySelector('.js-menu-button');

const changeClassToMenuMobile = () => {
	header.classList.toggle('nav-open');
};

menu.addEventListener('click', changeClassToMenuMobile);
