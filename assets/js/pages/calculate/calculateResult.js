const sumCarcass = () => {

	const valuePigCarcass = parseFloat(document.querySelector('.sgp-calculate__pigcarcass1').value) || 0;
	const valuePigCarcass2 = parseFloat(document.querySelector('.sgp-calculate__pigcarcass2').value) || 0;

	const resultPigCarcass = 174 * valuePigCarcass;
	const resultPigCarcass2 = 174 * valuePigCarcass2;
	const sumPigCarcass = resultPigCarcass + resultPigCarcass2;

	sumTotalCash(sumPigCarcass);
}

const sumTotalCash = (sumPigCarcass) => {

	const valueTotalCash = 	parseFloat(document.querySelector('.sgp-calculate__total-cash').value) || 0;
	const sumTotalCashCarcass = valueTotalCash + sumPigCarcass;

	sumTotalCashRemove(sumTotalCashCarcass);
}

const sumTotalCashRemove = (sumTotalCashCarcass) => {

	const valueLowerCase = parseFloat(document.querySelector('.sgp-calculate__lower-cash').value) || 0;
	const valuePorkShankBox = parseFloat(document.querySelector('.sgp-calculate__pork-shank-box').value) || 0;
	const valueBox10kg = parseFloat(document.querySelector('.sgp-calculate__10kg-box').value) || 0;
	const valueExportBox = parseFloat(document.querySelector('.sgp-calculate__export-box').value) || 0;

	const resultTotalRemove = valueLowerCase + valuePorkShankBox + valueBox10kg + valueExportBox;
	const sumTotalRemove = sumTotalCashCarcass - resultTotalRemove;

	endResult(sumTotalRemove);
}

const endResult = (sumTotalRemove) => {

	const titleResult = document.querySelector('.sgp-calculate__title');
	const sumEndResult = document.querySelector('.sgp-calculate__end-result');
	sumEndResult.innerHTML = `Total: ${sumTotalRemove}`;
	titleResult.innerHTML = 'Resultado Aproximado';
}

const calculateButton = document.querySelector('.sgp-calculate__calculate-button');
calculateButton.addEventListener('click', sumCarcass);
