import PostDescriptionView from '../view/postDescription';
import { DELETE_POST } from '../store/actions';
import { ModalType } from '../const';

export default class PostDescription {
  constructor(store, postsStore) {
    this._store = store;
    this._postsStore = postsStore;
    this._element = null;
    this._post = null;
    this._wrapper = null;
    this._deletePostHandler = null;
    this._openModalHandler = null;

    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  renderDescription(wrapper) {
    const postId = this._store.getState().currentPostId;
    this._post = this._store.getState().posts.find((item) => item.id === Number(postId));
    this._element = new PostDescriptionView(this._post).createPostDescriptionTemplate();
    this._wrapper = wrapper;
    this._wrapper.insertAdjacentHTML('beforeend', this._element);
    
  }

  setDescriptionPostHandlers(deletePostHandler, addPostPresenter) {
    this._deletePostHandler = deletePostHandler;
    this._openModalHandler = addPostPresenter;
    const deleteButton = this._wrapper.querySelector('.delete-post');
    const editButton = this._wrapper.querySelector('.edit-post');
    deleteButton.addEventListener('click', this._onDeleteButtonClick);
    editButton.addEventListener('click', this._onEditButtonClick);
  }

  _onDeleteButtonClick(evt) {
    evt.preventDefault();
    this._store.dispatch({ type: DELETE_POST, payload: this._post.id });
    this._postsStore.setItems(this._store.getState().posts);
    this._deletePostHandler();
  }

  _onEditButtonClick(evt) {
    evt.preventDefault();
    this._openModalHandler.modalOpen(ModalType.EDIT_POST, this._post);
  }
}