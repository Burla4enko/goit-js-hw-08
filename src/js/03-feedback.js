import throttle from 'lodash.throttle';

const FEEDBACK_STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  formEmail: document.querySelector('[name="email"]'),
  formMessage: document.querySelector('[name="message"]'),
};

const formData = {};

refs.form.addEventListener('input', setLocalStorage);
refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

populateMassageOutput();

function setLocalStorage(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!refs.formEmail.value || !refs.formMessage.value) {
    alert('Please, fill all fields. Thanks!');
  } else {
    console.log(JSON.parse(localStorage[FEEDBACK_STORAGE_KEY]));
    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  }
}

function populateMassageOutput(evt) {
  const savedMessage = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  const storageData = JSON.parse(savedMessage);
  if (!savedMessage) {
    return;
  }

  refs.formEmail.value = storageData.email || '';
  refs.formMessage.value = storageData.message || '';
}
