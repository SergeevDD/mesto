export default class Card {
  constructor(data, templateSelector, openPopupFunction) {
    this._name = data.name;
    this._link = data.link;
    this._element = document.querySelector(templateSelector).content;

    this._previewPopup = openPopupFunction;
  }

  _toggleLike(targetBtn) {
    targetBtn.target.classList.toggle('photo__like-btn_active');
  }

  _deleteCard(targetBtn) {
    const card = targetBtn.target.closest('.photo__card');
    card.remove();
  }

  _setEventListeners(card, image) {
    card.querySelector('.photo__delete-btn').addEventListener('click', (evt) => this._deleteCard(evt));
    card.querySelector('.photo__like-btn').addEventListener('click', (evt) => this._toggleLike(evt));
    image.addEventListener('click', () => this._previewPopup(this._name, this._link));
  }

  createCard() {
    const card = this._element.querySelector('.photo__card').cloneNode(true);
    const image = card.querySelector('.photo__image');
    const name = card.querySelector('.photo__name');
    image.src = this._link;
    image.alt = this._name;
    name.textContent = this._name;
    this._setEventListeners(card, image);
    return card;
  }
}
