export default class UserInfo {
  constructor(nameSelector, infoSelector, profileAvatar) {
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    this._userInfo = {
      name: this._nameSelector.textContent,
      info: this._infoSelector.textContent,
      avatar: this._profileAvatar.src
    }

    return this._userInfo;
  }

  setUserInfo({ name, about, avatar }) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = about;
    this._profileAvatar.src = avatar;
  }

  setUserAvatar({ avatar }) {
    this._profileAvatar.src = avatar;
  }
}