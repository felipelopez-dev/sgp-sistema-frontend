document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll('.sgp-calculate__form');
  let currentPageIndex = 0;

  const updatePageVisibility = () => {
    pages.forEach((page, index) => {
      if(index === currentPageIndex) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  const validateCurrentPage = () => {
    const currentPage = pages[currentPageIndex];
    const inputs = currentPage.querySelectorAll('.calculate--input');
    const nextButton = currentPage.querySelector('.sgp-calculate__next-button');
    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        input.style.border = '2px solid #e63636'; // Borda vermelha
        isValid = false;
      } else {
        input.style.border = '2px solid #4CAF50'; // Borda verde
      }
    });

    if(nextButton) {
      nextButton.disabled = !isValid;
    }
  }

  pages.forEach(page => {
    const inputs = page.querySelectorAll('.calculate--input');
    inputs.forEach(input => {
      input.addEventListener('input', validateCurrentPage);
    });
  });

  pages.forEach((page, index) => {
    const nextButton = page.querySelector('.sgp-calculate__next-button');
    if(nextButton) {
      nextButton.addEventListener('click', () => {
        if (index === currentPageIndex && !nextButton.disabled) {
          if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            updatePageVisibility();
            validateCurrentPage();
          }
        }
      });
      nextButton.disabled = true;
    }

    const backButton = page.querySelector('.sgp-calculate__back-button');
    if(backButton) {
      backButton.addEventListener('click', () => {
        if (currentPageIndex > 0) {
          currentPageIndex--;
          updatePageVisibility();
          validateCurrentPage();
        }
      });
    }
  });

  updatePageVisibility();
  validateCurrentPage();
});
