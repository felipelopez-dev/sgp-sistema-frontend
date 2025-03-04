const minMax = (event) => {
	const input = event.target; // Captura o input específico que acionou o evento
	const min = parseInt(input.min); // Obtém o valor mínimo do input
	const max = parseInt(input.max); // Obtém o valor máximo do input
	const value = parseInt(input.value); // Obtém o valor atual digitado pelo usuário

	if (value < min) {
			input.value = min;
	} else if (value > max) {
			input.value = max;
	}
};

document.querySelectorAll('.calculate--input').forEach(input => {
	input.addEventListener('input', minMax);
});
