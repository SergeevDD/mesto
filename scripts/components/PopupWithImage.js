import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._src = data.image;
    this._description = data.description;
  }

  open() {
    this._element.querySelector('.popup__image').src = this._src;
    this._element.querySelector('.popup__image').alt = this._description;
    this._element.querySelector('.popup__subtitle').textContent = this._description;
    super.open();
  }

}
