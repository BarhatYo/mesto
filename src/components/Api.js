export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  onResponce(res) {
    if (res.ok) {
      return res.json();
    }
      
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllInfoApi() {
    return Promise.all([this.getAllCardsApi(), this.getCurrentUserApi()])
  }

  getCurrentUserApi() {
    return fetch(`${this.baseUrl}/users/me`, {
    headers: this.headers
    })
    .then(this.onResponce)
  }

  changeLikeApi(cardId, isLiked){
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this.headers,
    })
    .then(this.onResponce)
  }

  getAllCardsApi() {
    return fetch(`${this.baseUrl}/cards`, {
    headers: this.headers
  })
    .then(this.onResponce)
  }

  addCardApi(card) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(card)
    })
    .then(this.onResponce)
  }

  removeCardApi(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this.onResponce)
  }

  changeUserInfoApi(userInfo) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(userInfo)
    })
    .then(this.onResponce)
  }

  changeUserAvatarApi(avatarLink) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(avatarLink)
    })
    .then(this.onResponce)
  }
}

