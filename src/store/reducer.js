import { LOAD_DATA, ADD_NEW_POST, TOGGLE_SCREEN_MODE } from './actions';

const PROMO_COUNT = 3;
const LAST_POST_COUNT = 7;
const POPULAR_POST_COUNT = 4;

const sortLastPosts = (posts) => {
  const sPosts = posts.slice();
  return sPosts.sort((a, b) => b.createDate - a.createDate);
};

const sortPopularPost = (posts) => {
  const sPosts = posts.slice();
  return sPosts.sort((a, b) => b.views - a.views);
}

const sortData = (state, data) => {
  state.promo = data.filter((item) => item.promo === true).slice(0, PROMO_COUNT);
  state.last = sortLastPosts(data).slice(0, LAST_POST_COUNT);
  state.popular = sortPopularPost(data).slice(0, POPULAR_POST_COUNT);
  return state;
};

export const updateStore = (state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      state.posts = action.payload.slice();
      sortData(state, state.posts);
      return state;
      
    case ADD_NEW_POST:
      state.posts.push(action.payload);
      sortData(state, state.posts);
      return state;
    case TOGGLE_SCREEN_MODE:
      state.screenMode = action.payload;
      return state;
    default:
      return state;
  }
};