import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateForm();

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', throttle(onFormSubmit, 500));

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedFormData);
    localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedFormData === null) {
        return;
    }

    if (savedFormData.email) {
        inputEl.value = savedFormData.email;
        formData['email'] = inputEl.value;
    }
    if (savedFormData.message) {
        textareaEl.value = savedFormData.message;
        formData['message'] = textareaEl.value;
    }
}
