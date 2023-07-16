const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.elements__list');

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }
  
  _createCard() {
    const cardName = this._element.querySelector('.element__name');
    const cardImage = this._element.querySelector('.element__image');
    cardName.textContent = this._name;
    cardImage.setAttribute('alt', this._name);
    cardImage.setAttribute('src', this._link);

    return this._element;
  }

  generateCard(place) {
    this._element = this._getTemplate();
    this._createCard();
    this._setEventListeners();
    place === 'append' ? cardsContainer.append(this._element) : cardsContainer.prepend(this._element);
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
  }
}