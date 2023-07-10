const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const isValid = validateForm();

  if (isValid) {
    
    alert('Signed up successfully');
    
  }
});

function validateForm() {
  let isValid = true;

  
  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');
  confirmPasswordInput.classList.remove('error');

  
  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue)) {
      isValid = false;
      alert("Invalid email ID")
    emailInput.classList.add('error');
  }

  
  const passwordValue = passwordInput.value;
  if (passwordValue.length < 6) {
      isValid = false;
      alert("Password must be longer than 6 characters")
    passwordInput.classList.add('error');
  }

  
  const confirmPasswordValue = confirmPasswordInput.value;
  if (confirmPasswordValue !== passwordValue) {
      isValid = false;
      alert("Passwords does not match")
    confirmPasswordInput.classList.add('error');
  }

  return isValid;
}

function isValidEmail(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
