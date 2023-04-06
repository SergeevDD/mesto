export default class UserInfo {
  constructor({ nameElement, activityElement }) {
    this._name = nameElement;
    this._about = activityElement;
  }

  getUserInfo() {
    this._userValues = {
      userName: this._name.textContent,
      userActivity: this._about.textContent
    };
    return this._userValues;
  }

  setUserInfo({ userName, userActivity }) {
    this._name.textContent = userName;
    this._about.textContent = userActivity;
  }
}
