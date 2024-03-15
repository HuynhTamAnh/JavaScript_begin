document.addEventListener('DOMContentLoaded', (event) => {
    let currentStep = 1;
    const totalSteps = 4;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    function updateSteps() {
      for (let i = 1; i <= totalSteps; i++) {
        const step = document.getElementById('step' + i);
        if (i <= currentStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      }
    }
  
    function toggleButtons() {
      prevButton.disabled = currentStep === 1;
      nextButton.disabled = currentStep === totalSteps;
    }
  
    prevButton.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateSteps();
        toggleButtons();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateSteps();
        toggleButtons();
      }
    });
  
    updateSteps();
    toggleButtons();
  });
  