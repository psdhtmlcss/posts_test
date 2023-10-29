import PostDescriptionView from '../view/postDescription';
import { DELETE_POST } from '../store/actions';

export default class PostDescription {
  constructor(store, postsStore) {
    this._store = store;
    this._postsStore = postsStore;
    this._element = null;
    this._post = null;
    this._wrapper = null;
    this._callback = null;

    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
  }

  renderDescription(post, wrapper) {
    this._element = new PostDescriptionView(post).createPostDescriptionTemplate();
    this._post = post;
    this._wrapper = wrapper;
    this._wrapper.insertAdjacentHTML('beforeend', this._element);
    
  }

  setDeletePostHandler(callback) {
    this._callback = callback;
    const deleteButton = this._wrapper.querySelector('.delete-post');
    deleteButton.addEventListener('click', this._onDeleteButtonClick);
  }

  _onDeleteButtonClick(evt) {
    evt.preventDefault();
    this._store.dispatch({ type: DELETE_POST, payload: this._post.id });
    this._postsStore.setItems(this._store.getState().posts);
    this._callback();
  }
}