import PostDescriptionView from '../view/postDescription';

export default class PostDescription {
  constructor() {
    this._element = null;
  }

  renderDescription(post, wrapper) {
    if (this._element !== null) {
      this._element = null;
    }

    this._element = new PostDescriptionView(post).createPostDescriptionTemplate();
    wrapper.insertAdjacentHTML('beforeend', this._element);
  }
}