export default class LocalStore {
  constructor(key, storage) {
    this._key = key;
    this._storage = storage;
  }

  init() {
    if (this._storage.getItem(this._key)) {
      return;
    }
    this._storage.setItem(this._key, JSON.stringify([]));
  }

  setItems(value) {
    this._storage.setItem(this._key, JSON.stringify(value));
  }

  getItems() {
   return this._storage.getItem(this._key);
  }
}