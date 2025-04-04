const bodyChange = document.querySelector('body');
const buttonDarkLight = document.querySelector('.sgp-header__btn-light-dark');
const iconDark = document.querySelector('.sgp-header__img-dark');
const iconLight = document.querySelector('.sgp-header__img-light');
const imagBrandDark = document.querySelector('.sgp-main__img-brand-black');
const imagBrandWhite = document.querySelector('.sgp-main__img-brand-white');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark-mode') {
    bodyChange.classList.add('dark-mode');
    iconDark.style.display = 'block';
    iconLight.style.display = 'none';

    if (imagBrandDark && imagBrandWhite) {
        imagBrandDark.style.display = 'none';
        imagBrandWhite.style.display = 'block';
    }
} else {
    iconDark.style.display = 'none';
    iconLight.style.display = 'block';

    if (imagBrandDark && imagBrandWhite) {
        imagBrandDark.style.display = 'block';
        imagBrandWhite.style.display = 'none';
    }
}

buttonDarkLight.addEventListener('click', () => {
    bodyChange.classList.toggle('dark-mode');

    if (bodyChange.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        iconDark.style.display = 'block';
        iconLight.style.display = 'none';

        if (imagBrandDark && imagBrandWhite) {
            imagBrandDark.style.display = 'none';
            imagBrandWhite.style.display = 'block';
        }
    } else {
        localStorage.setItem('theme', 'light-mode');
        iconDark.style.display = 'none';
        iconLight.style.display = 'block';

        if (imagBrandDark && imagBrandWhite) {
            imagBrandDark.style.display = 'block';
            imagBrandWhite.style.display = 'none';
        }
    }
});
