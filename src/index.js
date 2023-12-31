import './style.css';
import PostsPresenter from './presenter/posts';
import store from './store/store';
import LocalStore from './store/localStore';
import { LOAD_DATA } from './store/actions';
import { showDateFormat } from './utils/utils';

const POSTS_KEY = 'posts';

const postsStore = new LocalStore(POSTS_KEY, window.localStorage);
postsStore.init();
store.dispatch({ type: LOAD_DATA, payload: JSON.parse(postsStore.getItems()) });

const header = document.querySelector('.header');
const nav = header.querySelector('.nav');
const time = header.querySelector('.time');
const main = document.querySelector('.main');
const addNewPostButton = header.querySelector('.add-new-post');

const showHeaderTime = showDateFormat(time);
setInterval(showHeaderTime, 1000);

const postsPresenter = new PostsPresenter(nav, addNewPostButton, main, store, postsStore);
postsPresenter.init();

