if (sessionStorage.getItem('usuarioLogado') === 'true') {
    window.location.replace('../../index.html');
}

const passwordUser = () => {
    const loginUser = document.querySelector('.login--user').value.trim();
    const loginPassword = document.querySelector('.login--password').value.trim();
    const printValidation = document.querySelector('.login-left__print-validation');

    if (loginUser === '' || loginPassword === '') {
        printValidation.innerText = 'Falta preencher um campo acima.';
        return;
    }

    if (loginUser === 'Tunel' && loginPassword === 'tcm1234') {
        sessionStorage.setItem('usuarioLogado', 'true');
        window.location.replace('../../index.html');
    } else {
        printValidation.innerText = 'Usuário ou senha incorretos.';
    }
};

const clickUserPassword = document.querySelector('.login-left__button');
clickUserPassword.addEventListener('click', passwordUser);
