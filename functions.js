// script.js

function redirectTo(url) {
  window.location.href = url;
}
function scrollToKeyFeatures() {
  const keyFeaturesSection = document.getElementById('key-features');
    const offset = 30; 

    const topPos = keyFeaturesSection.getBoundingClientRect().top;
    const scrollPos = topPos + window.pageYOffset - offset;

    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
        }

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (validateLoginForm(email, password)) {
      authenticateUser(email, password);
    }
  });
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (validateRegistrationForm(name, email, password)) {
      registerUser(name, email, password);
    }
  });
  
  function validateLoginForm(email, password) {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
    return true;
  }
  
  function validateRegistrationForm(name, email, password) {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
    return true;
  }
  
  function authenticateUser(email, password) {

    alert('User authenticated successfully!');
    window.location.href = 'dashboard.html';
  }
  

  function registerUser(name, email, password) {

    alert('User registered successfully!');
    window.location.href = 'login.html';
  }
  
