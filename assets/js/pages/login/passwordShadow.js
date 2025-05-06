const passwordShadow = () => {
    const inputPassword = document.querySelector('.login--password');
    const iconEye = document.querySelector('.login-left__icon-eye'); 
    const iconEyeSlash = document.querySelector('.login-left__icon-eye-slash'); 

    const isPasswordVisible = inputPassword.getAttribute('type') === 'text';

    if (isPasswordVisible) {
        inputPassword.setAttribute('type', 'password');
        iconEye.classList.remove('active');
        iconEyeSlash.classList.add('active');
    } else {
        inputPassword.setAttribute('type', 'text');
        iconEye.classList.add('active');
        iconEyeSlash.classList.remove('active');
    }
}

document.querySelectorAll('.login-left__icon-eye, .login-left__icon-eye-slash')
    .forEach(icon => icon.addEventListener('click', passwordShadow));
