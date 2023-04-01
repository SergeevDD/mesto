import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(this._popup);
  }

  open() {
  /*   this._popup.src = '???'
    this._popup.alt = '???'
    this._popup.src = '???' */
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_opened');

  }

}
