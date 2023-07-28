export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
  }

  getUserInfo() {
    this._userInfo = {
      name: this._nameSelector.textContent,
      info: this._infoSelector.textContent,
    }

    return this._userInfo;
  }

  setUserInfo({ name, about }) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = about;
  }
}

