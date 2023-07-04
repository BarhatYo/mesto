//Общие
const content = document.querySelector('.content');

//Редактирование профиля
const editButton = content.querySelector('.profile__edit-button');
const popupEdit = content.querySelector('.popup_type_edit');
const popupFormEdit = content.querySelector('.popup__form_type_edit');
const popupEditInputName = content.querySelector('.popup__input_type_name');
const popupEditInputAbout = content.querySelector('.popup__input_type_about');
const profileName = content.querySelector('.profile__name');
const profileAbout = content.querySelector('.profile__about');
const closePopupEditButton = content.querySelector('.popup__close_type_edit');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

function handlePopupEdit() {
  const event = new Event('input');
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputAbout.value = profileAbout.textContent;
  popupEditInputName.dispatchEvent(event);
  const inputList = popupEdit.querySelectorAll('.popup__input');
  [...inputList].forEach(input => {
    const errorElement = popupEdit.querySelector(`.${input.id}-error`);
    hideError(input, errorElement, config);
  })
}

function saveEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileAbout.textContent = popupEditInputAbout.value;
  closePopup(popupEdit);
}

function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(content.querySelector('.popup_opened'));
  }
}

//Редактирование профиля - Слушатели
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

//Добавление карточек
const popupCard = content.querySelector('.popup_type_card');
const addCardButton = content.querySelector('.profile__add-button');
const popupFormCard = content.querySelector('.popup__form_type_card');
const closePopupCardButton = content.querySelector('.popup__close_type_card');
const cardsContainer = content.querySelector('.elements__list');
const popupCardInputName = content.querySelector('.popup__input_type_card-name');
const popupCardInputImage = content.querySelector('.popup__input_type_image-url');
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');

function handlePopupCard() {
  openPopup(popupCard);
  popupCardInputName.value = '';
  popupCardInputImage.value = '';
  const popupCardSubmit = popupCard.querySelector('.popup__button');
  toggleButtonState(popupCardSubmit, popupFormCard.checkValidity(), config);
  const inputList = popupCard.querySelectorAll('.popup__input');
  [...inputList].forEach(input => {
    const errorElement = popupCard.querySelector(`.${input.id}-error`);
    hideError(input, errorElement, config);
  });
}

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector('.element__name');
  const cardImage = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__heart-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__heart-button_active')
  });

  cardImage.setAttribute('alt', item.name);
  cardName.textContent = item.name;
  cardImage.setAttribute('src', item.link);
  cardImage.addEventListener('click', handlePopupPicture);

  cardElement.querySelector('.element__trash').addEventListener('click', function () {
    cardElement.remove();
    });
  return cardElement;
}

function renderInitialCards(data) {
  const newCards = createCard(data);
  cardsContainer.append(newCards);
}

initialCards.forEach((item) => {
  renderInitialCards(item);
});

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

//Добавление карточек - Слушатели
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

//Попап картинки
const cards = content.querySelectorAll('.element')
const images = content.querySelectorAll('.element__image');
const popupPicture = content.querySelector('.popup_type_picture');
const popupCaption = content.querySelector('.popup__picture-caption');
const popupImage = content.querySelector('.popup__image');
const popupCloseButton = content.querySelector('.popup__close_type_picture');

function handlePopupPicture(event) {
  openPopup(popupPicture);
  const card = event.target.closest('.element');
  const image = card.querySelector('.element__image');
  const caption = card.querySelector('.element__name');

  popupImage.alt = caption.textContent;
  popupImage.src = image.src;
  popupCaption.textContent = caption.textContent;
}

popupCloseButton.addEventListener('click', function () {
  closePopup(popupPicture);
});

popupPicture.addEventListener('click', (evt) => {
  if (evt.target === popupPicture) {
    closePopup(popupPicture);
  }
})