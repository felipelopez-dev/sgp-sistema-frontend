const exitButton = () => {
    const buttonExit = document.querySelector('.sgp-header__icon-exit');

    if (buttonExit) {
        sessionStorage.removeItem('usuarioLogado');
        window.location.replace('../../pages/login/login.html');
    }
}

const clickExit = document.querySelector('.sgp-header__icon-exit');
clickExit.addEventListener('click', exitButton);