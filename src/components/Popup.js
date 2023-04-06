
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._element = document.querySelector(this._popupSelector);
  }
  generatePopup() {
    this.setEventListeners();
    return this._element;
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handlePopupClose(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('click', (evt) => this._handlePopupClose(evt));
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  open() {

    this._element.classList.add('popup_opened');
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }
}
