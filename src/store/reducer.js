import { LOAD_DATA, ADD_NEW_POST } from './actions';

const PROMO_COUNT = 3;
const LAST_POST_COUNT = 7;
const POPULAR_POST_COUNT = 4;

const sortLastPosts = (posts) => {
  const sPosts = posts.slice();
  return sPosts.sort((a, b) => a.dateCreate = b.dateCreate);
};

const sortPopularPost = (posts) => {
  const sPosts = posts.slice();
  return sPosts.sort((a, b) => a.views = b.views);
}

export const updateStore = (state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      state.posts = action.payload.slice();
      return state;
      // state.promo = state.posts.filter((item) => item.promo === true).slice(0, PROMO_COUNT);
      // state.last = sortLastPosts(state.posts).slice(0, LAST_POST_COUNT);
      // state.popular = sortPopularPost(state.posts).slice(0, POPULAR_POST_COUNT);
    case ADD_NEW_POST:
      state.posts.push(action.payload);
      return state;
    default:
      return state;
  }
};