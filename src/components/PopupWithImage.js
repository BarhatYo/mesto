import Popup from "./Popup.js";

import {
  popupCaption,
  popupImage
} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupCloseButton) {
    super(popupSelector, popupCloseButton)
  }

  open(event) {
    super.open();
    const card = event.target.closest('.element');
    const image = card.querySelector('.element__image');
    const caption = card.querySelector('.element__name');

    popupImage.alt = caption.textContent;
    popupImage.src = image.src;
    popupCaption.textContent = caption.textContent;
  }
}



