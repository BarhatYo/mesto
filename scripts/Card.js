export class Card {
  constructor(data, templateSelector, openCardPicturePopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openCardPicturePopup = openCardPicturePopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }
  
  generateCard() {
    this._element = this._getTemplate();
    const cardName = this._element.querySelector('.element__name');
    const cardImage = this._element.querySelector('.element__image');
    cardName.textContent = this._name;
    cardImage.setAttribute('alt', this._name);
    cardImage.setAttribute('src', this._link);
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    //Слушатель лайка
    this._element.querySelector('.element__heart-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__heart-button_active')
    });
    //Слушатель корзины
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._element.remove();
    });
    //Слушатель картинки
    this._element.querySelector('.element__image').addEventListener('click', (evt) => {
      this._openCardPicturePopup(evt);
    });
  }
}