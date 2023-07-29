export default class FormValidator {
  constructor(config, popup) {
    this._popup = popup;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._inputList = this._popup.querySelectorAll(this._inputSelector);
    this._formElement = this._popup.querySelector(this._formSelector);
    this._submitButton = this._popup.querySelector(this._submitButtonSelector);
  }

  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
  
  _checkInputValidity(inputElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    if (!isInputValid) {
      this._showError(inputElement, errorElement);
    } else {
      this._hideError(inputElement, errorElement);
    }
  }

  toggleButtonState(isActive) {
    if (!isActive) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._inactiveButtonClass);
    }
  }

  removeValidationError() {
    [...this._inputList].forEach(input => {
      const errorElement = this._popup.querySelector(`.${input.id}-error`);
      this._hideError(input, errorElement);
    })
  }

  _setEventListener() {
    [...this._inputList].forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this.toggleButtonState(this._formElement.checkValidity());
        this._checkInputValidity(inputElement);
      })  
    });
    this._popup.addEventListener('submit', evt => {
      evt.preventDefault();
      if (!this._formElement.checkValidity()) return;
    });
  };

  enableValidation() {
    this._setEventListener();
  }
}