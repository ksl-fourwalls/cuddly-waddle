function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('error-message');

  errorMessage.textContent = '';

  if (fullName.length < 5) {
    errorMessage.textContent = 'Name must be at least 5 characters long';
    return false;
  }

  if (!email.includes('@')) {
    errorMessage.textContent = 'Please enter a valid email address';
    return false;
  }

  if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    errorMessage.textContent = 'Please enter a valid 10-digit phone number';
    return false;
  }

  if (password.length < 8 || password === 'password' || password === fullName) {
    errorMessage.textContent = 'Password should be at least 8 characters long and should not be "password" or the user\'s name';
    return false;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match';
    return false;
  }

  return true;
}

