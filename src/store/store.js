import { updateStore } from './reducer';

const initialState = {
  posts: [],
  promo: [],
  last: [],
  popular: []
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