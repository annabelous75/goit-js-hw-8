import throttle from 'lodash.throttle';
const LOCAL_STORAGE = 'feedback-form-state';
const formInfo = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textemail: document.querySelector('.feedback-form input'),
  texttextarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  formInfo[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(formInfo));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE);
}

updatedata();
function updatedata() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  if (savedMessage) {
    refs.texttextarea.value = savedMessage.message;
    refs.textemail.value = savedMessage.email;
  }
}
