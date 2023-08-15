import './index.css';

import { config } from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDelete from "../components/PopupDelete.js";

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

//Селекторы для попапа подтверждения удаления карточки
const popupDelete = content.querySelector('.popup_type_delete');
const closePopupDeleteButton = content.querySelector('.popup__close_type_delete');
const popupDeleteButton = content.querySelector('.popup__delete-button');
const popupFormDelete = content.querySelector('.popup__form_type_delete');

//Селекторы для попапа смены аватара
const popupAvatar = content.querySelector('.popup_type_avatar');
const popupFormAvatar = content.querySelector('.popup__form_type_avatar');
const closePopupAvatarButton = content.querySelector('.popup__close_type_avatar');
const profileAvatarEdit = content.querySelector('.profile__avatar-container');
const profileAvatar = content.querySelector('.profile__avatar');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: '4c55a9ed-e154-4f7c-887d-b90cfb7b0881',
    'Content-Type': 'application/json'
  }
});

//Инстанс попапа смены аватара
const popupAvatarInstance = new PopupWithForm(popupAvatar, closePopupAvatarButton, popupFormAvatar, {
  formSubmit: (avatarLinkFromForm) => {
    renderLoading(true, popupAvatar, 'Сохранить');
    api.changeUserAvatarApi(avatarLinkFromForm)
      .then(userInfoFromServer => {
        userInfoInstance.setUserAvatar(userInfoFromServer);
        popupAvatarInstance.close();
      })
      .catch(err => console.log(err))
      .finally(() => renderLoading(false, popupAvatar, 'Сохранить'))     
  }
});
popupAvatarInstance.setEventListeners();

profileAvatarEdit.addEventListener('click', () => {
  popupAvatarInstance.open();
  popupAvatarFormValidatorInstance.removeValidationError();
  popupAvatarFormValidatorInstance.toggleButtonState(popupFormAvatar.checkValidity());
})

function renderLoading(isLoading, popupSelector, InitialButtonText) {
  const popupButton = popupSelector.querySelector('.popup__button');
  if (isLoading) {
    popupButton.textContent = 'Сохранение...';
  } else {
    popupButton.textContent = InitialButtonText;
  }
}

//Инстанс Секции, с помощью которого добавляются карточки на страницу
const cardList = new Section({
  renderer: (item) => {
    const newCard = createNewCardInstance(item).generateCard();
    cardList.addItem(newCard, "append");
  }
}, cardsContainer);

//Создание нового экземпляра класса Card
function createNewCardInstance(item) {
  const newCardInstance = new Card(item, userId, '#element-template', popupDeleteInstance, handleCardClick, {
    removeCard: (cardInstance) => {
      api.removeCardApi(cardInstance.getId())
        .then(() => cardInstance.remove())
        .catch(err => console.log(err))
    },
    changeLike: (cardInstance) => {
      api.changeLikeApi(cardInstance.getId(), cardInstance.isLiked())
        .then(dataCardFromServer => cardInstance.setLikes(dataCardFromServer))
        .catch(err => console.log(err))
    }
  });
  return newCardInstance;
}

//В эту переменную далее записывается ID текущего юзера
let userId = null;

api.getAllInfoApi()
  .then(([cards, user]) => {
    userId = user._id;
    cardList.renderElements(cards);
    userInfoInstance.setUserInfo(user)
  })
  .catch(err => console.log(err))

//Обработчик для попапа картинки карточки
function handleCardClick(pictureName, pictureLink) {
  popupPictureInstance.open(pictureName, pictureLink);
}

//Инстанс попапа карточки
const popupWithCardForm = new PopupWithForm(popupCard, closePopupCardButton, popupFormCard,
  { formSubmit: (data) => {
    renderLoading(true, popupCard, 'Создать');
    api.addCardApi(data)
      .then(cardFromServer => {
        const newCard = createNewCardInstance(cardFromServer).generateCard();
        cardList.addItem(newCard, "prepend");
        popupWithCardForm.close();
      })
      .catch(err => console.log(err))
      .finally(() => renderLoading(false, popupCard, 'Создать'))
  }});

addCardButton.addEventListener('click', () => {
  popupWithCardForm.open();
  addCardFormValidatorInstance.removeValidationError();
  addCardFormValidatorInstance.toggleButtonState(popupFormCard.checkValidity());
})

popupWithCardForm.setEventListeners();

//Инстанс попапа редактирования инфо о юзере
const popupWithEditForm = new PopupWithForm(popupEdit, closePopupEditButton, popupFormEdit,
  { formSubmit: (userInfoFromForm) => {
    renderLoading(true, popupEdit, 'Сохранить');
    api.changeUserInfoApi(userInfoFromForm)
      .then(userInfoFromForm => {
        userInfoInstance.setUserInfo(userInfoFromForm);
        popupWithEditForm.close();
      })
      .catch(err => console.log(err))
      .finally(() => renderLoading(false, popupEdit, 'Сохранить'))
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
const userInfoInstance = new UserInfo(profileName, profileAbout, profileAvatar);

//Инстанс попапа с картинкой
const popupPictureInstance = new PopupWithImage(popupPicture, popupCloseButton);
popupPictureInstance.setEventListeners();

//Инстанс попапа с подтверждением удаления
const popupDeleteInstance = new PopupDelete(popupDelete, closePopupDeleteButton, popupDeleteButton, popupFormDelete);
popupDeleteInstance.setEventListeners();

//Создаем экземпляры валидации для всех форм
const editProfileFormValidatorInstance = new FormValidator(config, popupEdit);
editProfileFormValidatorInstance.enableValidation();

const addCardFormValidatorInstance = new FormValidator(config, popupCard);
addCardFormValidatorInstance.enableValidation();

const popupAvatarFormValidatorInstance = new FormValidator(config, popupAvatar);
popupAvatarFormValidatorInstance.enableValidation();


