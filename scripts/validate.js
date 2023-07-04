

function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function checkInputValidity(formElement, inputElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!isInputValid) {
    showError(inputElement, errorElement, config);
  } else {
    hideError(inputElement, errorElement, config);
  }
}

function toggleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

function setEventListener (formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
  [...inputList].forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
      checkInputValidity(formElement, inputElement);
    })  
  });
  formElement.addEventListener('submit', evt => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;
  });
};

function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  [...formList].forEach(formElement => {
   setEventListener(formElement, config);
  });
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}

enableValidation(config);



