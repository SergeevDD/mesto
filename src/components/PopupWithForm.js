import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleformSubmit }) {
    super(popupSelector);
    this._handleformSubmit = handleformSubmit;
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._formElement = this._element.querySelector('.popup__form');
  }

  setUserData(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleformSubmit(this._getInputValues());
      this._formElement.reset();
    });
    super.setEventListeners();
  }


}
