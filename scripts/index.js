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
const cardsContainer = document.querySelector('.elements__list');
const popupCardSubmit = popupCard.querySelector('.popup__button');

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
function openEditProfilePopup() {
  const event = new Event('input');
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputAbout.value = profileAbout.textContent;
  popupEditInputName.dispatchEvent(event);
  editProfileFormValidatorInstance.removeValidationError();
}

function submitEditProfilePopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileAbout.textContent = popupEditInputAbout.value;
  closePopup(popupEdit);
}

//Слушатели редактирования профиля
editButton.addEventListener('click', openEditProfilePopup);
closePopupEditButton.addEventListener('click', function () {
  closePopup(popupEdit);
});
popupFormEdit.addEventListener('submit', submitEditProfilePopup);

popupEdit.addEventListener('click', (evt) => {
  if (evt.target === popupEdit) {
    closePopup(popupEdit);
  }
})

//Функции добавления карточек через кнопку добавления
function openAddCardPopup() {
  openPopup(popupCard);
  popupFormCard.reset();
  addCardFormValidatorInstance.toggleButtonState(popupCardSubmit, popupFormCard.checkValidity());
  addCardFormValidatorInstance.removeValidationError();
}

function createNewCard(evt) {
  evt.preventDefault();

  const popupCardInputObject = {
    name: popupCardInputName.value,
    link: popupCardInputImage.value
  };

  const newCard = createCard(popupCardInputObject);
  cardsContainer.prepend(newCard);

  closePopup(popupCard);
}

//Слушатели добавления карточек через кнопку добавления
addCardButton.addEventListener('click', openAddCardPopup);
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
function createCard(item) {
  const newCardInstance = new Card(item, '#element-template', openCardPicturePopup);
  const newCard = newCardInstance.generateCard();

  return newCard;
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardsContainer.append(cardElement);
});


//Функции октрытия попапа картинки карточки
function openCardPicturePopup(event) {
  openPopup(popupPicture);
  const card = event.target.closest('.element');
  const image = card.querySelector('.element__image');
  const caption = card.querySelector('.element__name');

  popupImage.alt = caption.textContent;
  popupImage.src = image.src;
  popupCaption.textContent = caption.textContent;
}

//Слушатели закрытия попапа картинки карточки
popupCloseButton.addEventListener('click', function () {
  closePopup(popupPicture);
});

popupPicture.addEventListener('click', (evt) => {
  if (evt.target === popupPicture) {
    closePopup(popupPicture);
  }
})



