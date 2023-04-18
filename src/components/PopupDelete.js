import Popup from './Popup.js';

export default class PopupDelete extends Popup {
  constructor({ popupSelector, handleformSubmit }) {
    super(popupSelector);
    this._handleformSubmit = handleformSubmit;
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
  }

  setEventListeners() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleformSubmit(this._cardId);
    });
    super.setEventListeners();
  }
}
