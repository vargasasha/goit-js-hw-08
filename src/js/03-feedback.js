import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {

  const { email, message } = evt.target.closest('.feedback-form');

  const formState = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  
}

function onSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Заповни всі поля!');
  }

  const filledForm = {
    email: email.value,
    message: message.value,
  };

  console.log(filledForm);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  form.email.value = email || '';
  form.message.value = message || '';
}
