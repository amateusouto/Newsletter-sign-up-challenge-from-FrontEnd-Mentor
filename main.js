const newsletter = document.querySelector(".newsletter");
const form = document.querySelector(".nl-form"); 
const emailInput = document.getElementById("email");
const successCard = document.querySelector(".success");
const dismissBtn = document.getElementById("dismiss");
const error = document.getElementById("error");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    if (emailValue !== '' && emailValue.includes('@')) {
        newsletter.style.display = "none"; 
        successCard.style.display = "flex";
        error.style.display = 'none';
        emailInput.classList.remove('error-input');
    } else {
        error.style.display = 'block';
        emailInput.classList.add('error-input');
    }
});

if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
        successCard.style.display = 'none';
        newsletter.style.display = 'flex';
        emailInput.value = '';
        error.style.display = 'none';
        emailInput.classList.remove('error-input');
    });
}