/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalType: () => (/* binding */ ModalType),
/* harmony export */   ScreenMode: () => (/* binding */ ScreenMode)
/* harmony export */ });
var ScreenMode = {
  MAIN: 'main',
  EDIT: 'edit'
};
var ModalType = {
  NEW_POST: 'new-post',
  EDIT_POST: 'edit-post'
};

/***/ }),

/***/ "./src/presenter/addPost.js":
/*!**********************************!*\
  !*** ./src/presenter/addPost.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPost)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _view_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/modal */ "./src/view/modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var AddPost = /*#__PURE__*/function () {
  function AddPost(store, postsStore, handleNewPostClick, handleEditPostClick) {
    _classCallCheck(this, AddPost);
    this._store = store;
    this._postsStore = postsStore;
    this._handleNewPostClick = handleNewPostClick;
    this._handleEditPostClick = handleEditPostClick;
    this._modal = null;
    this._modalHeading = null;
    this._form = null;
    this._formHeading = null;
    this._formLink = null;
    this._formDescription = null;
    this._formPromo = null;
    this._body = null;
    this._backdrop = null;
    this._closeModalButton = null;
    this._addPostButton = null;
    this._post = null;
    this._onBackdropClick = this._onBackdropClick.bind(this);
    this._onCloseModalButtonClick = this._onCloseModalButtonClick.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
  }
  _createClass(AddPost, [{
    key: "init",
    value: function init() {
      var modal = new _view_modal__WEBPACK_IMPORTED_MODULE_3__["default"]().createModalTemplate();
      var backdrop = document.createElement('div');
      backdrop.classList.add('backdrop');
      this._body = document.querySelector('body');
      this._body.insertAdjacentHTML('beforeend', modal);
      this._body.append(backdrop);
      this._modal = this._body.querySelector('.modal');
      this._modalHeading = this._modal.querySelector('h2');
      this._form = this._modal.querySelector('form');
      this._formHeading = this._form.querySelector('.form-heading');
      this._formLink = this._form.querySelector('.form-link');
      this._formDescription = this._form.querySelector('.form-description');
      this._formPromo = this._form.querySelector('.form-promo');
      this._backdrop = this._body.querySelector('.backdrop');
      this._closeModalButton = this._form.querySelector('.close-modal');
      this._addPostButton = this._form.querySelector('.add-post');
    }
  }, {
    key: "modalOpen",
    value: function modalOpen() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const__WEBPACK_IMPORTED_MODULE_0__.ModalType.NEW_POST;
      var post = arguments.length > 1 ? arguments[1] : undefined;
      if (type === _const__WEBPACK_IMPORTED_MODULE_0__.ModalType.EDIT_POST) {
        this._post = post;
        this._createEditModal(this._post);
      }
      this._modal.classList.add('open');
      this._body.classList.add('modal-open');
      this._backdrop.classList.add('show');
      this._backdrop.addEventListener('click', this._onBackdropClick);
      this._form.addEventListener('submit', this._onFormSubmit);
      this._closeModalButton.addEventListener('click', this._onCloseModalButtonClick);
    }
  }, {
    key: "modalClose",
    value: function modalClose() {
      this._form.reset();
      this._resetModalContent();
      this._modal.classList.remove('open');
      this._body.classList.remove('modal-open');
      this._backdrop.classList.remove('show');
      this._backdrop.removeEventListener('click', this._onBackdropClick);
      this._form.removeEventListener('submit', this._onFormSubmit);
      this._closeModalButton.removeEventListener('click', this._onCloseModalButtonClick);
    }
  }, {
    key: "_createEditModal",
    value: function _createEditModal(post) {
      this._modal.classList.add('edit-post-modal');
      this._modalHeading.textContent = 'Редактировать пост';
      this._addPostButton.textContent = 'Сохранить';
      this._formHeading.value = post.heading;
      this._formLink.value = post.link;
      this._formDescription.value = post.description;
      this._formPromo.checked = post.promo;
    }
  }, {
    key: "_resetModalContent",
    value: function _resetModalContent() {
      this._post = null;
      this._modal.classList.remove('edit-post-modal');
      this._modalHeading.textContent = 'Создать пост';
      this._addPostButton.textContent = 'Добавить';
    }
  }, {
    key: "_onCloseModalButtonClick",
    value: function _onCloseModalButtonClick() {
      this.modalClose();
    }
  }, {
    key: "_onBackdropClick",
    value: function _onBackdropClick() {
      this.modalClose();
    }
  }, {
    key: "_onFormSubmit",
    value: function _onFormSubmit(evt) {
      evt.preventDefault();
      var isEditForm = this._modal.classList.contains('edit-post-modal');
      var newPostData = {
        id: isEditForm ? this._post.id : Date.now(),
        createDate: isEditForm ? this._post.createDate : Date.now(),
        heading: this._formHeading.value,
        link: this._formLink.value,
        description: this._formDescription.value,
        promo: this._formPromo.checked,
        views: isEditForm ? this._post.views : (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomInteger)(0, 5000)
      };
      if (isEditForm) {
        this._store.dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_1__.EDIT_POST,
          payload: newPostData
        });
        this._postsStore.setItems(this._store.getState().posts);
        this.modalClose();
        this._handleEditPostClick();
      } else {
        this._store.dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_NEW_POST,
          payload: newPostData
        });
        if (this._store.getState().screenMode !== _const__WEBPACK_IMPORTED_MODULE_0__.ScreenMode.MAIN) {
          this._store.dispatch({
            type: _store_actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_SCREEN_MODE,
            payload: _const__WEBPACK_IMPORTED_MODULE_0__.ScreenMode.MAIN
          });
        }
        this._postsStore.setItems(this._store.getState().posts);
        this.modalClose();
        this._handleNewPostClick();
      }
    }
  }]);
  return AddPost;
}();


/***/ }),

/***/ "./src/presenter/postDescription.js":
/*!******************************************!*\
  !*** ./src/presenter/postDescription.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostDescription)
/* harmony export */ });
/* harmony import */ var _view_postDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/postDescription */ "./src/view/postDescription.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var PostDescription = /*#__PURE__*/function () {
  function PostDescription(store, postsStore) {
    _classCallCheck(this, PostDescription);
    this._store = store;
    this._postsStore = postsStore;
    this._element = null;
    this._post = null;
    this._wrapper = null;
    this._deletePostHandler = null;
    this._openModalHandler = null;
    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }
  _createClass(PostDescription, [{
    key: "renderDescription",
    value: function renderDescription(wrapper) {
      var postId = this._store.getState().currentPostId;
      this._post = this._store.getState().posts.find(function (item) {
        return item.id === Number(postId);
      });
      this._element = new _view_postDescription__WEBPACK_IMPORTED_MODULE_0__["default"](this._post).createPostDescriptionTemplate();
      this._wrapper = wrapper;
      this._wrapper.insertAdjacentHTML('beforeend', this._element);
    }
  }, {
    key: "setDescriptionPostHandlers",
    value: function setDescriptionPostHandlers(deletePostHandler, addPostPresenter) {
      this._deletePostHandler = deletePostHandler;
      this._openModalHandler = addPostPresenter;
      var deleteButton = this._wrapper.querySelector('.delete-post');
      var editButton = this._wrapper.querySelector('.edit-post');
      deleteButton.addEventListener('click', this._onDeleteButtonClick);
      editButton.addEventListener('click', this._onEditButtonClick);
    }
  }, {
    key: "_onDeleteButtonClick",
    value: function _onDeleteButtonClick(evt) {
      evt.preventDefault();
      this._store.dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_1__.DELETE_POST,
        payload: this._post.id
      });
      this._postsStore.setItems(this._store.getState().posts);
      this._deletePostHandler();
    }
  }, {
    key: "_onEditButtonClick",
    value: function _onEditButtonClick(evt) {
      evt.preventDefault();
      this._openModalHandler.modalOpen(_const__WEBPACK_IMPORTED_MODULE_2__.ModalType.EDIT_POST, this._post);
    }
  }]);
  return PostDescription;
}();


/***/ }),

/***/ "./src/presenter/posts.js":
/*!********************************!*\
  !*** ./src/presenter/posts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Posts)
/* harmony export */ });
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions.js");
/* harmony import */ var _view_promo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/promo */ "./src/view/promo.js");
/* harmony import */ var _view_last__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/last */ "./src/view/last.js");
/* harmony import */ var _view_popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/popular */ "./src/view/popular.js");
/* harmony import */ var _view_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/post */ "./src/view/post.js");
/* harmony import */ var _view_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/loader */ "./src/view/loader.js");
/* harmony import */ var _postDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postDescription */ "./src/presenter/postDescription.js");
/* harmony import */ var _addPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addPost */ "./src/presenter/addPost.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../const */ "./src/const.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









var NO_DATA = 'Нет данных';
var Posts = /*#__PURE__*/function () {
  function Posts(nav, addNewPostButton, main, store, postsStore) {
    _classCallCheck(this, Posts);
    this._nav = nav;
    this._addNewPostButton = addNewPostButton;
    this._main = main;
    this._store = store;
    this._postsStore = postsStore;
    this._postDescriptionPresenter = new _postDescription__WEBPACK_IMPORTED_MODULE_6__["default"](this._store, this._postsStore);
    this._addPostPresenter = null;
    this._loader = new _view_loader__WEBPACK_IMPORTED_MODULE_5__["default"]().renderLoaderTemplate();
    this.updateMainScreen = this.updateMainScreen.bind(this);
    this.updateEditScreen = this.updateEditScreen.bind(this);
    this._onPostClick = this._onPostClick.bind(this);
    this._onNavClick = this._onNavClick.bind(this);
    this._onAddNewPostButtonClick = this._onAddNewPostButtonClick.bind(this);
  }
  _createClass(Posts, [{
    key: "init",
    value: function init() {
      this._addPostPresenter = new _addPost__WEBPACK_IMPORTED_MODULE_7__["default"](this._store, this._postsStore, this.updateMainScreen, this.updateEditScreen);
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
  }, {
    key: "updateMainScreen",
    value: function updateMainScreen() {
      this._store.dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_SCREEN_MODE,
        payload: _const__WEBPACK_IMPORTED_MODULE_8__.ScreenMode.MAIN
      });
      this._store.dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_POST_ID,
        payload: null
      });
      this._clearMain();
      if (!this._store.getState().posts.length) {
        this._renderMessage();
        return;
      }
      this._renderPromo();
      this._renderLast();
      this._renderPopular();
    }
  }, {
    key: "updateEditScreen",
    value: function updateEditScreen() {
      this._clearMain();
      this._postDescriptionPresenter.renderDescription(this._main);
      this._postDescriptionPresenter.setDescriptionPostHandlers(this.updateMainScreen, this._addPostPresenter);
      this._renderPopular();
    }
  }, {
    key: "_renderMessage",
    value: function _renderMessage() {
      this._main.insertAdjacentHTML('beforeend', "<div style=\"text-align: center; margin: 60px 0; color: #777;\">".concat(NO_DATA, "</div>"));
    }
  }, {
    key: "_renderPromo",
    value: function _renderPromo() {
      var _this = this;
      if (!this._store.getState().promo.length) {
        return;
      }
      var promo = new _view_promo__WEBPACK_IMPORTED_MODULE_1__["default"]().createPromoTemplate();
      this._main.insertAdjacentHTML('beforeend', promo);
      this._store.getState().promo.forEach(function (item) {
        var post = new _view_post__WEBPACK_IMPORTED_MODULE_4__["default"](item).createPostTemplate();
        var promoWrapper = _this._main.querySelector('#promoPosts');
        promoWrapper.insertAdjacentHTML('beforeend', post);
        promoWrapper.addEventListener('click', _this._onPostClick);
      });
    }
  }, {
    key: "_renderLast",
    value: function _renderLast() {
      var _this2 = this;
      if (!this._store.getState().last.length) {
        return;
      }
      var last = new _view_last__WEBPACK_IMPORTED_MODULE_2__["default"]().createLastTemplate();
      this._main.insertAdjacentHTML('beforeend', last);
      this._store.getState().last.forEach(function (item) {
        var post = new _view_post__WEBPACK_IMPORTED_MODULE_4__["default"](item).createPostTemplate();
        var lastWrapper = _this2._main.querySelector('#lastPosts');
        lastWrapper.insertAdjacentHTML('beforeend', post);
        lastWrapper.addEventListener('click', _this2._onPostClick);
      });
    }
  }, {
    key: "_renderPopular",
    value: function _renderPopular() {
      var _this3 = this;
      if (!this._store.getState().popular.length) {
        return;
      }
      var popular = new _view_popular__WEBPACK_IMPORTED_MODULE_3__["default"]().createPopularTemplate();
      this._main.insertAdjacentHTML('beforeend', popular);
      this._store.getState().popular.forEach(function (item) {
        var post = new _view_post__WEBPACK_IMPORTED_MODULE_4__["default"](item).createPostTemplate();
        var popularWrapper = _this3._main.querySelector('#popularPosts');
        popularWrapper.insertAdjacentHTML('beforeend', post);
        popularWrapper.addEventListener('click', _this3._onPostClick);
      });
    }
  }, {
    key: "_renderLoader",
    value: function _renderLoader() {
      this._main.insertAdjacentHTML('beforeend', this._loader);
    }
  }, {
    key: "_removeLoader",
    value: function _removeLoader() {
      this._main.querySelector('.loader').remove();
    }
  }, {
    key: "_clearMain",
    value: function _clearMain() {
      this._main.innerHTML = '';
    }
  }, {
    key: "_onNavClick",
    value: function _onNavClick(evt) {
      evt.preventDefault();
      if (this._store.getState().screenMode === _const__WEBPACK_IMPORTED_MODULE_8__.ScreenMode.MAIN) {
        return;
      }
      this.updateMainScreen();
    }
  }, {
    key: "_onPostClick",
    value: function _onPostClick(evt) {
      var _this4 = this;
      if (!evt.target.classList.contains('article')) {
        return;
      }
      this._clearMain();
      this._renderLoader();
      var promise = new Promise(function (resolve) {
        setTimeout(function () {
          return resolve();
        }, 1000);
      });
      promise.then(function () {
        var postId = evt.target.dataset.postId;
        _this4._store.dispatch({
          type: _store_actions__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_POST_ID,
          payload: postId
        });
        _this4._postDescriptionPresenter.renderDescription(_this4._main);
        _this4._postDescriptionPresenter.setDescriptionPostHandlers(_this4.updateMainScreen, _this4._addPostPresenter);
        if (_this4._store.getState().screenMode !== _const__WEBPACK_IMPORTED_MODULE_8__.ScreenMode.EDIT) {
          _this4._store.dispatch({
            type: _store_actions__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_SCREEN_MODE,
            payload: _const__WEBPACK_IMPORTED_MODULE_8__.ScreenMode.EDIT
          });
        }
        _this4._renderPopular();
      })["finally"](function () {
        _this4._removeLoader();
      });
    }
  }, {
    key: "_onAddNewPostButtonClick",
    value: function _onAddNewPostButtonClick(evt) {
      evt.preventDefault();
      this._addPostPresenter.modalOpen();
    }
  }]);
  return Posts;
}();


/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_NEW_POST: () => (/* binding */ ADD_NEW_POST),
/* harmony export */   DELETE_POST: () => (/* binding */ DELETE_POST),
/* harmony export */   EDIT_POST: () => (/* binding */ EDIT_POST),
/* harmony export */   LOAD_DATA: () => (/* binding */ LOAD_DATA),
/* harmony export */   SET_CURRENT_POST_ID: () => (/* binding */ SET_CURRENT_POST_ID),
/* harmony export */   TOGGLE_SCREEN_MODE: () => (/* binding */ TOGGLE_SCREEN_MODE)
/* harmony export */ });
var LOAD_DATA = 'LOAD_DATA';
var ADD_NEW_POST = 'ADD_NEW_POST';
var TOGGLE_SCREEN_MODE = 'TOGGLE_SCREEN_MODE';
var DELETE_POST = 'DELETE_POST';
var EDIT_POST = 'EDIT_POST';
var SET_CURRENT_POST_ID = 'SET_CURRENT_POST_ID';

/***/ }),

/***/ "./src/store/localStore.js":
/*!*********************************!*\
  !*** ./src/store/localStore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStore)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LocalStore = /*#__PURE__*/function () {
  function LocalStore(key, storage) {
    _classCallCheck(this, LocalStore);
    this._key = key;
    this._storage = storage;
  }
  _createClass(LocalStore, [{
    key: "init",
    value: function init() {
      if (this._storage.getItem(this._key)) {
        return;
      }
      this._storage.setItem(this._key, JSON.stringify([]));
    }
  }, {
    key: "setItems",
    value: function setItems(value) {
      this._storage.setItem(this._key, JSON.stringify(value));
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this._storage.getItem(this._key);
    }
  }]);
  return LocalStore;
}();


/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateStore: () => (/* binding */ updateStore)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");

var PROMO_COUNT = 3;
var LAST_POST_COUNT = 7;
var POPULAR_POST_COUNT = 4;
var sortPromoPosts = function sortPromoPosts(posts) {
  var sPosts = posts.slice();
  return sPosts.sort(function (a, b) {
    return b.createDate - a.createDate;
  });
};
var sortLastPosts = function sortLastPosts(posts) {
  var sPosts = posts.slice();
  return sPosts.sort(function (a, b) {
    return b.createDate - a.createDate;
  });
};
var sortPopularPost = function sortPopularPost(posts) {
  var sPosts = posts.slice();
  return sPosts.sort(function (a, b) {
    return b.views - a.views;
  });
};
var sortData = function sortData(state, data) {
  state.promo = data.filter(function (item) {
    return item.promo === true;
  }).slice(0, PROMO_COUNT);
  state.promo = sortPromoPosts(state.promo);
  state.last = sortLastPosts(data).slice(0, LAST_POST_COUNT);
  state.popular = sortPopularPost(data).slice(0, POPULAR_POST_COUNT);
  return state;
};
var updateStore = function updateStore(state, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_DATA:
      state.posts = action.payload.slice();
      sortData(state, state.posts);
      return state;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_NEW_POST:
      state.posts.push(action.payload);
      sortData(state, state.posts);
      return state;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_POST:
      var postIndex = state.posts.findIndex(function (item) {
        return item.id === action.payload;
      });
      state.posts.splice(postIndex, 1);
      sortData(state, state.posts);
      return state;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.EDIT_POST:
      var editPostIndex = state.posts.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      state.posts.splice(editPostIndex, 1, action.payload);
      sortData(state, state.posts);
      return state;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_SCREEN_MODE:
      state.screenMode = action.payload;
      return state;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_POST_ID:
      state.currentPostId = action.payload;
      return state;
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");


var initialState = {
  posts: [],
  promo: [],
  last: [],
  popular: [],
  screenMode: _const__WEBPACK_IMPORTED_MODULE_1__.ScreenMode.MAIN,
  currentPostId: null
};
var createStore = function createStore(reducer, initialState) {
  return {
    _state: initialState,
    dispatch: function dispatch(action) {
      this._state = reducer(this._state, action);
    },
    getState: function getState() {
      return this._state;
    }
  };
};
var store = createStore(_reducer__WEBPACK_IMPORTED_MODULE_0__.updateStore, initialState);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatter: () => (/* binding */ formatter),
/* harmony export */   getRandomInteger: () => (/* binding */ getRandomInteger),
/* harmony export */   showDateFormat: () => (/* binding */ showDateFormat)
/* harmony export */ });
var formatter = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});
var showDateFormat = function showDateFormat(container) {
  return function () {
    var date = new Date();
    container.innerHTML = formatter.format(date);
  };
};
var getRandomInteger = function getRandomInteger() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var lower = Math.ceil(Math.min(a, b));
  var upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

/***/ }),

/***/ "./src/view/last.js":
/*!**************************!*\
  !*** ./src/view/last.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Last)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Last = /*#__PURE__*/function () {
  function Last() {
    _classCallCheck(this, Last);
  }
  _createClass(Last, [{
    key: "createLastTemplate",
    value: function createLastTemplate() {
      return "<section class=\"section\">\n      <div class=\"container\">\n        <h2>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435</h2>\n        <div class=\"posts\" id=\"lastPosts\"></div>\n      </div>\n    </section>";
    }
  }]);
  return Last;
}();


/***/ }),

/***/ "./src/view/loader.js":
/*!****************************!*\
  !*** ./src/view/loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Loader = /*#__PURE__*/function () {
  function Loader() {
    _classCallCheck(this, Loader);
  }
  _createClass(Loader, [{
    key: "renderLoaderTemplate",
    value: function renderLoaderTemplate() {
      return "<div class=\"loader\">\n      <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" width=\"32px\" height=\"32px\" viewBox=\"0 0 128 128\" xml:space=\"preserve\"><g><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#777777\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#a4a4a4\" transform=\"rotate(45,64,64)\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#c6c6c6\" transform=\"rotate(90,64,64)\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#e4e4e4\" transform=\"rotate(135,64,64)\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#efefef\" transform=\"rotate(180,64,64)\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#efefef\" transform=\"rotate(225,64,64)\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#efefef\" transform=\"rotate(270,64,64)\"/><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#efefef\" transform=\"rotate(315,64,64)\"/><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\"></animateTransform></g></svg>\n    </div>";
    }
  }]);
  return Loader;
}();


/***/ }),

/***/ "./src/view/modal.js":
/*!***************************!*\
  !*** ./src/view/modal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var createElement = function createElement() {
  return "<div class=\"modal\">\n    <div class=\"modal-body\">\n      <h2>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u0441\u0442</h2>\n      <form>\n        <label>\n          <strong>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</strong>\n          <input type=\"text\" placeholder=\"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\" class=\"form-heading form-control\" required>\n        </label>\n        <label>\n          <strong>\u0421\u0441\u044B\u043B\u043A\u0430</strong> <small>(\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0439 URL)</small>\n          <input type=\"url\" placeholder=\"https://example.com/image.jpg\" class=\"form-link form-control\" required>\n        </label>\n        <label>\n          <strong>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</strong> <small>(\u043D\u0435 \u043C\u0435\u043D\u0435\u0435 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)</small>\n          <textarea placeholder=\"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\" minlength=\"20\" class=\"form-description form-control\" required></textarea>\n        </label>\n        <label class=\"checkbox\"><input type=\"checkbox\" class=\"form-promo\"> <strong>\u041F\u0440\u043E\u043C\u043E</strong></label>\n        <div class=\"buttons\">\n          <button type=\"button\" class=\"close-modal\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n          <button type=\"submit\" class=\"add-post\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n        </div>\n      </form>\n    </div>\n  </div>";
};
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
  }
  _createClass(Modal, [{
    key: "createModalTemplate",
    value: function createModalTemplate() {
      return createElement();
    }
  }]);
  return Modal;
}();


/***/ }),

/***/ "./src/view/popular.js":
/*!*****************************!*\
  !*** ./src/view/popular.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popular)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popular = /*#__PURE__*/function () {
  function Popular() {
    _classCallCheck(this, Popular);
  }
  _createClass(Popular, [{
    key: "createPopularTemplate",
    value: function createPopularTemplate() {
      return "<section class=\"section\">\n      <div class=\"container\">\n        <h2>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435</h2>\n        <div class=\"posts\" id=\"popularPosts\"></div>\n      </div>\n    </section>";
    }
  }]);
  return Popular;
}();


/***/ }),

/***/ "./src/view/post.js":
/*!**************************!*\
  !*** ./src/view/post.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var createElement = function createElement(_ref) {
  var id = _ref.id,
    createDate = _ref.createDate,
    link = _ref.link,
    promo = _ref.promo,
    views = _ref.views,
    heading = _ref.heading;
  return "<article class=\"article\" data-post-id=\"".concat(id, "\">\n    <div class=\"img\"><img src=\"").concat(link, "\" alt=\"").concat(heading, "\" /></div>\n    <footer>\n      ").concat(promo ? '<div><span class="promo">Промо</span></div>' : '', "\n      <div>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z\"/></svg>\n        <time>").concat(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.formatter.format(createDate), "</time>\n      </div>\n      <div>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z\"/></svg>\n        <span class=\"views-count\">").concat(views, "</span>\n      </div>\n    </footer>\n  </article>");
};
var Post = /*#__PURE__*/function () {
  function Post(post) {
    _classCallCheck(this, Post);
    this._post = post;
  }
  _createClass(Post, [{
    key: "createPostTemplate",
    value: function createPostTemplate() {
      return createElement(this._post);
    }
  }]);
  return Post;
}();


/***/ }),

/***/ "./src/view/postDescription.js":
/*!*************************************!*\
  !*** ./src/view/postDescription.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostDescription)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var createElement = function createElement(_ref) {
  var heading = _ref.heading,
    id = _ref.id,
    createDate = _ref.createDate,
    link = _ref.link,
    description = _ref.description,
    promo = _ref.promo,
    views = _ref.views;
  return "<section class=\"post-description\" data-post-id=\"".concat(id, "\">\n    <div class=\"container\">\n      <h2>").concat(heading, "</h2>\n      <div class=\"img\"><img src=\"").concat(link, "\" alt=\"").concat(heading, "\" /></div>\n      <p>").concat(description, "</p>\n      <footer>\n        ").concat(promo ? '<div><span class="promo">Промо</span></div>' : '', "\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z\"/></svg>\n          <time>").concat(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.formatter.format(createDate), "</time>\n        </div>\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z\"/></svg>\n          <span class=\"views-count\">").concat(views, "</span>\n        </div>\n      </footer>\n      <div class=\"options\">\n        <button type=\"button\" class=\"edit-post\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0442</button>\n        <button type=\"button\" class=\"delete-post\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442</button>\n      </div>\n    </div>\n    \n  </section>");
};
var PostDescription = /*#__PURE__*/function () {
  function PostDescription(post) {
    _classCallCheck(this, PostDescription);
    this._post = post;
  }
  _createClass(PostDescription, [{
    key: "createPostDescriptionTemplate",
    value: function createPostDescriptionTemplate() {
      return createElement(this._post);
    }
  }]);
  return PostDescription;
}();


/***/ }),

/***/ "./src/view/promo.js":
/*!***************************!*\
  !*** ./src/view/promo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Promo)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Promo = /*#__PURE__*/function () {
  function Promo() {
    _classCallCheck(this, Promo);
  }
  _createClass(Promo, [{
    key: "createPromoTemplate",
    value: function createPromoTemplate() {
      return "<section class=\"section\">\n      <div class=\"container\">\n        <h2>\u041F\u0440\u043E\u043C\u043E</h2>\n        <div class=\"posts\" id=\"promoPosts\"></div>\n      </div>\n    </section>";
    }
  }]);
  return Promo;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font: 18px/1.3 sans-serif;
  background-color: #f8f8f8;
}

body.modal-open {
  overflow: hidden;
}

a {
  color: #615c9a;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

/* Header */
.header {
  padding: 15px;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header time {
  font-size: 14px;
  color: #333;
  font-family: monospace;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: white;
  width: 176px;
  height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.main {
  padding: 15px;
}

.section {
  margin-bottom: 60px;
}

.posts {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px;
}

article {
  width: 300px;
  cursor: pointer;
}

article * {
  pointer-events: none;
}

.img {
  display: flex;
  justify-content: center;
  border-radius: 3px;
  margin-bottom: 15px;
  height: 195px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
  padding: 15px;
  transition: box-shadow .3s ease;
}

article:hover .img {
  box-shadow: 0 5px 25px rgba(0, 0, 0, .3);
}

img {
  display: block;
  width: auto;
  height: auto;
  max-height: 195px;
  border-radius: 3px;
}

article {
  margin-bottom: 30px;
}

article footer,
.post-description footer {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

article footer div,
.post-description footer div {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #777;
}

article footer svg,
.post-description footer svg {
  width: 20px;
  height: 20px;
}

article footer svg path,
.post-description footer svg path {
  fill: #777;
}

.promo {
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 10px;
  color: white;
  font-size: 12px;
  line-height: 12px;
  border-radius: 3px;
  background-color: #f66733;
}

/* Post description */
.post-description {
  margin-bottom: 60px;
}

.post-description .img {
  width: 100%;
  height: auto;
  max-width: 600px;
  border: 0;
  padding: 0;
}

.post-description .img img {
  width: 100%;
  height: auto;
  max-height: initial;
  box-shadow: 0 2px 15px rgba(0, 0, 0, .1);
}

.post-description footer {
  font-size: 14px;
}

.post-description .options {
  margin-top: 30px;
}

/* Modal */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  cursor: default;
  background-color: rgba(0, 0, 0, .2);
  display: none;
}

.backdrop.show {
  display: block;
}

.modal {
  width: 500px;
  height: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  top: 50px;
  left: 50%;
  z-index: 200;
  margin-left: -250px;
  display: none;
}

.modal.open {
  display: block;
}

.modal-body {
  padding: 30px;
}

/* Form */
label strong {
  font-size: 14px;
}

label small {
  font-size: 12px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
}

.form-control {
  display: block;
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
  padding: 0 15px;
  transition: border-color .3s ease;
}

.form-control:focus {
  border-color: #9894c0;
}

textarea.form-control {
  height: 70px;
  font-family: sans-serif;
  padding-top: 15px;
  padding-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  height: 30px;
  border: 0;
  outline: none;
  padding: 0 10px;
  border-radius: 3px;
  background-color: #615c9a;
  color: white;
  transition: background-color .3s ease;
  cursor: pointer;
}

button:hover {
  background-color: #484475;
}

button.close-modal {
  background-color: #fff;
  color: black;
  border: 1px solid #9f9cc1;
}

button.close-modal:hover {
  background-color: #dedde7;
}

button.delete-post {
  background-color: #c32c42;
}

button.delete-post:hover {
  background-color: #9f1c30;
}

/* Loader */
.loader {
  text-align: center;
  margin: 60px 0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _presenter_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/posts */ "./src/presenter/posts.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var _store_localStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/localStore */ "./src/store/localStore.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions */ "./src/store/actions.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");






var POSTS_KEY = 'posts';
var postsStore = new _store_localStore__WEBPACK_IMPORTED_MODULE_3__["default"](POSTS_KEY, window.localStorage);
postsStore.init();
_store_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch({
  type: _store_actions__WEBPACK_IMPORTED_MODULE_4__.LOAD_DATA,
  payload: JSON.parse(postsStore.getItems())
});
var header = document.querySelector('.header');
var nav = header.querySelector('.nav');
var time = header.querySelector('time');
var main = document.querySelector('.main');
var addNewPostButton = header.querySelector('.add-new-post');
var showHeaderTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.showDateFormat)(time);
setInterval(showHeaderTime, 1000);
var postsPresenter = new _presenter_posts__WEBPACK_IMPORTED_MODULE_1__["default"](nav, addNewPostButton, main, _store_store__WEBPACK_IMPORTED_MODULE_2__["default"], postsStore);
postsPresenter.init();
})();

/******/ })()
;