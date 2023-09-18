let emailInput = document.getElementById('form-input');
let submitButton = document.getElementById('form-button');
let formBox = document.getElementById('form-box');
let successMessage = document.getElementById('success-message');
let emailOutput = document.getElementById('email-output');
let dismissButton = document.getElementById('dismiss-button');
let formInput = document.getElementById('form-input');
let validEmail = document.querySelector('.valid-email');
const emailPattern = /^[aA-zA-Z0-9_]+@[a-zA-Z0-9.]+\.[a-zA-Z]/;

submitButton.onclick = () => {
    if(emailPattern.test(emailInput.value) === true){
        emailOutput.innerText = emailInput.value;
        formBox.style.display = 'none';
        successMessage.style.display = 'flex';
    }
    else if (!emailPattern.test(emailInput.value) === true) {
        validEmail.style.display = 'inline';
        formInput.style.background = 'hsl(4, 100%, 67%, 0.3)';
        formInput.style.border = '1px solid hsl(4, 100%, 67%, 0.3)';
    }
}

dismissButton.onclick = () => {
    formBox.style.display = 'flex';
    successMessage.style.display = 'none';
    emailInput.value = '';
    validEmail.style.display = 'none';
    formInput.style.background = 'none';
    formInput.style.border = '1px solid gray';
}