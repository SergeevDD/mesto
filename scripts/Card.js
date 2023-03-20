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

  createCard() {
    const card = this._element.querySelector('.photo__card').cloneNode(true);
    const image = card.querySelector('.photo__image');
    image.src = this._link;
    card.querySelector('.photo__name').textContent = this._name;
    card.querySelector('.photo__delete-btn').addEventListener('click', (evt) => this._deleteCard(evt));
    card.querySelector('.photo__like-btn').addEventListener('click', (evt) => this._toggleLike(evt));
    image.addEventListener('click', () => this._previewPopup(this._name, this._link));
    return card;
  }
}
