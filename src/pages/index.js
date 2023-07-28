import './index.css';

import {
  initialCards,
  cardsContainer,
  popupCard,
  addCardButton,
  popupEdit,
  editButton,
  closePopupCardButton,
  closePopupEditButton,
  popupPicture,
  popupCloseButton,
  config,
  popupFormCard,
  popupFormEdit,
  profileName,
  profileAbout,
  popupEditInputName,
  popupEditInputAbout,
  popupCardSubmit
} from "../utls/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const cardList = new Section({ 
  data: initialCards,
  renderer: (item) => {
    const newCardInstance = new Card(item, '#element-template', handleCardClick);
    const newCard = newCardInstance.generateCard();

    cardList.addItem(newCard, "append");
  }
}, cardsContainer);

cardList.renderElements();

const popupCardInstance = new Popup(popupCard, closePopupCardButton);
addCardButton.addEventListener('click', () => {
  popupCardInstance.open();
  popupCardInstance.setEventListeners();
  addCardFormValidatorInstance.removeValidationError();
  addCardFormValidatorInstance.toggleButtonState(popupCardSubmit, popupFormCard.checkValidity());
})

const popupEditInstance = new Popup(popupEdit, closePopupEditButton);
editButton.addEventListener('click', () => {
  popupEditInstance.open();
  popupEditInstance.setEventListeners();
  const event = new Event('input');
  editProfileFormValidatorInstance.removeValidationError();
  editProfileFormValidatorInstance.toggleButtonState(popupCardSubmit, popupFormCard.checkValidity());
  const UserInfoData = UserInfoInstance.getUserInfo();
  popupEditInputName.value = UserInfoData.name;
  popupEditInputAbout.value = UserInfoData.info;
  popupEditInputName.dispatchEvent(event);
})

const popupPictureInstance = new PopupWithImage(popupPicture, popupCloseButton);

function handleCardClick(evt) {
  popupPictureInstance.open(evt);
  popupPictureInstance.setEventListeners();
}

const popupWithCardForm = new PopupWithForm(popupCard, closePopupCardButton, popupFormCard,
  { formSubmit: (data) => {
    const newCardInstance = new Card(data, '#element-template', handleCardClick);
    const newCard = newCardInstance.generateCard();

    cardList.addItem(newCard, "prepend");
  }});
popupWithCardForm.setEventListeners();

const UserInfoInstance = new UserInfo(profileName, profileAbout);

const popupWithEditForm = new PopupWithForm(popupEdit, closePopupEditButton, popupFormEdit,
  { formSubmit: (data) => {
    UserInfoInstance.setUserInfo(data);
  }});
popupWithEditForm.setEventListeners();


//Создаем экземпляры валидации для обеих форм
const editProfileFormValidatorInstance = new FormValidator(config, popupEdit);
editProfileFormValidatorInstance.enableValidation();

const addCardFormValidatorInstance = new FormValidator(config, popupCard);
addCardFormValidatorInstance.enableValidation();
