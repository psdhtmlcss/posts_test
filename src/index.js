import './style.css';
import AddPostPresenter from './presenter/addPost';
import store from './store/store';
import LocalStore from './store/localStore';
import { LOAD_DATA } from './store/actions';

console.log('store start', store.getState());

const POSTS_KEY = 'posts';

// store.dispatch({ type: LOAD_DATA, payload: data });

// store.getState().promo.forEach((item) => {
//   render(promoPosts, Post(item), RenderPosition.BEFOREEND);
// })

// store.getState().last.forEach((item) => {
//   render(lastPosts, Post(item), RenderPosition.BEFOREEND);
// })

// store.getState().popular.forEach((item) => {
//   render(popularPosts, Post(item), RenderPosition.BEFOREEND);
// })
// window.localStorage.clear();
const postsStore = new LocalStore(POSTS_KEY, window.localStorage);
postsStore.init();
store.dispatch({ type: LOAD_DATA, payload: JSON.parse(postsStore.getItems()) });
console.log('store after load data', store.getState());

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const addNewPostButton = header.querySelector('.add-new-post');
const form = document.querySelector('form');
const modal = document.querySelector('.modal');

const addPostPresenter = new AddPostPresenter(modal, form, store, postsStore);

const onAddNewPostClick = (evt) => {
  evt.preventDefault();
  addPostPresenter.modalOpen();
}

addNewPostButton.addEventListener('click', onAddNewPostClick);


