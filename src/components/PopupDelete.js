import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, popupCloseButton, popupDeleteButton, popupFormDelete) {
    super(popupSelector, popupCloseButton);
    this._popupDeleteButton = popupDeleteButton;
    this._popupFormDelete = popupFormDelete;
  } 

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupFormDelete.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._card._removeCard(this._card);
      this.close();
    })
  }  
}


