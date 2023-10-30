import { SET_CURRENT_POST_ID, TOGGLE_SCREEN_MODE } from '../store/actions';
import PromoView from '../view/promo';
import LastView from '../view/last';
import PopularView from '../view/popular';
import PostView from '../view/post';
import LoaderView from '../view/loader';
import PostDescriptionPresenter from './postDescription';
import AddPostPresenter from './addPost';
import { ScreenMode } from '../const';

const NO_DATA = 'Нет данных';
export default class Posts {
  constructor(nav, addNewPostButton, main, store, postsStore) {
    this._nav = nav;
    this._addNewPostButton = addNewPostButton;
    this._main = main;
    this._store = store;
    this._postsStore = postsStore;
    this._postDescriptionPresenter = new PostDescriptionPresenter(this._store, this._postsStore);
    this._addPostPresenter = null;
    this._loader = new LoaderView().renderLoaderTemplate();

    this._updateMainScreen = this._updateMainScreen.bind(this);
    this._updateEditScreen = this._updateEditScreen.bind(this);
    this._onPostClick = this._onPostClick.bind(this);
    this._onNavClick = this._onNavClick.bind(this);
    this._onAddNewPostButtonClick = this._onAddNewPostButtonClick.bind(this);
  }

  init() {
    this._addPostPresenter = new AddPostPresenter(this._store, this._postsStore, this._updateMainScreen, this._updateEditScreen);
    this._addPostPresenter.init();
    this._nav.addEventListener('click', this._onNavClick);
    this._addNewPostButton.addEventListener('click', this._onAddNewPostButtonClick);
    if (!this._store.getState().posts.length) {
      this._renderMessage();
      return;
    }
    this._renderPromo();
    this._renderLast();
    this._renderPopular();
    
  }

  _updateMainScreen() {
    this._store.dispatch({ type: TOGGLE_SCREEN_MODE, payload: ScreenMode.MAIN });
    this._store.dispatch({ type: SET_CURRENT_POST_ID, payload: null });
    this._clearMain();
    if (!this._store.getState().posts.length) {
      this._renderMessage();
      return;
    }
    this._renderPromo();
    this._renderLast();
    this._renderPopular();
  }

  _updateEditScreen() {
    this._clearMain();
    this._postDescriptionPresenter.renderDescription(this._main);
    this._postDescriptionPresenter.setDescriptionPostHandlers(this._updateMainScreen, this._addPostPresenter);
    this._renderPopular();
  }

  _renderMessage() {
    this._main.insertAdjacentHTML('beforeend', `<div style="text-align: center; margin: 60px 0; color: #777;">${NO_DATA}</div>`);
  }

  _renderPromo() {
    if (!this._store.getState().promo.length) {
      return;
    }

    let promo = new PromoView().createPromoTemplate();
    this._main.insertAdjacentHTML('beforeend', promo);

    this._store.getState().promo.forEach((item) => {
      let post = new PostView(item).createPostTemplate();
      const promoWrapper = this._main.querySelector('#promoPosts');
      promoWrapper.insertAdjacentHTML('beforeend', post);
      promoWrapper.addEventListener('click', this._onPostClick);
    })
  }

  _renderLast() {
    if (!this._store.getState().last.length) {
      return;
    }
    const last = new LastView().createLastTemplate(); 
    this._main.insertAdjacentHTML('beforeend', last);

    this._store.getState().last.forEach((item) => {
      const post = new PostView(item).createPostTemplate();
      const lastWrapper = this._main.querySelector('#lastPosts');
      lastWrapper.insertAdjacentHTML('beforeend', post);
      lastWrapper.addEventListener('click', this._onPostClick);
    })
  }

  _renderPopular() {
    if (!this._store.getState().popular.length) {
      return;
    }
    const popular = new PopularView().createPopularTemplate(); 
    this._main.insertAdjacentHTML('beforeend', popular);

    this._store.getState().popular.forEach((item) => {
      const post = new PostView(item).createPostTemplate();
      const popularWrapper = this._main.querySelector('#popularPosts');
      popularWrapper.insertAdjacentHTML('beforeend', post);
      popularWrapper.addEventListener('click', this._onPostClick);
    })
  }

  _renderLoader() {
    this._main.insertAdjacentHTML('beforeend', this._loader);
  }

  _removeLoader() {
    this._main.querySelector('.loader').remove();
  }

  _clearMain() {
    this._main.innerHTML = '';
  }

  _onNavClick(evt) {
    evt.preventDefault();
    if (this._store.getState().screenMode === ScreenMode.MAIN) {
      return;
    }
    this._updateMainScreen();
  }

  _onPostClick(evt) {
    if (!evt.target.classList.contains('article')) {
      return;
    }
    this._clearMain();
    this._renderLoader();
    let promise = new Promise(resolve => {
      setTimeout(() => resolve(), 1)
    });
    promise.then(() => {
      const postId = evt.target.dataset.postId;
      this._store.dispatch({ type: SET_CURRENT_POST_ID, payload: postId });
      this._postDescriptionPresenter.renderDescription(this._main);
      this._postDescriptionPresenter.setDescriptionPostHandlers(this._updateMainScreen, this._addPostPresenter);
      if (this._store.getState().screenMode !== ScreenMode.EDIT) {
        this._store.dispatch({ type: TOGGLE_SCREEN_MODE, payload: ScreenMode.EDIT });
      }
      this._renderPopular();
    })
    .finally(() => {this._removeLoader()})
  }

  _onAddNewPostButtonClick(evt) {
    evt.preventDefault();
    this._addPostPresenter.modalOpen();
  }
}