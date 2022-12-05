import throttle from 'lodash.throttle';
const LOCALSTORAGE = 'feedback-form-state';
const formInfo = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea:document.querySelector('.feedback-form textarea')
};
refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
infotextarea();

function formSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE);
}

function onFormInput(evt) {
  formInfo[evt.target.name] = evt.target.value;
  console.log(formInfo);
  localStorage.setItem(LOCALSTORAGE, JSON.stringify(formInfo));
}
function infotextarea() {
  const savedMessage = localStorage.getItem(LOCALSTORAGE);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
