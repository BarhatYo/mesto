import './index.css';

import {
  initialCards,
  config
} from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//Селекторы
const content = document.querySelector('.content');
const popupCard = content.querySelector('.popup_type_card');
const popupEdit = content.querySelector('.popup_type_edit');

//Селекторы для редактирования профиля
const editButton = content.querySelector('.profile__edit-button');
const popupFormEdit = content.querySelector('.popup__form_type_edit');
const popupEditInputName = content.querySelector('.popup__input_type_name');
const popupEditInputAbout = content.querySelector('.popup__input_type_about');
const profileName = content.querySelector('.profile__name');
const profileAbout = content.querySelector('.profile__about');
const closePopupEditButton = content.querySelector('.popup__close_type_edit');

//Селекторы для добавления карточек
const addCardButton = content.querySelector('.profile__add-button');
const popupFormCard = content.querySelector('.popup__form_type_card');
const closePopupCardButton = content.querySelector('.popup__close_type_card');
const cardsContainer = document.querySelector('.elements__list');

//Селекторы для попапа картинки карточки
const popupPicture = content.querySelector('.popup_type_picture');
export const popupCaption = content.querySelector('.popup__picture-caption');
export const popupImage = content.querySelector('.popup__image');
const popupCloseButton = content.querySelector('.popup__close_type_picture');

//Инстанс Секции, с помощью которого добавляются карточки на страницу
const cardList = new Section({ 
  data: initialCards,
  renderer: (item) => {
    const newCard = createNewCardInstance(item).generateCard();
    cardList.addItem(newCard, "append");
  }
}, cardsContainer);

cardList.renderElements();

//Создание нового экземпляра класса Card
function createNewCardInstance(item) {
  const newCardInstance = new Card(item, '#element-template', handleCardClick);
  return newCardInstance;
}

//Обработчик для попапа картинки карточки
function handleCardClick(element) {
  popupPictureInstance.open(element);
  popupPictureInstance.setEventListeners();
}

//Инстанс попапа карточки
const popupWithCardForm = new PopupWithForm(popupCard, closePopupCardButton, popupFormCard,
  { formSubmit: (data) => {
    const newCard = createNewCardInstance(data).generateCard();

    cardList.addItem(newCard, "prepend");
  }});
addCardButton.addEventListener('click', () => {
  popupWithCardForm.open();
  addCardFormValidatorInstance.removeValidationError();
  addCardFormValidatorInstance.toggleButtonState(popupFormCard.checkValidity());
})

popupWithCardForm.setEventListeners();

//Инстанс попапа редактирования инфо о юзере
const popupWithEditForm = new PopupWithForm(popupEdit, closePopupEditButton, popupFormEdit,
  { formSubmit: (data) => {
    userInfoInstance.setUserInfo(data);
  }});

editButton.addEventListener('click', () => {
  popupWithEditForm.open();
  const event = new Event('input');
  editProfileFormValidatorInstance.removeValidationError();
  editProfileFormValidatorInstance.toggleButtonState(popupFormCard.checkValidity());
  const userInfoData = userInfoInstance.getUserInfo();
  popupEditInputName.value = userInfoData.name;
  popupEditInputAbout.value = userInfoData.info;
  popupEditInputName.dispatchEvent(event);
})

popupWithEditForm.setEventListeners();

//Инстанс с инфо о юзере
const userInfoInstance = new UserInfo(profileName, profileAbout);

//Инстанс попапа с картинкой
const popupPictureInstance = new PopupWithImage(popupPicture, popupCloseButton);

//Создаем экземпляры валидации для обеих форм
const editProfileFormValidatorInstance = new FormValidator(config, popupEdit);
editProfileFormValidatorInstance.enableValidation();

const addCardFormValidatorInstance = new FormValidator(config, popupCard);
addCardFormValidatorInstance.enableValidation();
