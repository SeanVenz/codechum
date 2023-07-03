function validateForm() {
  var password = document.forms["registrationForm"]["password"].value;
  var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
  var passwordError = document.getElementById("passwordError");
  
  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match.";
    return false;
  } else {
    passwordError.textContent = "";
  }
}