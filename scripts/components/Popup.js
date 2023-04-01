export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose() {
    if (this === 'Escape') {
      this.close();
    }
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    const popupCloseBtn = this._popup.querySelector();
    popupCloseBtn.addEventListener('click', () => {
      this.close();
    });
  }

}
