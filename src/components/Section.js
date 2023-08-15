export default class Section {
  constructor({ renderer }, containerSelector) {
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

  renderElements(cards) {
    this._clear();
    cards.forEach(card => {
      this._renderer(card);
    });
  }
}