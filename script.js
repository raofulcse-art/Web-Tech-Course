const registrants = [];

function updateAnalytics() {
  let virtual = 0, inPerson = 0;
  for (let i = 0; i < registrants.length; i++) {
    if (registrants[i].attendance === 'Virtual') virtual++;
    else inPerson++;
  }
  document.getElementById('totalCount').textContent = registrants.length;
  document.getElementById('virtualCount').textContent = virtual;
  document.getElementById('inPersonCount').textContent = inPerson;
}

document.getElementById('analyticsBtn').addEventListener('click', function () {
  const panel = document.getElementById('analyticsPanel');
  if (panel.classList.contains('hidden')) {
    updateAnalytics();
    panel.classList.remove('hidden');
    this.textContent = 'Hide Event Analytics';
  } else {
    panel.classList.add('hidden');
    this.textContent = 'Show Event Analytics';
  }
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked');
  let valid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('attendanceError').textContent = '';

  if (name.length < 6 || name.length > 100) {
    document.getElementById('nameError').textContent = 'Name must be between 6 and 100 characters.';
    valid = false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('emailError').textContent = 'Please enter a valid professional email address.';
    valid = false;
  }

  if (!attendance) {
    document.getElementById('attendanceError').textContent = 'Please select your attendance type.';
    valid = false;
  }

  if (!valid) return;

  registrants.push({
    name: name,
    email: email,
    company: document.getElementById('company').value.trim(),
    attendance: attendance.value
  });

  this.reset();

  const msg = document.getElementById('successMessage');
  msg.textContent = 'Registration submitted! Total registrants: ' + registrants.length;
  msg.style.display = 'block';

  const panel = document.getElementById('analyticsPanel');
  if (!panel.classList.contains('hidden')) updateAnalytics();
});