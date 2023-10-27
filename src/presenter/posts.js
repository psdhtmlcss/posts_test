const NO_DATA = 'Нет данных';

export default class Posts {
  constructor(promo, last, popular, store) {
    this._promo = promo;
    this._last = last;
    this._popular = popular;
    this._store = store;
  }

  init() {
    if (!this._store.posts.length) {
      this._promo.textContent = NO_DATA;
      this._last.textContent = NO_DATA;
      this._popular.textContent = NO_DATA;
      return;
    }

    this._renderPromo();
    this._renderLast();
    this._renderPopular();
  }

  _renderPromo() {
    if (!this._store.promo.length) {
      this._promo.textContent = NO_DATA;
      return;
    }

  }
}