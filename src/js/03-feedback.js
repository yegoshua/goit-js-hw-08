const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

const fromLocal = JSON.parse(localStorage.getItem('feedback-form-state'));
if (fromLocal) {
  emailInput.value = fromLocal.email;
  messageInput.value = fromLocal.message;
}

let formFeedback = {
  email: '',
  message: '',
};
emailInput.addEventListener('input', e => {
  formFeedback.email = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formFeedback));
});

messageInput.addEventListener('input', e => {
  formFeedback.message = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formFeedback));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formFeedback);
  localStorage.clear();
  emailInput.value = '';
  messageInput.value = '';
});
