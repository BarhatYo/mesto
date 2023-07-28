export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(item, place) {
    if (place === "prepend") {
      this._container.prepend(item);  
    } else this._container.append(item);
  }

  _clear() {
    this._container.innerHTML = '';
  }

  renderElements() {
    this._clear();

    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}