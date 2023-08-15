import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, popupCloseButton, popupDeleteButton) {
    super(popupSelector, popupCloseButton);
    this._popupDeleteButton = popupDeleteButton;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupDeleteButton.addEventListener('click', () => {
      this._card._removeCard(this._card);
      this.close();
    })

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' && this._popupSelector.classList.contains('popup_opened')) {
        this._card._removeCard(this._card);
        this.close();
      }
    })
  }  
}


