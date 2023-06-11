const initialCards = [
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

//Общие
const content = document.querySelector('.content');
const popup = content.querySelector('.popup');

//Редактирование профиля
const editButton = content.querySelector('.profile__edit-button');
const popupEdit = content.querySelector('.popup_type_edit');
const popupFormEdit = content.querySelector('.popup__form_type_edit');
const popupEditInputName = content.querySelector('.popup__input_type_name');
const popupEditInputAbout = content.querySelector('.popup__input_type_about');
const profileName = content.querySelector('.profile__name');
const profileAbout = content.querySelector('.profile__about');
const closePopupEditButton = content.querySelector('.popup__close_type_edit');

//Добавление карточек
const popupCard = content.querySelector('.popup_type_card');
const addCardButton = content.querySelector('.profile__add-button');
const popupFormCard = content.querySelector('.popup__form_type_card');
const closePopupCardButton = content.querySelector('.popup__close_type_card');
const cardsList = content.querySelector('.elements__list');
const popupCardInputName = content.querySelector('.popup__input_type_card-name');
const popupCardInputImage = content.querySelector('.popup__input_type_image-url');
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');

//Редактирование профиля
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  popupEditInputName.value = profileName.textContent;
  popupEditInputAbout.value = profileAbout.textContent;  
}

function saveEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileAbout.textContent = popupEditInputAbout.value;
  closePopupEdit();
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

//Редактирование профиля - Слушатели
editButton.addEventListener('click', openPopupEdit);
closePopupEditButton.addEventListener('click', closePopupEdit);
popupFormEdit.addEventListener('submit', saveEdit);



//Добавление карточек
function openPopupCard() {
  popupCard.classList.add('popup_opened');
  popupCardInputName.value = '';
  popupCardInputImage.value = '';
}

function closePopupCard() {
  popupCard.classList.remove('popup_opened');
}

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardName = cardElement.querySelector('.element__name');
  const cardImage = cardElement.querySelector('.element__image');
  const cardHeart = cardElement.querySelector('.element__heart-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__heart-button_active')
  });

  cardName.textContent = item.name;
  cardImage.setAttribute('src', item.link);
  cardImage.addEventListener('click', openPopupPicture);

  const trashCardButton = cardElement.querySelector('.element__trash')
  trashCardButton.addEventListener('click', function () {
  cardElement.remove();
  });
  return cardElement;
}

function renderInitialCards(data) {
  const newCards = createCard(data);
  cardsList.append(newCards);
}

initialCards.forEach((item) => {
  renderInitialCards(item);
});

function createNewCard(evt) {
  evt.preventDefault();

  const popupCardInputArray = [
    {name: popupCardInputName.value, link: popupCardInputImage.value}
  ];
  popupCardInputArray.forEach((item) => {
    const newCard = createCard(item);
    cardsList.prepend(newCard);
  });

  closePopupCard();
}

//Добавление карточек - Слушатели
addCardButton.addEventListener('click', openPopupCard);
closePopupCardButton.addEventListener('click', closePopupCard);
popupFormCard.addEventListener('submit', createNewCard);


//Попап картинки
const cards = content.querySelectorAll('.element')
const images = content.querySelectorAll('.element__image');
const popupPicture = content.querySelector('.popup_type_picture');
const popupCaption = content.querySelector('.popup__picture-caption');
const popupImage = content.querySelector('.popup__image');
const popupCloseButton = content.querySelector('.popup__close_type_picture');

function openPopupPicture(event) {
  const card = event.target.closest('.element');
  const image = card.querySelector('.element__image');
  const caption = card.querySelector('.element__name');

  popupImage.src = image.src;
  popupCaption.textContent = caption.textContent;
  popupPicture.classList.add('popup_opened');
}

function closePopupPicture() {
  popupPicture.classList.remove('popup_opened');
}

//Попап картинки - Слушатели
cards.forEach((card) => {
  const image = card.querySelector('.element__image');
  image.addEventListener('click', openPopupPicture);
});
popupCloseButton.addEventListener('click', closePopupPicture);
