export default class Card {
  constructor(item, userId, templateSelector, popupDeleteInstance, handleCardClick, { removeCard, changeLike }) {
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._removeCard = removeCard;
    this._changeLike = changeLike; 
    this._isOwner = this._userId === this._item.owner._id;
    this._popupDeleteInstance = popupDeleteInstance;
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
    this._cardHeartButton = this._element.querySelector('.element__heart-button');
    this._cardHeartCounter = this._element.querySelector('.element__heart-counter');
    this._cardHeartCounter.textContent = this._item.likes.length;
    cardName.textContent = this._name;
    cardImage.setAttribute('alt', this._name);
    cardImage.setAttribute('src', this._link);
    this._updateLike();
    if (this._isOwner === false) {
      this._element.querySelector('.element__trash').remove();
    }
    this._setEventListeners();
    return this._element;
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  getId() {
    return this._item._id;
  }

  isLiked() {
    return this._item.likes.some(obj => obj._id === this._userId);
  }

  setLikes(data) {
    this._item.likes = data.likes;
    this._updateLike();
  }

  _updateLike() {
    this._cardHeartCounter.textContent = this._item.likes.length;
    if (this.isLiked()) {
      this._cardHeartButton.classList.add('element__heart-button_active');
    } else {
      this._cardHeartButton.classList.remove('element__heart-button_active');
    }
  }

  _setEventListeners() {
    //Слушатель лайка
    this._cardHeartButton.addEventListener('click', () => {
      this._changeLike(this);
    });
    //Слушатель корзины
    if (this._isOwner === true) {
      this._element.querySelector('.element__trash').addEventListener('click', () => this._popupDeleteInstance.open(this))
    }
    //Слушатель картинки
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}