const keyboardManipulation = (e) => {

	  if ((e.key === '-') || (e.key === 'e') || (e.key === ',') || (e.key === '.')) {
        e.preventDefault();
    }
}

const clickKeyboard = document.querySelectorAll('.calculate--input');
clickKeyboard.forEach((Keyboard) => {
	Keyboard.addEventListener('keydown', keyboardManipulation);
});


