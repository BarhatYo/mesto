export default class Popup {
  constructor(popupSelector, popupCloseButton) {
    this._popupSelector = popupSelector;
    this._popupCloseButton = popupCloseButton;
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(document.querySelector('.popup_opened'));
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target === this._popupSelector) {
        this.close(this._popupSelector);
      }
    });

    this._popupCloseButton.addEventListener('click', () => {
      this.close(this._popupSelector);
    });
  }
}