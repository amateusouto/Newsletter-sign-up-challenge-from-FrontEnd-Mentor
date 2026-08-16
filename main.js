const newsletter = document.querySelector(".newsletter");
const form = document.querySelector(".nl-form"); 
const emailInput = document.getElementById("email");
const successCard = document.querySelector(".success");
const dismissBtn = document.getElementById("dismiss");
const error = document.querySelector(".error-message");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    if (emailInput.checkValidity()) {
        newsletter.classList.add('hidden');
        successCard.classList.add('active');
        error.classList.remove('active');
        emailInput.classList.remove('error-input');
    } else {
        error.classList.add('active');
        emailInput.classList.add('error-input');
    }
});

if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
        newsletter.classList.remove('hidden');
        successCard.classList.remove('active');
        emailInput.value = '';
        emailInput.classList.remove('error-input');
        error.classList.remove('active');
    });
}