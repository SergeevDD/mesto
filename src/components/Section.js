export default class Section {
  constructor(renderer, templateSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(templateSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  rendererItems(items) {
    items.forEach(item => {
      this._container.append(this._renderer(item));
    });
  }

  clearField() {
    while(this._container.firstChild) {
      this._container.firstChild.remove();
    }
  }
}
