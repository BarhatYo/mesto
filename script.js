let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let editForm = content.querySelector('.edit-form');
let editFormName = content.querySelector('.edit-form__input_name');
let editFormAbout = content.querySelector('.edit-form__input_about');
let profileName = content.querySelector('.profile__name');
let profileAbout = content.querySelector('.profile__about');
let closeButton = content.querySelector('.edit-form__close');
let submitButton = content.querySelector('.edit-form__submit-button');

function editProfile() {
  editForm.style.visibility = 'visible';
  editFormName.value = profileName.textContent;
  editFormAbout.value = profileAbout.textContent;
}

function closeEdit() {
  editForm.style.visibility = 'hidden';
} 

function saveEdit() {
  profileName.textContent = editFormName.value;
  profileAbout.textContent = editFormAbout.value;
  closeEdit();
}

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closeEdit);
submitButton.addEventListener('click', saveEdit);

