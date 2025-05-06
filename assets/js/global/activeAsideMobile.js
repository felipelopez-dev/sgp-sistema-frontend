const asideMobile = () => {
    const menuAside = document.querySelector('.sgp-aside-left');

    if (menuAside.style.display === 'block') {
        menuAside.style.display = 'none';
    } else {
        menuAside.style.display = 'block';
    }
};

const clickAside = document.querySelector('.sgp-guide__menumobile');
clickAside.addEventListener('click', asideMobile);
