const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const isValid = validateForm();

  if (isValid) {
    redirectTo('index.html');
  }
});

function validateForm() {
  let isValid = true;


  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');

  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue) ) {
      isValid = false;
      alert("Invalid email ID")
    emailInput.classList.add('error');
  }


  const passwordValue = passwordInput.value;
  if (passwordValue.length < 6) {
    isValid = false;
    passwordInput.classList.add('error');
  }

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function redirectTo(url) {
  window.location.href = url;
}
