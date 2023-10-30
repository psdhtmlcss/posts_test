import { ScreenMode, ModalType } from '../const';
import { ADD_NEW_POST, TOGGLE_SCREEN_MODE, EDIT_POST } from '../store/actions';
import { getRandomInteger } from '../utils/utils';
import ModalView from '../view/modal';

export default class AddPost {
  constructor(store, postsStore, handleNewPostClick, handleEditPostClick) {
    this._store = store;
    this._postsStore = postsStore;
    this._handleNewPostClick = handleNewPostClick;
    this._handleEditPostClick = handleEditPostClick;
    this._modal = null;
    this._modalHeading = null;
    this._form = null;
    this._formHeading = null;
    this._formLink = null;
    this._formDescription = null;
    this._formPromo = null;
    this._body = null;
    this._backdrop = null;
    this._closeModalButton = null;
    this._addPostButton = null;
    this._post = null;

    this._onBackdropClick = this._onBackdropClick.bind(this);
    this._onCloseModalButtonClick = this._onCloseModalButtonClick.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
  }

  init() {
    const modal = new ModalView().createModalTemplate();
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    this._body = document.querySelector('body');
    this._body.insertAdjacentHTML('beforeend', modal);
    this._body.append(backdrop);
    this._modal = this._body.querySelector('.modal');
    this._modalHeading = this._modal.querySelector('h2');
    this._form = this._modal.querySelector('form');
    this._formHeading = this._form.querySelector('.form-heading');
    this._formLink = this._form.querySelector('.form-link');
    this._formDescription = this._form.querySelector('.form-description');
    this._formPromo = this._form.querySelector('.form-promo');
    this._backdrop = this._body.querySelector('.backdrop');
    this._closeModalButton = this._form.querySelector('.close-modal');
    this._addPostButton = this._form.querySelector('.add-post');
  }

  modalOpen(type = ModalType.NEW_POST, post) {
    if (type === ModalType.EDIT_POST) {
      this._post = post;
      this._createEditModal(this._post);
    }
    this._modal.classList.add('open');
    this._body.classList.add('modal-open');
    this._backdrop.classList.add('show');
    this._backdrop.addEventListener('click', this._onBackdropClick);
    this._form.addEventListener('submit', this._onFormSubmit);
    this._closeModalButton.addEventListener('click', this._onCloseModalButtonClick);
  }

  modalClose() {
    this._form.reset();
    this._resetModalContent();
    this._modal.classList.remove('open');
    this._body.classList.remove('modal-open');
    this._backdrop.classList.remove('show');
    this._backdrop.removeEventListener('click', this._onBackdropClick);
    this._form.removeEventListener('submit', this._onFormSubmit);
    this._closeModalButton.removeEventListener('click', this._onCloseModalButtonClick);
  }

  _createEditModal(post) {
    this._modal.classList.add('edit-post-modal');
    this._modalHeading.textContent = 'Редактировать пост';
    this._addPostButton.textContent = 'Сохранить';
    this._formHeading.value = post.heading;
    this._formLink.value = post.link;
    this._formDescription.value = post.description;
    this._formPromo.checked = post.promo;
  }

  _resetModalContent() {
    this._post = null;
    this._modal.classList.remove('edit-post-modal');
    this._modalHeading.textContent = 'Создать пост';
    this._addPostButton.textContent = 'Добавить';
  }

  _onCloseModalButtonClick() {
    this.modalClose();
  }

  _onBackdropClick() {
    this.modalClose();
  }

  _onFormSubmit(evt) {
    evt.preventDefault();
    const isEditForm = this._modal.classList.contains('edit-post-modal');
    const newPostData = {
      id: isEditForm ? this._post.id : Date.now(),
      createDate: isEditForm ? this._post.createDate : Date.now(),
      heading: this._formHeading.value,
      link: this._formLink.value,
      description: this._formDescription.value,
      promo: this._formPromo.checked,
      views: isEditForm ? this._post.views : getRandomInteger(0, 5000),
    }
    if (isEditForm) {
      this._store.dispatch({ type: EDIT_POST, payload: newPostData });
      this._postsStore.setItems(this._store.getState().posts);
      this.modalClose();
      this._handleEditPostClick();
    } else {
      this._store.dispatch({ type: ADD_NEW_POST, payload: newPostData });
      if (this._store.getState().screenMode !== ScreenMode.MAIN) {
        this._store.dispatch({ type: TOGGLE_SCREEN_MODE, payload: ScreenMode.MAIN });
      }
      this._postsStore.setItems(this._store.getState().posts);
      this.modalClose();
      this._handleNewPostClick();
    }
  }

}