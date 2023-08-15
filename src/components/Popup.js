export default class Popup {
  constructor(popupSelector, popupCloseButton) {
    this._popupSelector = popupSelector;
    this._popupCloseButton = popupCloseButton;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target === this._popupSelector) {
        this.close();
      }
    });

    this._popupCloseButton.addEventListener('click', () => {
      this.close(this._popupSelector);
    });
  }
}