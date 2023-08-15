(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{K:()=>re,v:()=>ne});var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var o=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e,t){"prepend"===t?this._container.prepend(e):this._container.append(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderElements",value:function(e){var t=this;this._clear(),e.forEach((function(e){t._renderer(e)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var c=function(){function e(t,r,n,o,i,u){var c=u.removeCard,a=u.changeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t,this._name=t.name,this._link=t.link,this._userId=r,this._templateSelector=n,this._handleCardClick=i,this._removeCard=c,this._changeLike=a,this._isOwner=this._userId===this._item.owner._id,this._popupDeleteInstance=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__name"),t=this._element.querySelector(".element__image");return this._cardHeartButton=this._element.querySelector(".element__heart-button"),this._cardHeartCounter=this._element.querySelector(".element__heart-counter"),this._cardHeartCounter.textContent=this._item.likes.length,e.textContent=this._name,t.setAttribute("alt",this._name),t.setAttribute("src",this._link),this._updateLike(),!1===this._isOwner&&this._element.querySelector(".element__trash").remove(),this._setEventListeners(),this._element}},{key:"remove",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._item._id}},{key:"isLiked",value:function(){var e=this;return this._item.likes.some((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._item.likes=e.likes,this._updateLike()}},{key:"_updateLike",value:function(){this._cardHeartCounter.textContent=this._item.likes.length,this.isLiked()?this._cardHeartButton.classList.add("element__heart-button_active"):this._cardHeartButton.classList.remove("element__heart-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardHeartButton.addEventListener("click",(function(){e._changeLike(e)})),!0===this._isOwner&&this._element.querySelector(".element__trash").addEventListener("click",(function(){return e._popupDeleteInstance.open(e)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var s=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupCloseButton=r,this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose.bind)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("click",(function(t){t.target===e._popupSelector&&e.close()})),this._popupCloseButton.addEventListener("click",(function(){e.close(e._popupSelector)}))}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e,t)}return t=u,(r=[{key:"open",value:function(e,t){y(v(u.prototype),"open",this).call(this),ne.alt=e,ne.src=t,re.textContent=e}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function d(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var g=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=r,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputList=this._popup.querySelectorAll(this._inputSelector),this._formElement=this._popup.querySelector(this._formSelector),this._submitButton=this._popup.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e,t){e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){var t=e.validity.valid,r=this._formElement.querySelector(".".concat(e.id,"-error"));t?this._hideError(e,r):this._showError(e,r)}},{key:"toggleButtonState",value:function(e){e?(this._submitButton.disabled=!1,this._submitButton.classList.remove(this._inactiveButtonClass)):(this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass))}},{key:"removeValidationError",value:function(){var e=this;d(this._inputList).forEach((function(t){var r=e._popup.querySelector(".".concat(t.id,"-error"));e._hideError(t,r)}))}},{key:"_setEventListener",value:function(){var e=this;d(this._inputList).forEach((function(t){t.addEventListener("input",(function(){e.toggleButtonState(e._formElement.checkValidity()),e._checkInputValidity(t)}))})),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._formElement.checkValidity()}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},k.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t,r,n){var o,c=n.formSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e,t))._form=r,o._formSubmit=c,o}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){k(j(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;k(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmit(e._getInputValues())}))}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}var A=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t,this._infoSelector=r,this._profileAvatar=n}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._nameSelector.textContent,info:this._infoSelector.textContent,avatar:this._profileAvatar.src},this._userInfo}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about,n=e.avatar;this._nameSelector.textContent=t,this._infoSelector.textContent=r,this._profileAvatar.src=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._profileAvatar.src=t}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var R=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=r,this.headers=n}var t,r;return t=e,(r=[{key:"onResponce",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getAllInfoApi",value:function(){return Promise.all([this.getAllCardsApi(),this.getCurrentUserApi()])}},{key:"getCurrentUserApi",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this.onResponce)}},{key:"changeLikeApi",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this.headers}).then(this.onResponce)}},{key:"getAllCardsApi",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this.onResponce)}},{key:"addCardApi",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this.onResponce)}},{key:"removeCardApi",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this.onResponce)}},{key:"changeUserInfoApi",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this.onResponce)}},{key:"changeUserAvatarApi",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this.onResponce)}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},U.apply(this,arguments)}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(o){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t,r,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e,t))._popupDeleteButton=r,o._popupFormDelete=n,o}return t=u,(r=[{key:"open",value:function(e){U(x(u.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;U(x(u.prototype),"setEventListeners",this).call(this),this._popupFormDelete.addEventListener("submit",(function(t){t.preventDefault(),e._card._removeCard(e._card),e.close()}))}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=document.querySelector(".content"),N=M.querySelector(".popup_type_card"),J=M.querySelector(".popup_type_edit"),F=M.querySelector(".profile__edit-button"),$=M.querySelector(".popup__form_type_edit"),z=M.querySelector(".popup__input_type_name"),K=M.querySelector(".popup__input_type_about"),G=M.querySelector(".profile__name"),Q=M.querySelector(".profile__about"),W=M.querySelector(".popup__close_type_edit"),X=M.querySelector(".profile__add-button"),Y=M.querySelector(".popup__form_type_card"),Z=M.querySelector(".popup__close_type_card"),ee=document.querySelector(".elements__list"),te=M.querySelector(".popup_type_picture"),re=M.querySelector(".popup__picture-caption"),ne=M.querySelector(".popup__image"),oe=M.querySelector(".popup__close_type_picture"),ie=M.querySelector(".popup_type_delete"),ue=M.querySelector(".popup__close_type_delete"),ce=M.querySelector(".popup__delete-button"),ae=M.querySelector(".popup__form_type_delete"),le=M.querySelector(".popup_type_avatar"),se=M.querySelector(".popup__form_type_avatar"),fe=M.querySelector(".popup__close_type_avatar"),pe=M.querySelector(".profile__avatar-container"),ye=M.querySelector(".profile__avatar"),he=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-73",headers:{authorization:"4c55a9ed-e154-4f7c-887d-b90cfb7b0881","Content-Type":"application/json"}}),ve=new P(le,fe,se,{formSubmit:function(e){me(!0,le,"Сохранить"),he.changeUserAvatarApi(e).then((function(e){Ee.setUserAvatar(e),ve.close()})).catch((function(e){return console.log(e)})).finally((function(){return me(!1,le,"Сохранить")}))}});function me(e,t,r){t.querySelector(".popup__button").textContent=e?"Сохранение...":r}ve.setEventListeners(),pe.addEventListener("click",(function(){ve.open(),Ce.removeValidationError(),Ce.toggleButtonState(se.checkValidity())}));var be=new o({renderer:function(e){var t=de(e).generateCard();be.addItem(t,"append")}},ee);function de(e){return new c(e,_e,"#element-template",Oe,Se,{removeCard:function(e){he.removeCardApi(e.getId()).then((function(){return e.remove()})).catch((function(e){return console.log(e)}))},changeLike:function(e){he.changeLikeApi(e.getId(),e.isLiked()).then((function(t){return e.setLikes(t)})).catch((function(e){return console.log(e)}))}})}var _e=null;function Se(e,t){ke.open(e,t)}he.getAllInfoApi().then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];_e=i._id,be.renderElements(o),Ee.setUserInfo(i)})).catch((function(e){return console.log(e)}));var ge=new P(N,Z,Y,{formSubmit:function(e){me(!0,N,"Создать"),he.addCardApi(e).then((function(e){var t=de(e).generateCard();be.addItem(t,"prepend"),ge.close()})).catch((function(e){return console.log(e)})).finally((function(){return me(!1,N,"Создать")}))}});X.addEventListener("click",(function(){ge.open(),Pe.removeValidationError(),Pe.toggleButtonState(Y.checkValidity())})),ge.setEventListeners();var we=new P(J,W,$,{formSubmit:function(e){me(!0,J,"Сохранить"),he.changeUserInfoApi(e).then((function(e){Ee.setUserInfo(e),we.close()})).catch((function(e){return console.log(e)})).finally((function(){return me(!1,J,"Сохранить")}))}});F.addEventListener("click",(function(){we.open();var e=new Event("input");je.removeValidationError(),je.toggleButtonState(Y.checkValidity());var t=Ee.getUserInfo();z.value=t.name,K.value=t.info,z.dispatchEvent(e)})),we.setEventListeners();var Ee=new A(G,Q,ye),ke=new m(te,oe);ke.setEventListeners();var Oe=new D(ie,ue,ce,ae);Oe.setEventListeners();var je=new g(t,J);je.enableValidation();var Pe=new g(t,N);Pe.enableValidation();var Ce=new g(t,le);Ce.enableValidation()})();