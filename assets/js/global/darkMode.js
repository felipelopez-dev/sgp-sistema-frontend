const modeLightDark = () => {
	const buttonStyle = document.querySelector('.sgp-header__btn-light-dark');

	buttonStyle.addEventListener('click', () => {
		buttonStyle.classList.toggle('dark')
	})
}
