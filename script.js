// script.js
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  if (!emailInput.validity.valid) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
});