//Массив объектов с данными для создания карточек
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Объект со свойствами, в которых указаны необходимые селекторы
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}

//Селекторы
export const content = document.querySelector('.content');
export const popupCard = content.querySelector('.popup_type_card');
export const popupEdit = content.querySelector('.popup_type_edit');

//Селекторы для редактирования профиля
export const editButton = content.querySelector('.profile__edit-button');
export const popupFormEdit = content.querySelector('.popup__form_type_edit');
export const popupEditInputName = content.querySelector('.popup__input_type_name');
export const popupEditInputAbout = content.querySelector('.popup__input_type_about');
export const profileName = content.querySelector('.profile__name');
export const profileAbout = content.querySelector('.profile__about');
export const closePopupEditButton = content.querySelector('.popup__close_type_edit');

//Селекторы для добавления карточек
export const addCardButton = content.querySelector('.profile__add-button');
export const popupFormCard = content.querySelector('.popup__form_type_card');
export const closePopupCardButton = content.querySelector('.popup__close_type_card');
export const popupCardInputName = content.querySelector('.popup__input_type_card-name');
export const popupCardInputImage = content.querySelector('.popup__input_type_image-url');
export const cardsContainer = document.querySelector('.elements__list');
export const popupCardSubmit = popupCard.querySelector('.popup__button');

//Селекторы для попапа картинки карточки
export const popupPicture = content.querySelector('.popup_type_picture');
export const popupCaption = content.querySelector('.popup__picture-caption');
export const popupImage = content.querySelector('.popup__image');
export const popupCloseButton = content.querySelector('.popup__close_type_picture');