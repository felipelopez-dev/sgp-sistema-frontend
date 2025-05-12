const loginKeyboard = (e) => {
    const loginUserKey = document.querySelector('.login--user').value.trim();
    const loginPasswordKey = document.querySelector('.login--password').value.trim();

    if (e.key === 'Enter' && loginUserKey === 'Tunel' && loginPasswordKey === 'tcm1234') {
        e.preventDefault();
        sessionStorage.setItem('usuarioLogado', 'true');
        window.location.replace('../../index.html');
    }
};

document.addEventListener('keydown', loginKeyboard);
