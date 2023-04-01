export default class Section {
  constructor({ items, renderer }, templateSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(templateSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  rendererItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
