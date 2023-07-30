import Popup from "./Popup.js";

import {
  popupCaption,
  popupImage
} from "../pages/index.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupCloseButton) {
    super(popupSelector, popupCloseButton)
  }

  open(name, link) {
    super.open();
    popupImage.alt = name;
    popupImage.src = link;
    popupCaption.textContent = name;
  }
}



