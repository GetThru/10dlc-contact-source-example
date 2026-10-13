// Nothing is submitted; this form is only an example
document.getElementById('exampleForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showMessage('Thanks for signing up! (This is only an example form, so nothing was submitted.)');
});

// The policy links are placeholders in this example
document.querySelectorAll('.demo-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showMessage('On a real form, this link would open the organization\'s Privacy Policy or Terms & Conditions page.');
  });
});

function showMessage(text) {
  const msg = document.getElementById('submitMessage');
  msg.textContent = text;
  msg.hidden = false;
}
