const registrationForm = document.getElementById('registration-form');
const registrationTableBody = document.querySelector('#registration-table tbody');

registrationForm.addEventListener('submit', event => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const dobInput = document.getElementById('dob');
  const acceptedTermsInput = document.getElementById('accepted-terms');

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const dob = new Date(dobInput.value);
  const acceptedTerms = acceptedTermsInput.checked;

  if (!isValidEmail(email)) {
    alert('Invalid email address');
    return;
  }

  const age = getAge(dob);
  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55');
    return;
  }

  const newRow = registrationTableBody.insertRow();
  newRow.insertCell().textContent = name;
  newRow.insertCell().textContent = email;
  newRow.insertCell().textContent = password;
  newRow.insertCell().textContent = dob.toDateString();
  newRow.insertCell().textContent = acceptedTerms ? 'Yes' : 'No';

  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  dobInput.value = '';
  acceptedTermsInput.checked = false;
});

