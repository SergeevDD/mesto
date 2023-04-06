export default class Section {
  constructor({ items, renderer }, templateSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(templateSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  rendererItems() {
    this._renderedItems.forEach(item => {
      this._container.append(this._renderer(item));
    });
  }
}
