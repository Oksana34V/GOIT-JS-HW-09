let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const feedbackFormStorageData = localStorage.getItem('feedback-form-state');
if (feedbackFormStorageData) {
  formData = JSON.parse(feedbackFormStorageData);
  Object.keys(formData).forEach(key => {
    let value = formData[key];
    form.querySelector(`[name="${key}"`).value = value;
  });
}
const key = 'feedback-form-state';

form.addEventListener('input', handlerInput);

function handlerInput(event) {
  let field = event.target;
  formData[field.name] = field.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  let errors = 0;
  Object.keys(formData).forEach(key => {
    let value = formData[key];
    if (!value) {
      errors++;
    }
  });
  if (errors) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  }
}
