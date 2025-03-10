const minMax = (event) => {

	const input = event.target;
	const min = parseInt(input.min);
	const max = parseInt(input.max);
	const value = parseInt(input.value);

	if (value < min) {
			input.value = min;
	} else if (value > max) {
			input.value = max;
	}
};

document.querySelectorAll('.calculate--input').forEach(input => {
	input.addEventListener('input', minMax);
});
