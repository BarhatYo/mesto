import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';

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
const popupCardInputName = content.querySelector('.popup__input_type_card-name');
const popupCardInputImage = content.querySelector('.popup__input_type_image-url');

//Селекторы для попапа картинки карточки
const popupPicture = content.querySelector('.popup_type_picture');
const popupCaption = content.querySelector('.popup__picture-caption');
const popupImage = content.querySelector('.popup__image');
const popupCloseButton = content.querySelector('.popup__close_type_picture');

//Создаем экземпляры валидации для обеих форм
const editProfileFormValidatorInstance = new FormValidator(config, popupEdit);
editProfileFormValidatorInstance.enableValidation();

const addCardFormValidatorInstance = new FormValidator(config, popupCard);
addCardFormValidatorInstance.enableValidation();

//Функции открытия/закрытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(content.querySelector('.popup_opened'));
  }
}

//Функции редактирования профиля
function handlePopupEdit() {
  const event = new Event('input');
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputAbout.value = profileAbout.textContent;
  popupEditInputName.dispatchEvent(event);
  const inputList = popupEdit.querySelectorAll('.popup__input');
  [...inputList].forEach(input => {
    const errorElement = popupEdit.querySelector(`.${input.id}-error`);
    editProfileFormValidatorInstance.hideError(input, errorElement);
  })
}

function saveEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileAbout.textContent = popupEditInputAbout.value;
  closePopup(popupEdit);
}

//Слушатели редактирования профиля
editButton.addEventListener('click', handlePopupEdit);
closePopupEditButton.addEventListener('click', function () {
  closePopup(popupEdit);
});
popupFormEdit.addEventListener('submit', saveEdit);

popupEdit.addEventListener('click', (evt) => {
  if (evt.target === popupEdit) {
    closePopup(popupEdit);
  }
})

//Функции добавления карточек через кнопку добавления
function handlePopupCard() {
  openPopup(popupCard);
  popupCardInputName.value = '';
  popupCardInputImage.value = '';
  const popupCardSubmit = popupCard.querySelector('.popup__button');
  addCardFormValidatorInstance.toggleButtonState(popupCardSubmit, popupFormCard.checkValidity());
  const inputList = popupCard.querySelectorAll('.popup__input');
  [...inputList].forEach(input => {
    const errorElement = popupCard.querySelector(`.${input.id}-error`);
    addCardFormValidatorInstance.hideError(input, errorElement);
  });
}

function createNewCard(evt) {
  evt.preventDefault();

  const popupCardInputObject = {
    name: popupCardInputName.value,
    link: popupCardInputImage.value
  };

  const newCard = new Card(popupCardInputObject, '#element-template');
  newCard.generateCard('prepend');
  newCard._element.querySelector('.element__image').addEventListener('click', handlePopupPicture);

  closePopup(popupCard);
}

//Слушатели добавления карточек через кнопку добавления
addCardButton.addEventListener('click', handlePopupCard);
closePopupCardButton.addEventListener('click', function () {
  closePopup(popupCard);
});
popupFormCard.addEventListener('submit', createNewCard);

popupCard.addEventListener('click', (evt) => {
  if (evt.target === popupCard) {
    closePopup(popupCard);
  }
})

//Функция рендера карточек с помощью данных из массива
function renderInitialCards(data) {
  const newCard = new Card(data, '#element-template');
  newCard.generateCard('append');
  newCard._element.querySelector('.element__image').addEventListener('click', handlePopupPicture);
}

initialCards.forEach((item) => {
  renderInitialCards(item);
});

//Функции октрытия попапа картинки карточки
function handlePopupPicture(event) {
  openPopup(popupPicture);
  const card = event.target.closest('.element');
  const image = card.querySelector('.element__image');
  const caption = card.querySelector('.element__name');

  popupImage.alt = caption.textContent;
  popupImage.src = image.src;
  popupCaption.textContent = caption.textContent;
}

//Слушатели октрытия попапа картинки карточки
popupCloseButton.addEventListener('click', function () {
  closePopup(popupPicture);
});

popupPicture.addEventListener('click', (evt) => {
  if (evt.target === popupPicture) {
    closePopup(popupPicture);
  }
})



