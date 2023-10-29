import { TOGGLE_SCREEN_MODE } from '../store/actions';
import PromoView from '../view/promo';
import LastView from '../view/last';
import PopularView from '../view/popular';
import PostView from '../view/post';
import LoaderView from '../view/loader';
import PostDescriptionPresenter from './postDescription';
import { ScreenMode } from '../const';

const NO_DATA = 'Нет данных';
export default class Posts {
  constructor(nav, main, store) {
    this._nav = nav;
    this._main = main;
    this._store = store;
    this._postDescriptionPresenter = new PostDescriptionPresenter();
    this._loader = new LoaderView().renderLoaderTemplate();

    this._onPostClick = this._onPostClick.bind(this);
    this._onNavClick = this._onNavClick.bind(this);
  }

  init() {
    console.log(this._store.getState());
    this._nav.addEventListener('click', this._onNavClick);
    if (!this._store.getState().posts.length) {
      this._main.insertAdjacentHTML('beforeend', `<div style="text-align: center; margin: 60px 0; color: #777;">${NO_DATA}</div>`);
      return;
    }
    this._renderPromo();
    this._renderLast();
    this._renderPopular();
    
  }

  updateMainScreen() {
    this._clearMain();
    this._renderPromo();
    this._renderLast();
    this._renderPopular();
  }

  _renderPromo() {
    if (!this._store.getState().promo.length) {
      return;
    }

    const promo = new PromoView().createPromoTemplate(); 
    this._main.insertAdjacentHTML('beforeend', promo);

    this._store.getState().promo.forEach((item) => {
      const post = new PostView(item).createPostTemplate();
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
    this.updateMainScreen();
    this._store.dispatch({ type: TOGGLE_SCREEN_MODE, payload: ScreenMode.MAIN });
  }

  _onPostClick(evt) {
    if (!evt.target.classList.contains('article')) {
      return;
    }
    this._clearMain();
    this._renderLoader();
    new Promise(resolve => {
      setTimeout(() => resolve(), 1000)
    })
      .then(() => {
        const postId = evt.target.dataset.postId;
        const post = this._store.getState().posts.find((item) => item.id === Number(postId));
        this._postDescriptionPresenter.renderDescription(post, this._main);
        if (this._store.getState().screenMode !== ScreenMode.EDIT) {
          this._store.dispatch({ type: TOGGLE_SCREEN_MODE, payload: ScreenMode.EDIT });
        }
        this._renderPopular();
      })
      .finally(() => {this._removeLoader()})
  }
}