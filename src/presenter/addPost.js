import { ADD_NEW_POST } from '../store/actions';

export default class AddPost {
  constructor(modal, form, store, postsStore) {
    this._modal = modal;
    this._form = form;
    this._store = store;
    this._postsStore = postsStore;
    this._formHeading = this._form.querySelector('.form-heading');
    this._formLink = this._form.querySelector('.form-link');
    this._formDescription = this._form.querySelector('.form-description');
    this._formPromo = this._form.querySelector('.form-promo');
    this._body = document.querySelector('body');
    this._backdrop = document.querySelector('.backdrop');
    this._closeModalButton = this._form.querySelector('.close-modal');

    this._onBackdropClick = this._onBackdropClick.bind(this);
    this._onCloseModalButtonClick = this._onCloseModalButtonClick.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
  }

  modalOpen() {
    this._modal.classList.add('open');
    this._body.classList.add('modal-open');
    this._backdrop.classList.add('show');
    this._backdrop.addEventListener('click', this._onBackdropClick);
    this._form.addEventListener('submit', this._onFormSubmit);
    this._closeModalButton.addEventListener('click', this._onCloseModalButtonClick);
  }

  modalClose() {
    this._form.reset();
    this._modal.classList.remove('open');
    this._body.classList.remove('modal-open');
    this._backdrop.classList.remove('show');
    this._backdrop.removeEventListener('click', this._onBackdropClick);
    this._form.removeEventListener('submit', this._onFormSubmit);
    this._closeModalButton.removeEventListener('click', this._onCloseModalButtonClick);
  }

  _onCloseModalButtonClick() {
    this.modalClose();
  }

  _onBackdropClick() {
    this.modalClose();
  }

  _onFormSubmit(evt) {
    evt.preventDefault();
    const newPostData = {
      id: Date.now(),
      createDate: Date.now(),
      heading: this._formHeading.value,
      link: this._formLink.value,
      description: this._formDescription.value,
      promo: this._formPromo.checked,
      views: 0,
    }
    this._store.dispatch({ type: ADD_NEW_POST, payload: newPostData });
    console.log('im here', this._store.getState().posts);
    this._postsStore.setItems(this._store.getState().posts);
    console.log('after add post', this._store.getState());
    this.modalClose();
  }

}