const inicializarFormulario = () => {
  const pagesForm = document.querySelectorAll('.sgp-calculate__form');
  const buttonNext = document.querySelectorAll('.sgp-calculate__next-button');
  const buttonBack = document.querySelectorAll('.sgp-calculate__back-button');
  let calculatePages = 0;

  const showSteps = (steps) => {
    pagesForm[calculatePages].classList.remove('active');
    pagesForm[steps].classList.add('active');
    calculatePages = steps;
  };

  const avancarPagina = () => {
    if (calculatePages < pagesForm.length - 1) {
      showSteps(calculatePages + 1);
    }
  }

  const voltarPagina = () => {
    if (calculatePages > 0) {
      showSteps(calculatePages - 1);
    }
  }

  buttonNext.forEach(button => {
    button.addEventListener('click', avancarPagina);
  });

  buttonBack.forEach(button => {
    button.addEventListener('click', voltarPagina);
  });
}

document.addEventListener("DOMContentLoaded", inicializarFormulario);
