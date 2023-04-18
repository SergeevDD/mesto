export default class UserInfo {
  constructor({ nameElement, activityElement, avatarElement }) {
    this._name = nameElement;
    this._about = activityElement;
    this._avatar = avatarElement;
    this._id = "anonymous";
  }

  getUserInfo() {
    this._userValues = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return this._userValues;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
    this._avatar.src = userData.avatar;
    this._id = userData._id;
  }

  getUserId() {
    return this._id;
  }

}
