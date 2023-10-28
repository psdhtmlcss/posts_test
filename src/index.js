import './style.css';
import AddPostPresenter from './presenter/addPost';
import PostsPresenter from './presenter/posts';
import store from './store/store';
import LocalStore from './store/localStore';
import { LOAD_DATA } from './store/actions';

console.log('store start', store.getState());

const POSTS_KEY = 'posts';

// window.localStorage.clear();
const postsStore = new LocalStore(POSTS_KEY, window.localStorage);
postsStore.init();
store.dispatch({ type: LOAD_DATA, payload: JSON.parse(postsStore.getItems()) });
console.log('store after load data', store.getState());

const header = document.querySelector('.header');
const nav = header.querySelector('.nav');
const main = document.querySelector('.main');
const addNewPostButton = header.querySelector('.add-new-post');
const form = document.querySelector('form');
const modal = document.querySelector('.modal');

const postsPresenter = new PostsPresenter(nav, main, store);
const handleNewPostClick = () => {
  postsPresenter.updateMainScreen();
};
const addPostPresenter = new AddPostPresenter(modal, form, store, postsStore, handleNewPostClick);

postsPresenter.init();

const onAddNewPostClick = (evt) => {
  evt.preventDefault();
  addPostPresenter.modalOpen();
}

addNewPostButton.addEventListener('click', onAddNewPostClick);


