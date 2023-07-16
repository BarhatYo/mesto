export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._formElement = formElement;
  }

  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
  
  _checkInputValidity(formElement, inputElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!isInputValid) {
      this._showError(inputElement, errorElement);
    } else {
      this.hideError(inputElement, errorElement);
    }
  }

  toggleButtonState(buttonElement, isActive) {
    if (!isActive) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListener() {
    const inputList = this._formElement.querySelectorAll(this._inputSelector);
    const submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
    const formCard = this._formElement.querySelector(this._formSelector);
    [...inputList].forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this.toggleButtonState(submitButtonElement, formCard.checkValidity());
        this._checkInputValidity(formCard, inputElement);
      })  
    });
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      if (!formCard.checkValidity()) return;
    });
  };

  enableValidation() {
    this._setEventListener();
  }
}

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}