const buttonMobile = () => {
    const navList = document.querySelector('.sgp-header__list');
    
    if(navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
}

const clickMobile = document.querySelector('.sgp-header__menu-mobile');
clickMobile.addEventListener('click', buttonMobile);