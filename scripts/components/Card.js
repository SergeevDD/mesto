export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.placeName;
    this._link = data.placeLink;
    this._handleCardClick = handleCardClick
    this._element = document.querySelector(templateSelector).content;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('photo__like-btn_active');
  }

  _deleteCard(evt) {
    const card = evt.target.closest('.photo__card');
    card.remove();
  }

  _setEventListeners() {
    this._card.querySelector('.photo__delete-btn').addEventListener('click', this._deleteCard);
    this._card.querySelector('.photo__like-btn').addEventListener('click', this._toggleLike);
    this._image.addEventListener('click', () => this._handleCardClick({ image: this._link, description: this._name }));
  }

  createCard() {
    this._card = this._element.querySelector('.photo__card').cloneNode(true);
    this._image = this._card.querySelector('.photo__image');
    const name = this._card.querySelector('.photo__name');
    this._image.src = this._link;
    this._image.alt = this._name;
    name.textContent = this._name;
    this._setEventListeners();
    return this._card;
  }

}
