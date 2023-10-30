import { updateStore } from './reducer';
import { ScreenMode } from '../const';

const initialState = {
  posts: [],
  promo: [],
  last: [],
  popular: [],
  screenMode: ScreenMode.MAIN,
  currentPostId: null
};

const createStore = (reducer, initialState) => {
  return {
    _state: initialState,

    dispatch(action) {
      this._state = reducer(this._state, action);
    },

    getState() {
      return this._state;
    },
  };
};

const store = createStore(updateStore, initialState);

export default store;