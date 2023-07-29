import Popup from "./Popup.js";

import {
  popupCaption,
  popupImage
} from "../pages/index.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupCloseButton) {
    super(popupSelector, popupCloseButton)
  }

  open(element) {
    super.open();
    const image = element.querySelector('.element__image');
    const caption = element.querySelector('.element__name');

    popupImage.alt = caption.textContent;
    popupImage.src = image.src;
    popupCaption.textContent = caption.textContent;
  }
}



