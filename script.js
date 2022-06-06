const header = document.querySelector('.js-header');
const menu = document.querySelector('.js-menu-button');

const changeClassToMenuMobile = () => {
	header.classList.toggle('nav-open');
};

const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const href = link.getAttribute('href');

		if (href === '#')
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

		if (href !== '#' && href.startsWith('#')) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: 'smooth' });
		}

		if (link.classList.contains('main-navigation-link')) header.classList.toggle('nav-open');
	});
});

menu.addEventListener('click', changeClassToMenuMobile);
