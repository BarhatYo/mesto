let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let popup = content.querySelector('.popup');
let popupForm = content.querySelector('.popup__form');
let popupInputName = content.querySelector('.popup__input_type_name');
let popupInputAbout = content.querySelector('.popup__input_type_about');
let profileName = content.querySelector('.profile__name');
let profileAbout = content.querySelector('.profile__about');
let closeButton = content.querySelector('.popup__close');

function editProfile() {
  popup.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileAbout.textContent;  
}

function closeEdit() {
  popup.classList.remove('popup_opened');
} 

function saveEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileAbout.textContent = popupInputAbout.value;
  closeEdit();
}

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closeEdit);
popupForm.addEventListener('submit', saveEdit);
