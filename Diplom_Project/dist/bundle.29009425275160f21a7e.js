/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _pages_CarListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/CarListPage */ "./src/pages/CarListPage.jsx");
/* harmony import */ var _pages_CartPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/CartPage */ "./src/pages/CartPage.jsx");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/LoginPage */ "./src/pages/LoginPage.jsx");






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_CarListPage__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_CartPage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_LoginPage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/cars/brand/:brand",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_CarListPage__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/BrandList.jsx":
/*!**************************************!*\
  !*** ./src/components/BrandList.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");


var brands = ['Audi', 'BMW', 'Renault', 'Peugeot', 'Mercedes-Benz', 'Volkswagen', 'Ferrari', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'Hyundai', 'Kia', 'Citroën', 'Subaru', 'Tesla', 'Lexus', 'Infiniti', 'Cadillac'];
var BrandList = function BrandList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "brand-list-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043D\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "brand-list"
  }, brands.map(function (brand) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: brand,
      className: "brand-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/cars/brand/".concat(brand.toLowerCase()),
      className: "brand-link"
    }, brand));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandList);

/***/ }),

/***/ "./src/components/CarCard.jsx":
/*!************************************!*\
  !*** ./src/components/CarCard.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var CarCard = function CarCard(_ref) {
  var car = _ref.car,
    onAddToCart = _ref.onAddToCart;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  }); // Получаем текущего пользователя из состояния
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    openSnackbar = _React$useState2[0],
    setOpenSnackbar = _React$useState2[1];
  var handleAddToCart = function handleAddToCart() {
    if (user) {
      onAddToCart(user.id, car); // Передаем user.id и car в функцию
      setOpenSnackbar(true); // Показываем уведомление
    }
  };
  var handleCloseSnackbar = function handleCloseSnackbar() {
    setOpenSnackbar(false); // Закрываем уведомление
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "car-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: car.image,
    alt: car.model,
    width: 200
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, car.brand, " ", car.model), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ", car.year || 'Не указан'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: $", car.price ? car.price.toLocaleString() : 'Не указано'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: ", car.type || 'Не указано'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u041F\u0440\u043E\u0431\u0435\u0433: ", car.mileage ? "".concat(car.mileage.toLocaleString(), " \u043A\u043C") : 'Не указано'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, car.description || ''), user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleAddToCart
  }, "Add to Cart") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: 'red'
    }
  }, "You must be logged in to add to cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: openSnackbar,
    autoHideDuration: 3000,
    onClose: handleCloseSnackbar,
    message: "\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443!"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarCard);

/***/ }),

/***/ "./src/components/FilterBar.jsx":
/*!**************************************!*\
  !*** ./src/components/FilterBar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var FilterBar = function FilterBar(_ref) {
  var onFilterChange = _ref.onFilterChange;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    minPrice = _useState2[0],
    setMinPrice = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    maxPrice = _useState4[0],
    setMaxPrice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    brand = _useState6[0],
    setBrand = _useState6[1];
  var handleFilterChange = function handleFilterChange() {
    onFilterChange({
      minPrice: minPrice,
      maxPrice: maxPrice,
      brand: brand
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "filter-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Min Price:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: minPrice,
    onChange: function onChange(e) {
      return setMinPrice(e.target.value);
    },
    placeholder: "Min price"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Max Price:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: maxPrice,
    onChange: function onChange(e) {
      return setMaxPrice(e.target.value);
    },
    placeholder: "Max price"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Brand:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: brand,
    onChange: function onChange(e) {
      return setBrand(e.target.value);
    },
    placeholder: "Brand"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleFilterChange
  }, "Apply Filters"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterBar);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/authActions */ "./src/redux/actions/authActions.js");




var Header = function Header() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  });
  var handleLogout = function handleLogout() {
    dispatch((0,_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__.logout)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, "Used Cars Store")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/cart"
  }, "Cart"), user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login"
  }, "Login")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Pagination.jsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Pagination = function Pagination(_ref) {
  var totalItems = _ref.totalItems,
    itemsPerPage = _ref.itemsPerPage,
    currentPage = _ref.currentPage,
    onPageChange = _ref.onPageChange;
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var handlePageClick = function handlePageClick(pageNumber) {
    onPageChange(pageNumber);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: currentPage === 1,
    onClick: function onClick() {
      return handlePageClick(currentPage - 1);
    }
  }, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", currentPage, " \u0438\u0437 ", totalPages, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: currentPage === totalPages,
    onClick: function onClick() {
      return handlePageClick(currentPage + 1);
    }
  }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/actions/authActions */ "./src/redux/actions/authActions.js");









_redux_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch((0,_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_6__.checkAuth)()); // надо проверить авторизацию при запуске

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null))));

/***/ }),

/***/ "./src/pages/CarListPage.jsx":
/*!***********************************!*\
  !*** ./src/pages/CarListPage.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_carActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/carActions */ "./src/redux/actions/carActions.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _components_CarCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CarCard */ "./src/components/CarCard.jsx");
/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FilterBar */ "./src/components/FilterBar.jsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");
/* harmony import */ var _components_BrandList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BrandList */ "./src/components/BrandList.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var CarListPage = function CarListPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.cars;
    }),
    cars = _useSelector.cars,
    loading = _useSelector.loading,
    error = _useSelector.error;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cars),
    _useState2 = _slicedToArray(_useState, 2),
    filteredCars = _useState2[0],
    setFilteredCars = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      minPrice: '',
      maxPrice: '',
      brand: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    filters = _useState4[0],
    setFilters = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var itemsPerPage = 50;

  //получаем параметр brand из URL
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
    brand = _useParams.brand;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_carActions__WEBPACK_IMPORTED_MODULE_2__.fetchCars)());
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //фильрация данных
    var applyFilters = function applyFilters() {
      var filtered = cars;

      //фильтрация по цене
      if (filters.minPrice) {
        filtered = filtered.filter(function (car) {
          return car.price >= filters.minPrice;
        });
      }
      if (filters.maxPrice) {
        filtered = filtered.filter(function (car) {
          return car.price <= filters.maxPrice;
        });
      }

      // филтр по бренду из состояния
      if (filters.brand) {
        filtered = filtered.filter(function (car) {
          return car.brand.toLowerCase().includes(filters.brand.toLowerCase());
        });
      }

      //филтр по бренду из урла
      if (brand) {
        filtered = filtered.filter(function (car) {
          return car.brand.toLowerCase() === brand.toLowerCase();
        });
      }
      setFilteredCars(filtered);
    };
    applyFilters();
  }, [cars, filters, brand]); //применяем фильтры, если cars brand изменятся

  var handleAddToCart = function handleAddToCart(car) {
    dispatch((0,_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__.addToCart)(car));
  };
  var handleFilterChange = function handleFilterChange(newFilters) {
    setFilters(newFilters);
  };
  var handlePageChange = function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  };
  var indexOfLastItem = currentPage * itemsPerPage;
  var indexOfFirstItem = indexOfLastItem - itemsPerPage;
  var currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-subline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-subline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-subline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-subline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-subline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-loader-circle-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-loader-circle-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-needle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cssload-loading"
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."));
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Error: ", error);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BrandList__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FilterBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onFilterChange: handleFilterChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "car-list"
  }, currentCars.length > 0 ? currentCars.map(function (car) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CarCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: car.id,
      car: car,
      onAddToCart: function onAddToCart() {
        return handleAddToCart(car);
      }
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u041D\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    totalItems: filteredCars.length,
    itemsPerPage: itemsPerPage,
    currentPage: currentPage,
    onPageChange: handlePageChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarListPage);

/***/ }),

/***/ "./src/pages/CartPage.jsx":
/*!********************************!*\
  !*** ./src/pages/CartPage.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var CartPage = function CartPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.auth;
    }),
    user = _useSelector.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    userCart = _useState2[0],
    setUserCart = _useState2[1];

  // Функция для получения корзины пользователя
  var fetchUserCart = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!user) {
              _context.next = 14;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return fetch("http://localhost:5000/users/".concat(user.id));
          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();
          case 7:
            data = _context.sent;
            if (data && data.cart) {
              setUserCart(data.cart); // Устанавливаем корзину пользователя
            } else {
              setUserCart([]); // Если корзина пустая
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.error("Error fetching user's cart:", _context.t0);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 11]]);
    }));
    return function fetchUserCart() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user) {
      fetchUserCart();
    }
  }, [user]);

  // Удаление товара из корзины
  var handleRemoveFromCart = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(carId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("http://localhost:5000/users/".concat(user.id), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                cart: userCart.filter(function (item) {
                  return item.id !== carId;
                }) // Обновляем корзину
              })
            });
          case 3:
            response = _context2.sent;
            if (response.ok) {
              // Обновляем корзину пользователя после удаления товара
              setUserCart(userCart.filter(function (item) {
                return item.id !== carId;
              }));
            } else {
              console.error('Failed to remove item from cart');
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error('Error removing item from cart:', _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function handleRemoveFromCart(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"), userCart.length > 0 ? userCart.map(function (car) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: car.id,
      className: "cart-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: car.image,
      alt: car.model,
      width: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, car.brand, " ", car.model), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ", car.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: $", car.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleRemoveFromCart(car.id);
      }
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B"));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPage);

/***/ }),

/***/ "./src/pages/LoginPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/LoginPage.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/authActions */ "./src/redux/actions/authActions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var LoginPage = function LoginPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Если пользователь уже авторизован, перенаправляем его
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  var handleLogin = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return dispatch((0,_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__.login)(username, password));
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            setError('Invalid username or password');
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function handleLogin(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Login"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: 'red'
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Username:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Login"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ }),

/***/ "./src/redux/actions/authActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/authActions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkAuth: () => (/* binding */ checkAuth),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _cartActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartActions */ "./src/redux/actions/cartActions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// authActions.js

// authActions.js
var logout = function logout() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState) {
      var _getState$auth$user, userId, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Получаем текущего авторизованного пользователя из состояния
            userId = (_getState$auth$user = getState().auth.user) === null || _getState$auth$user === void 0 ? void 0 : _getState$auth$user.id;
            if (userId) {
              _context.next = 4;
              break;
            }
            throw new Error('No user is logged in');
          case 4:
            _context.next = 6;
            return fetch("http://localhost:5000/loggedInUser/".concat(userId), {
              method: 'DELETE'
            });
          case 6:
            response = _context.sent;
            if (response.ok) {
              _context.next = 9;
              break;
            }
            throw new Error('Failed to logout on server');
          case 9:
            // Удаляем пользователя из локального состояния
            dispatch({
              type: 'LOGOUT'
            });
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error('Logout failed:', _context.t0.message);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

// authActions.js
var checkAuth = function checkAuth() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      var response, loggedInUser, user;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch('http://localhost:5000/loggedInUser');
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();
          case 6:
            loggedInUser = _context2.sent;
            if (loggedInUser.length > 0) {
              user = loggedInUser[0];
              dispatch({
                type: 'LOGIN_SUCCESS',
                payload: user
              });

              // Загружаем корзину для текущего пользователя
              dispatch((0,_cartActions__WEBPACK_IMPORTED_MODULE_0__.fetchUserCart)(user.id));
            } else {
              dispatch({
                type: 'LOGOUT'
              });
            }
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error('Error checking auth:', _context2.t0.message);
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var login = function login(username, password) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      var response, users, user;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch('http://localhost:5000/users');
          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();
          case 6:
            users = _context3.sent;
            user = users.find(function (u) {
              return u.username === username && u.password === password;
            });
            if (!user) {
              _context3.next = 15;
              break;
            }
            _context3.next = 11;
            return fetch('http://localhost:5000/loggedInUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            });
          case 11:
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: user
            });

            // Загружаем корзину текущего пользователя
            dispatch((0,_cartActions__WEBPACK_IMPORTED_MODULE_0__.fetchUserCart)(user.id));
            _context3.next = 16;
            break;
          case 15:
            throw new Error('Invalid credentials');
          case 16:
            _context3.next = 21;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](0);
            console.error('Login failed:', _context3.t0.message);
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 18]]);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/actions/carActions.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/carActions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCars: () => (/* binding */ fetchCars)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// carActions.js
var fetchCars = function fetchCars() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: 'FETCH_CARS_REQUEST'
            });
            _context.prev = 1;
            _context.next = 4;
            return fetch('http://localhost:5000/cars');
          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();
          case 7:
            data = _context.sent;
            dispatch({
              type: 'FETCH_CARS_SUCCESS',
              payload: data
            });
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: 'FETCH_CARS_FAILURE',
              payload: _context.t0.message
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 11]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   fetchUserCart: () => (/* binding */ fetchUserCart),
/* harmony export */   removeFromCart: () => (/* binding */ removeFromCart),
/* harmony export */   saveCartForUser: () => (/* binding */ saveCartForUser)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// добавление в избранное
// cartActions.js
var fetchUserCart = function fetchUserCart(userId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var response, user;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("http://localhost:5000/users/".concat(userId));
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            user = _context.sent;
            // Загрузим корзину для этого пользователя
            dispatch({
              type: 'FETCH_USER_CART',
              payload: user.cart || [] // Загружаем корзину этого пользователя
            });
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error('Error fetching user cart:', _context.t0.message);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var saveCartForUser = function saveCartForUser(cartItems) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState) {
      var user;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            user = getState().auth.user;
            if (!user) {
              _context2.next = 5;
              break;
            }
            _context2.next = 5;
            return fetch("http://localhost:5000/cart/".concat(user.id), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(cartItems)
            });
          case 5:
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error('Error saving cart:', _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

// Добавление товара в корзину для конкретного пользователя
var addToCart = function addToCart(car) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch, getState) {
      var user, response, users, currentUser, updatedCart, updateResponse;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // Получаем информацию о текущем пользователе из loggedInUser
            user = getState().auth.user; // текущий авторизованный пользователь
            if (user) {
              _context3.next = 4;
              break;
            }
            throw new Error('User not logged in');
          case 4:
            _context3.next = 6;
            return fetch('http://localhost:5000/users');
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            users = _context3.sent;
            // Находим пользователя, корзину которого будем обновлять
            currentUser = users.find(function (u) {
              return u.id === user.id;
            });
            if (currentUser) {
              _context3.next = 13;
              break;
            }
            throw new Error('User not found');
          case 13:
            // Добавляем новый товар в корзину пользователя
            updatedCart = [].concat(_toConsumableArray(currentUser.cart), [car]); // Отправляем запрос на обновление корзины этого пользователя
            _context3.next = 16;
            return fetch("http://localhost:5000/users/".concat(user.id), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                cart: updatedCart
              })
            });
          case 16:
            updateResponse = _context3.sent;
            if (updateResponse.ok) {
              _context3.next = 19;
              break;
            }
            throw new Error('Failed to update cart');
          case 19:
            // Диспатчим успешное обновление корзины
            dispatch({
              type: 'UPDATE_CART',
              payload: updatedCart
            });
            _context3.next = 25;
            break;
          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            console.error('Error adding to cart:', _context3.t0.message);
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 22]]);
    }));
    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
};

// Удаление из корзины
var removeFromCart = function removeFromCart(carId) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      var response, updatedCart;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch("http://localhost:5000/cart/".concat(carId), {
              method: 'DELETE'
            });
          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return response.json();
          case 6:
            updatedCart = _context4.sent;
            dispatch({
              type: 'REMOVE_FROM_CART',
              payload: updatedCart
            });
            _context4.next = 13;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error('Error removing from cart:', _context4.t0);
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    return function (_x6) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/authReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var initialState = {
  user: null
};
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });
    case 'LOGOUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);

/***/ }),

/***/ "./src/redux/reducers/carsReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/carsReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var initialState = {
  cars: [],
  loading: false,
  error: null
};
var carsReducer = function carsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'FETCH_CARS_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    case 'FETCH_CARS_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        cars: action.payload
      });
    case 'FETCH_CARS_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carsReducer);

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// cartReducer.js
var initialState = {
  items: []
};
var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'FETCH_USER_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.payload
      });
    // Загружаем корзину пользователя
    case 'ADD_TO_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [].concat(_toConsumableArray(state.items), [action.payload])
      });
    case 'REMOVE_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(function (item) {
          return item.id !== action.payload;
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartReducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_carsReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/carsReducer */ "./src/redux/reducers/carsReducer.js");
/* harmony import */ var _reducers_cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _reducers_authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/authReducer */ "./src/redux/reducers/authReducer.js");





var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  cars: _reducers_carsReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  cart: _reducers_cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _reducers_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(rootReducer, (0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#007bff;
    color: white;
    padding: 10px 20px;
  }
  
  .header-logo a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .header-actions a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: 1rem;
  }
  
  .header-actions a:hover {
    text-decoration: underline;
  }
  
  
  .car-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .car-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
  }
  
  .car-card img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .car-card button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .car-card button:hover {
    background-color: #0056b3;
  }
  
  .cart {
    padding: 20px;
  }
  
  .cart ul {
    list-style: none;
    padding: 0;
  }
  
  .cart li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .cart li img {
    border-radius: 4px;
  }
  .cart-item-enter {
    opacity: 0;
  }
  
  .cart-item-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  
  .cart-item-exit {
    opacity: 1;
  }
  
  .cart-item-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  #cssload-wrapper {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 15;
	overflow: hidden;
}

.cssload-loader {
	width: 413px;
	height: 413px;
	border: 3px rgb(0,0,0) solid;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -206px 0 0 -206px;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
}

.cssload-loader .cssload-loading {
	font-size: 28px;
	position: absolute;
	width: 100%;
	text-align: center;
	line-height: 39px;
	font-family: 'Century Gothic', sans-serif;
	font-style: italic;
	left: 0;
	top: 50%;
	margin-top: 55px;
	color: rgb(0,0,0);
	font-weight: bold;
	text-transform: uppercase;
		-o-text-transform: uppercase;
		-ms-text-transform: uppercase;
		-webkit-text-transform: uppercase;
		-moz-text-transform: uppercase;
}

.cssload-loader-circle-1 {
	width: 380px;
	height: 380px;
	left: 14px;
	top: 14px;
	border: 3px rgb(0,0,0) solid;
	position: absolute;
	border-right-color: transparent;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	animation: spin 6.15s linear infinite;
		-o-animation: spin 6.15s linear infinite;
		-ms-animation: spin 6.15s linear infinite;
		-webkit-animation: spin 6.15s linear infinite;
		-moz-animation: spin 6.15s linear infinite;
}

.cssload-loader-circle-2 {
	width: 347px;
	height: 347px;
	left: 14px;
	top: 14px;
	border: 3px transparent solid;
	position: absolute;
	border-right-color: rgb(232,21,18);
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	animation: spin 10.25s linear infinite;
		-o-animation: spin 10.25s linear infinite;
		-ms-animation: spin 10.25s linear infinite;
		-webkit-animation: spin 10.25s linear infinite;
		-moz-animation: spin 10.25s linear infinite;
}

.cssload-loader .cssload-line {
	width: 28px;
	height: 6px;
	background: rgb(0,0,0);
	position: absolute;
}

.cssload-loader .cssload-line:nth-child(1) {
	left: 44px;
	top: 50%;
	margin-top: -3px;
}

.cssload-loader .cssload-line:nth-child(2) {
	transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
	left: 91px;
	top: 91px;
}

.cssload-loader .cssload-line:nth-child(3) {
	top: 44px;
	left: 50%;
	width: 6px;
	height: 28px;
}

.cssload-loader .cssload-line:nth-child(4) {
	transform: rotate(135deg);
		-o-transform: rotate(135deg);
		-ms-transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
		-moz-transform: rotate(135deg);
	right: 91px;
	top: 91px;
}

.cssload-loader .cssload-line:nth-child(5) {
	right: 44px;
	top: 50%;
	margin-top: -3px;
}

.cssload-loader .cssload-line:nth-child(6) {
	transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
	right: 91px;
	bottom: 91px;
	background: rgb(232,21,18);
}

.cssload-loader .cssload-subline {
	position: absolute;
	width: 8px;
	height: 6px;
	background: rgb(0,0,0);
}

.cssload-loader .cssload-subline:nth-child(7) {
	transform: rotate(22.5deg);
		-o-transform: rotate(22.5deg);
		-ms-transform: rotate(22.5deg);
		-webkit-transform: rotate(22.5deg);
		-moz-transform: rotate(22.5deg);
	left: 58px;
	top: 138px;
}

.cssload-loader .cssload-subline:nth-child(8) {
	transform: rotate(67.5deg);
		-o-transform: rotate(67.5deg);
		-ms-transform: rotate(67.5deg);
		-webkit-transform: rotate(67.5deg);
		-moz-transform: rotate(67.5deg);
	left: 138px;
	top: 58px;
}

.cssload-loader .cssload-subline:nth-child(9) {
	transform: rotate(112.5deg);
		-o-transform: rotate(112.5deg);
		-ms-transform: rotate(112.5deg);
		-webkit-transform: rotate(112.5deg);
		-moz-transform: rotate(112.5deg);
	right: 138px;
	top: 58px;
}

.cssload-loader .cssload-subline:nth-child(10) {
	transform: rotate(157.5deg);
		-o-transform: rotate(157.5deg);
		-ms-transform: rotate(157.5deg);
		-webkit-transform: rotate(157.5deg);
		-moz-transform: rotate(157.5deg);
	right: 58px;
	top: 138px;
}

.cssload-loader .cssload-subline:nth-child(11) {
	transform: rotate(22.5deg);
		-o-transform: rotate(22.5deg);
		-ms-transform: rotate(22.5deg);
		-webkit-transform: rotate(22.5deg);
		-moz-transform: rotate(22.5deg);
	right: 55px;
	bottom: 135px;
	background: rgb(232,21,18);
}

.cssload-loader .cssload-needle {
	width: 39px;
	height: 39px;
	border: 3px rgb(0,0,0) solid;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -22px 0 0 -22px;
	z-index: 1;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	animation: pegIt 6.15s infinite ease-in-out;
		-o-animation: pegIt 6.15s infinite ease-in-out;
		-ms-animation: pegIt 6.15s infinite ease-in-out;
		-webkit-animation: pegIt 6.15s infinite ease-in-out;
		-moz-animation: pegIt 6.15s infinite ease-in-out;
}

.cssload-loader .cssload-needle:before {
	content: "";
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 9.5px 138px 9.5px 0;
	border-color: transparent rgb(232,21,18) transparent transparent;
	position: absolute;
	right: 50%;
	top: 50%;
	margin: -9.5px 0 0 0;
	border-radius: 0 50% 50% 0;
		-o-border-radius: 0 50% 50% 0;
		-ms-border-radius: 0 50% 50% 0;
		-webkit-border-radius: 0 50% 50% 0;
		-moz-border-radius: 0 50% 50% 0;
}





@keyframes pegIt {
	0% {
		transform: rotate(0deg);
	}
	16% {
		transform: rotate(75deg);
	}
	25% {
		transform: rotate(55deg);
	}
	30% {
		transform: rotate(90deg);
	}
	36% {
		transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		transform: rotate(227deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

@-o-keyframes pegIt {
	0% {
		-o-transform: rotate(0deg);
	}
	16% {
		-o-transform: rotate(75deg);
	}
	25% {
		-o-transform: rotate(55deg);
	}
	30% {
		-o-transform: rotate(90deg);
	}
	36% {
		-o-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-o-transform: rotate(227deg);
	}
	100% {
		-o-transform: rotate(0deg);
	}
}

@-ms-keyframes pegIt {
	0% {
		-ms-transform: rotate(0deg);
	}
	16% {
		-ms-transform: rotate(75deg);
	}
	25% {
		-ms-transform: rotate(55deg);
	}
	30% {
		-ms-transform: rotate(90deg);
	}
	36% {
		-ms-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-ms-transform: rotate(227deg);
	}
	100% {
		-ms-transform: rotate(0deg);
	}
}

@-webkit-keyframes pegIt {
	0% {
		-webkit-transform: rotate(0deg);
	}
	16% {
		-webkit-transform: rotate(75deg);
	}
	25% {
		-webkit-transform: rotate(55deg);
	}
	30% {
		-webkit-transform: rotate(90deg);
	}
	36% {
		-webkit-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-webkit-transform: rotate(227deg);
	}
	100% {
		-webkit-transform: rotate(0deg);
	}
}

@-moz-keyframes pegIt {
	0% {
		-moz-transform: rotate(0deg);
	}
	16% {
		-moz-transform: rotate(75deg);
	}
	25% {
		-moz-transform: rotate(55deg);
	}
	30% {
		-moz-transform: rotate(90deg);
	}
	36% {
		-moz-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-moz-transform: rotate(227deg);
	}
	100% {
		-moz-transform: rotate(0deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@-o-keyframes spin {
	0% {
		-o-transform: rotate(0deg);
	}
	100% {
		-o-transform: rotate(360deg);
	}
}

@-ms-keyframes spin {
	0% {
		-ms-transform: rotate(0deg);
	}
	100% {
		-ms-transform: rotate(360deg);
	}
}

@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@-moz-keyframes spin {
	0% {
		-moz-transform: rotate(0deg);
	}
	100% {
		-moz-transform: rotate(360deg);
	}
}
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f9;
  }
  
  .login-form-container {
    width: 400px;
    padding: 30px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .login-form-container h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
  
  .login-form-container form {
    display: flex;
    flex-direction: column;
  }
  
  .login-form-container label {
    margin-bottom: 10px;
    font-weight: bold;
    color: #555;
  }
  
  .login-form-container input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .login-form-container input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .login-form-container button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .login-form-container button:hover {
    background-color: #0056b3;
  }
  
  .login-form-container p {
    text-align: center;
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
  /* styles/main.css */

/* Стили для списка брендов */
.brand-list-container {
    padding: 20px;
    background-color: #f7e5e5;
    text-align: center;
    border-radius: 5px;
  }
  
  .brand-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .brand-item {
    margin: 10px;
    padding: 5px;
  }
  
  .brand-link {
    text-decoration: none;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .brand-link:hover {
    background-color: #2980b9;
  }
  /* Стили для корзины */
.cart {
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 1200px;
	margin: 20px auto;
  }
  
  .cart h1 {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 20px;
	color: #333;
  }
  
  /* Стили для пустой корзины */
  .cart p {
	color: #777;
	font-size: 1.2rem;
	text-align: center;
  }
  
  /* Стили для списка товаров в корзине */
  .cart ul {
	list-style: none;
	padding: 0;
  }
  
  .cart li {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	padding: 20px;
	margin-bottom: 10px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .cart li:hover {
	background-color: #f1f1f1;
	transition: background-color 0.3s;
  }
  
  /* Изображение товара */
  .cart li img {
	width: 100px;
	height: auto;
	border-radius: 4px;
	margin-right: 20px;
  }
  
  /* Информация о товаре */
  .cart li h3 {
	font-size: 1.1rem;
	font-weight: 500;
	color: #333;
	margin-bottom: 5px;
  }
  
  .cart li p {
	color: #666;
	font-size: 1rem;
	margin-bottom: 10px;
  }
  
  /* Кнопка удаления */
  .cart li button {
	background-color: #e74c3c;
	color: white;
	padding: 8px 16px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
  }
  
  .cart li button:hover {
	background-color: #c0392b;
  }
  
  .cart li button:focus {
	outline: none;
  }
  `, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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;CAC7B;CACA;EACC,4BAA4B;CAC7B;CACA;EACC,4BAA4B;CAC7B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,yBAAyB;CAC1B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,2BAA2B;CAC5B;AACD;;AAEA;CACC;EACC,+BAA+B;CAChC;CACA;EACC,gCAAgC;CACjC;CACA;EACC,gCAAgC;CACjC;CACA;EACC,gCAAgC;CACjC;CACA;EACC,iCAAiC;CAClC;CACA;EACC,yBAAyB;CAC1B;CACA;EACC,iCAAiC;CAClC;CACA;EACC,+BAA+B;CAChC;AACD;;AAEA;CACC;EACC,4BAA4B;CAC7B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,8BAA8B;CAC/B;CACA;EACC,yBAAyB;CAC1B;CACA;EACC,8BAA8B;CAC/B;CACA;EACC,4BAA4B;CAC7B;AACD;;AAEA;CACC;EACC,uBAAuB;CACxB;CACA;EACC,yBAAyB;CAC1B;AACD;;AAEA;CACC;EACC,0BAA0B;CAC3B;CACA;EACC,4BAA4B;CAC7B;AACD;;AAEA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,6BAA6B;CAC9B;AACD;;AAEA;CACC;EACC,+BAA+B;CAChC;CACA;EACC,iCAAiC;CAClC;AACD;;AAEA;CACC;EACC,4BAA4B;CAC7B;CACA;EACC,8BAA8B;CAC/B;AACD;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;EAC3B;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,wCAAwC;EAC1C;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,iBAAiB;IACjB,gBAAgB;EAClB;EACA,oBAAoB;;AAEtB,6BAA6B;AAC7B;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,uBAAuB;EACzB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,qBAAqB;IACrB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,sCAAsC;EACxC;;EAEA;IACE,yBAAyB;EAC3B;EACA,sBAAsB;AACxB;CACC,aAAa;CACb,yBAAyB;CACzB,kBAAkB;CAClB,wCAAwC;CACxC,iBAAiB;CACjB,iBAAiB;EAChB;;EAEA;CACD,eAAe;CACf,iBAAiB;CACjB,mBAAmB;CACnB,WAAW;EACV;;EAEA,6BAA6B;EAC7B;CACD,WAAW;CACX,iBAAiB;CACjB,kBAAkB;EACjB;;EAEA,uCAAuC;EACvC;CACD,gBAAgB;CAChB,UAAU;EACT;;EAEA;CACD,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,sBAAsB;CACtB,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,wCAAwC;EACvC;;EAEA;CACD,yBAAyB;CACzB,iCAAiC;EAChC;;EAEA,uBAAuB;EACvB;CACD,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;EACjB;;EAEA,wBAAwB;EACxB;CACD,iBAAiB;CACjB,gBAAgB;CAChB,WAAW;CACX,kBAAkB;EACjB;;EAEA;CACD,WAAW;CACX,eAAe;CACf,mBAAmB;EAClB;;EAEA,oBAAoB;EACpB;CACD,yBAAyB;CACzB,YAAY;CACZ,iBAAiB;CACjB,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,sCAAsC;EACrC;;EAEA;CACD,yBAAyB;EACxB;;EAEA;CACD,aAAa;EACZ","sourcesContent":["body {\r\n    font-family: Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  .header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color:#007bff;\r\n    color: white;\r\n    padding: 10px 20px;\r\n  }\r\n  \r\n  .header-logo a {\r\n    color: white;\r\n    text-decoration: none;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .header-actions a {\r\n    color: white;\r\n    text-decoration: none;\r\n    margin-left: 20px;\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  .header-actions a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  \r\n  .car-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 20px;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .car-card {\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    padding: 16px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .car-card img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .car-card button {\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 8px 16px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .car-card button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  .cart {\r\n    padding: 20px;\r\n  }\r\n  \r\n  .cart ul {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .cart li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .cart li img {\r\n    border-radius: 4px;\r\n  }\r\n  .cart-item-enter {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .cart-item-enter-active {\r\n    opacity: 1;\r\n    transition: opacity 300ms;\r\n  }\r\n  \r\n  .cart-item-exit {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .cart-item-exit-active {\r\n    opacity: 0;\r\n    transition: opacity 300ms;\r\n  }\r\n  #cssload-wrapper {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tz-index: 15;\r\n\toverflow: hidden;\r\n}\r\n\r\n.cssload-loader {\r\n\twidth: 413px;\r\n\theight: 413px;\r\n\tborder: 3px rgb(0,0,0) solid;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin: -206px 0 0 -206px;\r\n\tborder-radius: 50%;\r\n\t\t-o-border-radius: 50%;\r\n\t\t-ms-border-radius: 50%;\r\n\t\t-webkit-border-radius: 50%;\r\n\t\t-moz-border-radius: 50%;\r\n}\r\n\r\n.cssload-loader .cssload-loading {\r\n\tfont-size: 28px;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tline-height: 39px;\r\n\tfont-family: 'Century Gothic', sans-serif;\r\n\tfont-style: italic;\r\n\tleft: 0;\r\n\ttop: 50%;\r\n\tmargin-top: 55px;\r\n\tcolor: rgb(0,0,0);\r\n\tfont-weight: bold;\r\n\ttext-transform: uppercase;\r\n\t\t-o-text-transform: uppercase;\r\n\t\t-ms-text-transform: uppercase;\r\n\t\t-webkit-text-transform: uppercase;\r\n\t\t-moz-text-transform: uppercase;\r\n}\r\n\r\n.cssload-loader-circle-1 {\r\n\twidth: 380px;\r\n\theight: 380px;\r\n\tleft: 14px;\r\n\ttop: 14px;\r\n\tborder: 3px rgb(0,0,0) solid;\r\n\tposition: absolute;\r\n\tborder-right-color: transparent;\r\n\tborder-radius: 50%;\r\n\t\t-o-border-radius: 50%;\r\n\t\t-ms-border-radius: 50%;\r\n\t\t-webkit-border-radius: 50%;\r\n\t\t-moz-border-radius: 50%;\r\n\tanimation: spin 6.15s linear infinite;\r\n\t\t-o-animation: spin 6.15s linear infinite;\r\n\t\t-ms-animation: spin 6.15s linear infinite;\r\n\t\t-webkit-animation: spin 6.15s linear infinite;\r\n\t\t-moz-animation: spin 6.15s linear infinite;\r\n}\r\n\r\n.cssload-loader-circle-2 {\r\n\twidth: 347px;\r\n\theight: 347px;\r\n\tleft: 14px;\r\n\ttop: 14px;\r\n\tborder: 3px transparent solid;\r\n\tposition: absolute;\r\n\tborder-right-color: rgb(232,21,18);\r\n\tborder-radius: 50%;\r\n\t\t-o-border-radius: 50%;\r\n\t\t-ms-border-radius: 50%;\r\n\t\t-webkit-border-radius: 50%;\r\n\t\t-moz-border-radius: 50%;\r\n\tanimation: spin 10.25s linear infinite;\r\n\t\t-o-animation: spin 10.25s linear infinite;\r\n\t\t-ms-animation: spin 10.25s linear infinite;\r\n\t\t-webkit-animation: spin 10.25s linear infinite;\r\n\t\t-moz-animation: spin 10.25s linear infinite;\r\n}\r\n\r\n.cssload-loader .cssload-line {\r\n\twidth: 28px;\r\n\theight: 6px;\r\n\tbackground: rgb(0,0,0);\r\n\tposition: absolute;\r\n}\r\n\r\n.cssload-loader .cssload-line:nth-child(1) {\r\n\tleft: 44px;\r\n\ttop: 50%;\r\n\tmargin-top: -3px;\r\n}\r\n\r\n.cssload-loader .cssload-line:nth-child(2) {\r\n\ttransform: rotate(45deg);\r\n\t\t-o-transform: rotate(45deg);\r\n\t\t-ms-transform: rotate(45deg);\r\n\t\t-webkit-transform: rotate(45deg);\r\n\t\t-moz-transform: rotate(45deg);\r\n\tleft: 91px;\r\n\ttop: 91px;\r\n}\r\n\r\n.cssload-loader .cssload-line:nth-child(3) {\r\n\ttop: 44px;\r\n\tleft: 50%;\r\n\twidth: 6px;\r\n\theight: 28px;\r\n}\r\n\r\n.cssload-loader .cssload-line:nth-child(4) {\r\n\ttransform: rotate(135deg);\r\n\t\t-o-transform: rotate(135deg);\r\n\t\t-ms-transform: rotate(135deg);\r\n\t\t-webkit-transform: rotate(135deg);\r\n\t\t-moz-transform: rotate(135deg);\r\n\tright: 91px;\r\n\ttop: 91px;\r\n}\r\n\r\n.cssload-loader .cssload-line:nth-child(5) {\r\n\tright: 44px;\r\n\ttop: 50%;\r\n\tmargin-top: -3px;\r\n}\r\n\r\n.cssload-loader .cssload-line:nth-child(6) {\r\n\ttransform: rotate(45deg);\r\n\t\t-o-transform: rotate(45deg);\r\n\t\t-ms-transform: rotate(45deg);\r\n\t\t-webkit-transform: rotate(45deg);\r\n\t\t-moz-transform: rotate(45deg);\r\n\tright: 91px;\r\n\tbottom: 91px;\r\n\tbackground: rgb(232,21,18);\r\n}\r\n\r\n.cssload-loader .cssload-subline {\r\n\tposition: absolute;\r\n\twidth: 8px;\r\n\theight: 6px;\r\n\tbackground: rgb(0,0,0);\r\n}\r\n\r\n.cssload-loader .cssload-subline:nth-child(7) {\r\n\ttransform: rotate(22.5deg);\r\n\t\t-o-transform: rotate(22.5deg);\r\n\t\t-ms-transform: rotate(22.5deg);\r\n\t\t-webkit-transform: rotate(22.5deg);\r\n\t\t-moz-transform: rotate(22.5deg);\r\n\tleft: 58px;\r\n\ttop: 138px;\r\n}\r\n\r\n.cssload-loader .cssload-subline:nth-child(8) {\r\n\ttransform: rotate(67.5deg);\r\n\t\t-o-transform: rotate(67.5deg);\r\n\t\t-ms-transform: rotate(67.5deg);\r\n\t\t-webkit-transform: rotate(67.5deg);\r\n\t\t-moz-transform: rotate(67.5deg);\r\n\tleft: 138px;\r\n\ttop: 58px;\r\n}\r\n\r\n.cssload-loader .cssload-subline:nth-child(9) {\r\n\ttransform: rotate(112.5deg);\r\n\t\t-o-transform: rotate(112.5deg);\r\n\t\t-ms-transform: rotate(112.5deg);\r\n\t\t-webkit-transform: rotate(112.5deg);\r\n\t\t-moz-transform: rotate(112.5deg);\r\n\tright: 138px;\r\n\ttop: 58px;\r\n}\r\n\r\n.cssload-loader .cssload-subline:nth-child(10) {\r\n\ttransform: rotate(157.5deg);\r\n\t\t-o-transform: rotate(157.5deg);\r\n\t\t-ms-transform: rotate(157.5deg);\r\n\t\t-webkit-transform: rotate(157.5deg);\r\n\t\t-moz-transform: rotate(157.5deg);\r\n\tright: 58px;\r\n\ttop: 138px;\r\n}\r\n\r\n.cssload-loader .cssload-subline:nth-child(11) {\r\n\ttransform: rotate(22.5deg);\r\n\t\t-o-transform: rotate(22.5deg);\r\n\t\t-ms-transform: rotate(22.5deg);\r\n\t\t-webkit-transform: rotate(22.5deg);\r\n\t\t-moz-transform: rotate(22.5deg);\r\n\tright: 55px;\r\n\tbottom: 135px;\r\n\tbackground: rgb(232,21,18);\r\n}\r\n\r\n.cssload-loader .cssload-needle {\r\n\twidth: 39px;\r\n\theight: 39px;\r\n\tborder: 3px rgb(0,0,0) solid;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin: -22px 0 0 -22px;\r\n\tz-index: 1;\r\n\tborder-radius: 50%;\r\n\t\t-o-border-radius: 50%;\r\n\t\t-ms-border-radius: 50%;\r\n\t\t-webkit-border-radius: 50%;\r\n\t\t-moz-border-radius: 50%;\r\n\tanimation: pegIt 6.15s infinite ease-in-out;\r\n\t\t-o-animation: pegIt 6.15s infinite ease-in-out;\r\n\t\t-ms-animation: pegIt 6.15s infinite ease-in-out;\r\n\t\t-webkit-animation: pegIt 6.15s infinite ease-in-out;\r\n\t\t-moz-animation: pegIt 6.15s infinite ease-in-out;\r\n}\r\n\r\n.cssload-loader .cssload-needle:before {\r\n\tcontent: \"\";\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 9.5px 138px 9.5px 0;\r\n\tborder-color: transparent rgb(232,21,18) transparent transparent;\r\n\tposition: absolute;\r\n\tright: 50%;\r\n\ttop: 50%;\r\n\tmargin: -9.5px 0 0 0;\r\n\tborder-radius: 0 50% 50% 0;\r\n\t\t-o-border-radius: 0 50% 50% 0;\r\n\t\t-ms-border-radius: 0 50% 50% 0;\r\n\t\t-webkit-border-radius: 0 50% 50% 0;\r\n\t\t-moz-border-radius: 0 50% 50% 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@keyframes pegIt {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t16% {\r\n\t\ttransform: rotate(75deg);\r\n\t}\r\n\t25% {\r\n\t\ttransform: rotate(55deg);\r\n\t}\r\n\t30% {\r\n\t\ttransform: rotate(90deg);\r\n\t}\r\n\t36% {\r\n\t\ttransform: rotate(170deg);\r\n\t}\r\n\t42% {\r\n\t\ttransform: rotate(150deg);\r\n\t}\r\n\t50% {\r\n\t\ttransform: rotate(227deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n}\r\n\r\n@-o-keyframes pegIt {\r\n\t0% {\r\n\t\t-o-transform: rotate(0deg);\r\n\t}\r\n\t16% {\r\n\t\t-o-transform: rotate(75deg);\r\n\t}\r\n\t25% {\r\n\t\t-o-transform: rotate(55deg);\r\n\t}\r\n\t30% {\r\n\t\t-o-transform: rotate(90deg);\r\n\t}\r\n\t36% {\r\n\t\t-o-transform: rotate(170deg);\r\n\t}\r\n\t42% {\r\n\t\ttransform: rotate(150deg);\r\n\t}\r\n\t50% {\r\n\t\t-o-transform: rotate(227deg);\r\n\t}\r\n\t100% {\r\n\t\t-o-transform: rotate(0deg);\r\n\t}\r\n}\r\n\r\n@-ms-keyframes pegIt {\r\n\t0% {\r\n\t\t-ms-transform: rotate(0deg);\r\n\t}\r\n\t16% {\r\n\t\t-ms-transform: rotate(75deg);\r\n\t}\r\n\t25% {\r\n\t\t-ms-transform: rotate(55deg);\r\n\t}\r\n\t30% {\r\n\t\t-ms-transform: rotate(90deg);\r\n\t}\r\n\t36% {\r\n\t\t-ms-transform: rotate(170deg);\r\n\t}\r\n\t42% {\r\n\t\ttransform: rotate(150deg);\r\n\t}\r\n\t50% {\r\n\t\t-ms-transform: rotate(227deg);\r\n\t}\r\n\t100% {\r\n\t\t-ms-transform: rotate(0deg);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes pegIt {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t}\r\n\t16% {\r\n\t\t-webkit-transform: rotate(75deg);\r\n\t}\r\n\t25% {\r\n\t\t-webkit-transform: rotate(55deg);\r\n\t}\r\n\t30% {\r\n\t\t-webkit-transform: rotate(90deg);\r\n\t}\r\n\t36% {\r\n\t\t-webkit-transform: rotate(170deg);\r\n\t}\r\n\t42% {\r\n\t\ttransform: rotate(150deg);\r\n\t}\r\n\t50% {\r\n\t\t-webkit-transform: rotate(227deg);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t}\r\n}\r\n\r\n@-moz-keyframes pegIt {\r\n\t0% {\r\n\t\t-moz-transform: rotate(0deg);\r\n\t}\r\n\t16% {\r\n\t\t-moz-transform: rotate(75deg);\r\n\t}\r\n\t25% {\r\n\t\t-moz-transform: rotate(55deg);\r\n\t}\r\n\t30% {\r\n\t\t-moz-transform: rotate(90deg);\r\n\t}\r\n\t36% {\r\n\t\t-moz-transform: rotate(170deg);\r\n\t}\r\n\t42% {\r\n\t\ttransform: rotate(150deg);\r\n\t}\r\n\t50% {\r\n\t\t-moz-transform: rotate(227deg);\r\n\t}\r\n\t100% {\r\n\t\t-moz-transform: rotate(0deg);\r\n\t}\r\n}\r\n\r\n@keyframes spin {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@-o-keyframes spin {\r\n\t0% {\r\n\t\t-o-transform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-o-transform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@-ms-keyframes spin {\r\n\t0% {\r\n\t\t-ms-transform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-ms-transform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@-moz-keyframes spin {\r\n\t0% {\r\n\t\t-moz-transform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-moz-transform: rotate(360deg);\r\n\t}\r\n}\r\n.login-page {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n    background-color: #f4f4f9;\r\n  }\r\n  \r\n  .login-form-container {\r\n    width: 400px;\r\n    padding: 30px;\r\n    background: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .login-form-container h1 {\r\n    font-size: 1.8rem;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    color: #333;\r\n  }\r\n  \r\n  .login-form-container form {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .login-form-container label {\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    color: #555;\r\n  }\r\n  \r\n  .login-form-container input {\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  .login-form-container input:focus {\r\n    border-color: #007bff;\r\n    outline: none;\r\n  }\r\n  \r\n  .login-form-container button {\r\n    padding: 10px 15px;\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .login-form-container button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  .login-form-container p {\r\n    text-align: center;\r\n    color: red;\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n  }\r\n  /* styles/main.css */\r\n\r\n/* Стили для списка брендов */\r\n.brand-list-container {\r\n    padding: 20px;\r\n    background-color: #f7e5e5;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .brand-list {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .brand-item {\r\n    margin: 10px;\r\n    padding: 5px;\r\n  }\r\n  \r\n  .brand-link {\r\n    text-decoration: none;\r\n    padding: 10px 20px;\r\n    background-color: #3498db;\r\n    color: white;\r\n    border-radius: 5px;\r\n    transition: background-color 0.3s ease;\r\n  }\r\n  \r\n  .brand-link:hover {\r\n    background-color: #2980b9;\r\n  }\r\n  /* Стили для корзины */\r\n.cart {\r\n\tpadding: 20px;\r\n\tbackground-color: #f9f9f9;\r\n\tborder-radius: 8px;\r\n\tbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n\tmax-width: 1200px;\r\n\tmargin: 20px auto;\r\n  }\r\n  \r\n  .cart h1 {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n\tcolor: #333;\r\n  }\r\n  \r\n  /* Стили для пустой корзины */\r\n  .cart p {\r\n\tcolor: #777;\r\n\tfont-size: 1.2rem;\r\n\ttext-align: center;\r\n  }\r\n  \r\n  /* Стили для списка товаров в корзине */\r\n  .cart ul {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n  }\r\n  \r\n  .cart li {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tbackground-color: #fff;\r\n\tpadding: 20px;\r\n\tmargin-bottom: 10px;\r\n\tborder-radius: 8px;\r\n\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .cart li:hover {\r\n\tbackground-color: #f1f1f1;\r\n\ttransition: background-color 0.3s;\r\n  }\r\n  \r\n  /* Изображение товара */\r\n  .cart li img {\r\n\twidth: 100px;\r\n\theight: auto;\r\n\tborder-radius: 4px;\r\n\tmargin-right: 20px;\r\n  }\r\n  \r\n  /* Информация о товаре */\r\n  .cart li h3 {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 500;\r\n\tcolor: #333;\r\n\tmargin-bottom: 5px;\r\n  }\r\n  \r\n  .cart li p {\r\n\tcolor: #666;\r\n\tfont-size: 1rem;\r\n\tmargin-bottom: 10px;\r\n  }\r\n  \r\n  /* Кнопка удаления */\r\n  .cart li button {\r\n\tbackground-color: #e74c3c;\r\n\tcolor: white;\r\n\tpadding: 8px 16px;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\tcursor: pointer;\r\n\ttransition: background-color 0.3s ease;\r\n  }\r\n  \r\n  .cart li button:hover {\r\n\tbackground-color: #c0392b;\r\n  }\r\n  \r\n  .cart li button:focus {\r\n\toutline: none;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject"] = self["webpackChunkproject"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Snackbar_Snackba-fb2622"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNGQUFzRixZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFB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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL0JyYW5kTGlzdC5qc3giLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL0NhckNhcmQuanN4Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCYXIuanN4Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvcGFnZXMvQ2FyTGlzdFBhZ2UuanN4Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvcGFnZXMvQ2FydFBhZ2UuanN4Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvcGFnZXMvTG9naW5QYWdlLmpzeCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3JlZHV4L3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBDYXJMaXN0UGFnZSBmcm9tICcuL3BhZ2VzL0Nhckxpc3RQYWdlJztcclxuaW1wb3J0IENhcnRQYWdlIGZyb20gJy4vcGFnZXMvQ2FydFBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxDYXJMaXN0UGFnZSAvPn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0XCIgZWxlbWVudD17PENhcnRQYWdlIC8+fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSAvPn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJzL2JyYW5kLzpicmFuZFwiIGVsZW1lbnQ9ezxDYXJMaXN0UGFnZSAvPn0gLz4gXHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgYnJhbmRzID0gW1xyXG4gICdBdWRpJywgJ0JNVycsICdSZW5hdWx0JywgJ1BldWdlb3QnLCAnTWVyY2VkZXMtQmVueicsICdWb2xrc3dhZ2VuJyxcclxuICAnRmVycmFyaScsICdUb3lvdGEnLCAnSG9uZGEnLCAnRm9yZCcsICdDaGV2cm9sZXQnLCAnTmlzc2FuJywgJ01hemRhJywgJ0h5dW5kYWknLCAnS2lhJywgJ0NpdHJvw6tuJywgJ1N1YmFydScsICdUZXNsYScsICdMZXh1cycsICdJbmZpbml0aScsICdDYWRpbGxhYydcclxuXTtcclxuXHJcbmNvbnN0IEJyYW5kTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICA8aDI+0JLRi9Cx0LXRgNC40YLQtSDQsdGA0LXQvdC0PC9oMj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImJyYW5kLWxpc3RcIj5cclxuICAgICAgICB7YnJhbmRzLm1hcCgoYnJhbmQpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2JyYW5kfSBjbGFzc05hbWU9XCJicmFuZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NhcnMvYnJhbmQvJHticmFuZC50b0xvd2VyQ2FzZSgpfWB9IGNsYXNzTmFtZT1cImJyYW5kLWxpbmtcIj5cclxuICAgICAgICAgICAgICB7YnJhbmR9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uLCBTbmFja2JhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuY29uc3QgQ2FyQ2FyZCA9ICh7IGNhciwgb25BZGRUb0NhcnQgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgudXNlcik7IC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC10LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQtyDRgdC+0YHRgtC+0Y/QvdC40Y9cclxuICBjb25zdCBbb3BlblNuYWNrYmFyLCBzZXRPcGVuU25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBvbkFkZFRvQ2FydCh1c2VyLmlkLCBjYXIpOyAvLyDQn9C10YDQtdC00LDQtdC8IHVzZXIuaWQg0LggY2FyINCyINGE0YPQvdC60YbQuNGOXHJcbiAgICAgIHNldE9wZW5TbmFja2Jhcih0cnVlKTsgLy8g0J/QvtC60LDQt9GL0LLQsNC10Lwg0YPQstC10LTQvtC80LvQtdC90LjQtVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlU25hY2tiYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuU25hY2tiYXIoZmFsc2UpOyAvLyDQl9Cw0LrRgNGL0LLQsNC10Lwg0YPQstC10LTQvtC80LvQtdC90LjQtVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1jYXJkXCI+XHJcbiAgICAgIDxpbWcgc3JjPXtjYXIuaW1hZ2V9IGFsdD17Y2FyLm1vZGVsfSB3aWR0aD17MjAwfSAvPlxyXG4gICAgICA8aDM+e2Nhci5icmFuZH0ge2Nhci5tb2RlbH08L2gzPlxyXG4gICAgICA8cD7Qk9C+0LQg0LLRi9C/0YPRgdC60LA6IHtjYXIueWVhciB8fCAn0J3QtSDRg9C60LDQt9Cw0L0nfTwvcD5cclxuICAgICAgPHA+0KHRgtC+0LjQvNC+0YHRgtGMOiAke2Nhci5wcmljZSA/IGNhci5wcmljZS50b0xvY2FsZVN0cmluZygpIDogJ9Cd0LUg0YPQutCw0LfQsNC90L4nfTwvcD5cclxuICAgICAgPHA+0KLQuNC/INC00LLQuNCz0LDRgtC10LvRjzoge2Nhci50eXBlIHx8ICfQndC1INGD0LrQsNC30LDQvdC+J308L3A+XHJcbiAgICAgIDxwPtCf0YDQvtCx0LXQszoge2Nhci5taWxlYWdlID8gYCR7Y2FyLm1pbGVhZ2UudG9Mb2NhbGVTdHJpbmcoKX0g0LrQvGAgOiAn0J3QtSDRg9C60LDQt9Cw0L3Qvid9PC9wPlxyXG4gICAgICA8cD57Y2FyLmRlc2NyaXB0aW9uIHx8ICcnfTwvcD5cclxuICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQWRkVG9DYXJ0fT5cclxuICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBhZGQgdG8gY2FydDwvcD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e29wZW5TbmFja2Jhcn1cclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlU25hY2tiYXJ9XHJcbiAgICAgICAgbWVzc2FnZT1cItCi0L7QstCw0YAg0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3RgyFcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhckNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpbHRlckJhciA9ICh7IG9uRmlsdGVyQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbbWluUHJpY2UsIHNldE1pblByaWNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYnJhbmQsIHNldEJyYW5kXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgb25GaWx0ZXJDaGFuZ2UoeyBtaW5QcmljZSwgbWF4UHJpY2UsIGJyYW5kIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1iYXJcIj5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIE1pbiBQcmljZTpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e21pblByaWNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNaW5QcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbiBwcmljZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIE1heCBQcmljZTpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e21heFByaWNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYXhQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1heCBwcmljZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIEJyYW5kOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2JyYW5kfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCcmFuZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJyYW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckNoYW5nZX0+QXBwbHkgRmlsdGVyczwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5Vc2VkIENhcnMgU3RvcmU8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvY2FydFwiPkNhcnQ8L0xpbms+XHJcbiAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3Bhbj57dXNlci51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoeyB0b3RhbEl0ZW1zLCBpdGVtc1BlclBhZ2UsIGN1cnJlbnRQYWdlLCBvblBhZ2VDaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIGl0ZW1zUGVyUGFnZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChwYWdlTnVtYmVyKSA9PiB7XHJcbiAgICBvblBhZ2VDaGFuZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDbGljayhjdXJyZW50UGFnZSAtIDEpfVxyXG4gICAgICA+XHJcbiAgICAgICAg0J/RgNC10LTRi9C00YPRidCw0Y9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzcGFuPtCh0YLRgNCw0L3QuNGG0LAge2N1cnJlbnRQYWdlfSDQuNC3IHt0b3RhbFBhZ2VzfSA8L3NwYW4+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNsaWNrKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAgID5cclxuICAgICAgICDQodC70LXQtNGD0Y7RidCw0Y9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiXHJcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IGNoZWNrQXV0aCB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xyXG5cclxuc3RvcmUuZGlzcGF0Y2goY2hlY2tBdXRoKCkpOyAvLyDQvdCw0LTQviDQv9GA0L7QstC10YDQuNGC0Ywg0LDQstGC0L7RgNC40LfQsNGG0LjRjiDQv9GA0Lgg0LfQsNC/0YPRgdC60LVcclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5cclxucm9vdC5yZW5kZXIoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+XHJcbik7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBmZXRjaENhcnMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NhckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zJztcclxuaW1wb3J0IENhckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJDYXJkJztcclxuaW1wb3J0IEZpbHRlckJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlckJhcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQnJhbmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQnJhbmRMaXN0JztcclxuXHJcbmNvbnN0IENhckxpc3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGNhcnMsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJzKTtcclxuICBjb25zdCBbZmlsdGVyZWRDYXJzLCBzZXRGaWx0ZXJlZENhcnNdID0gdXNlU3RhdGUoY2Fycyk7XHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgbWluUHJpY2U6ICcnLFxyXG4gICAgbWF4UHJpY2U6ICcnLFxyXG4gICAgYnJhbmQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaXRlbXNQZXJQYWdlID0gNTA7XHJcblxyXG4gIC8v0L/QvtC70YPRh9Cw0LXQvCDQv9Cw0YDQsNC80LXRgtGAIGJyYW5kINC40LcgVVJMXHJcbiAgY29uc3QgeyBicmFuZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaENhcnMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL9GE0LjQu9GM0YDQsNGG0LjRjyDQtNCw0L3QvdGL0YVcclxuICAgIGNvbnN0IGFwcGx5RmlsdGVycyA9ICgpID0+IHtcclxuICAgICAgbGV0IGZpbHRlcmVkID0gY2FycztcclxuXHJcbiAgICAgIC8v0YTQuNC70YzRgtGA0LDRhtC40Y8g0L/QviDRhtC10L3QtVxyXG4gICAgICBpZiAoZmlsdGVycy5taW5QcmljZSkge1xyXG4gICAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKGNhciA9PiBjYXIucHJpY2UgPj0gZmlsdGVycy5taW5QcmljZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWx0ZXJzLm1heFByaWNlKSB7XHJcbiAgICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIoY2FyID0+IGNhci5wcmljZSA8PSBmaWx0ZXJzLm1heFByaWNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g0YTQuNC70YLRgCDQv9C+INCx0YDQtdC90LTRgyDQuNC3INGB0L7RgdGC0L7Rj9C90LjRj1xyXG4gICAgICBpZiAoZmlsdGVycy5icmFuZCkge1xyXG4gICAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKGNhciA9PiBjYXIuYnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJzLmJyYW5kLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/RhNC40LvRgtGAINC/0L4g0LHRgNC10L3QtNGDINC40Lcg0YPRgNC70LBcclxuICAgICAgaWYgKGJyYW5kKSB7XHJcbiAgICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIoY2FyID0+IGNhci5icmFuZC50b0xvd2VyQ2FzZSgpID09PSBicmFuZC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0RmlsdGVyZWRDYXJzKGZpbHRlcmVkKTtcclxuICAgIH07XHJcblxyXG4gICAgYXBwbHlGaWx0ZXJzKCk7XHJcbiAgfSwgW2NhcnMsIGZpbHRlcnMsIGJyYW5kXSk7IC8v0L/RgNC40LzQtdC90Y/QtdC8INGE0LjQu9GM0YLRgNGLLCDQtdGB0LvQuCBjYXJzIGJyYW5kINC40LfQvNC10L3Rj9GC0YHRj1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBjYXIgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGNhcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IChuZXdGaWx0ZXJzKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJzKG5ld0ZpbHRlcnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcikgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5kZXhPZkxhc3RJdGVtID0gY3VycmVudFBhZ2UgKiBpdGVtc1BlclBhZ2U7XHJcbiAgY29uc3QgaW5kZXhPZkZpcnN0SXRlbSA9IGluZGV4T2ZMYXN0SXRlbSAtIGl0ZW1zUGVyUGFnZTtcclxuICBjb25zdCBjdXJyZW50Q2FycyA9IGZpbHRlcmVkQ2Fycy5zbGljZShpbmRleE9mRmlyc3RJdGVtLCBpbmRleE9mTGFzdEl0ZW0pO1xyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3NzbG9hZC1sb2FkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLXN1YmxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLXN1YmxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLXN1YmxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLXN1YmxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLXN1YmxpbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLWxvYWRlci1jaXJjbGUtMVwiPjxkaXYgY2xhc3NOYW1lPVwiY3NzbG9hZC1sb2FkZXItY2lyY2xlLTJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3Nsb2FkLW5lZWRsZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzc2xvYWQtbG9hZGluZ1wiPtCX0LDQs9GA0YPQt9C60LAuLi48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QnJhbmRMaXN0IC8+IFxyXG4gICAgICA8RmlsdGVyQmFyIG9uRmlsdGVyQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWxpc3RcIj5cclxuICAgICAgICB7Y3VycmVudENhcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGN1cnJlbnRDYXJzLm1hcChjYXIgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyQ2FyZCBrZXk9e2Nhci5pZH0gY2FyPXtjYXJ9IG9uQWRkVG9DYXJ0PXsoKSA9PiBoYW5kbGVBZGRUb0NhcnQoY2FyKX0gLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPtCd0LXRgiDQsNCy0YLQvtC80L7QsdC40LvQtdC5INC00LvRjyDQstGL0LHRgNCw0L3QvdC+0LPQviDQsdGA0LXQvdC00LAuPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgIHRvdGFsSXRlbXM9e2ZpbHRlcmVkQ2Fycy5sZW5ndGh9XHJcbiAgICAgICAgaXRlbXNQZXJQYWdlPXtpdGVtc1BlclBhZ2V9XHJcbiAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJMaXN0UGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQ2FydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IFt1c2VyQ2FydCwgc2V0VXNlckNhcnRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC60L7RgNC30LjQvdGLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gIGNvbnN0IGZldGNoVXNlckNhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vINCX0LDQv9GA0L7RgSDQvdCwINC/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1LCDQstC60LvRjtGH0LDRjyDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2Vycy8ke3VzZXIuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5jYXJ0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyQ2FydChkYXRhLmNhcnQpOyAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LrQvtGA0LfQuNC90YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFVzZXJDYXJ0KFtdKTsgIC8vINCV0YHQu9C4INC60L7RgNC30LjQvdCwINC/0YPRgdGC0LDRj1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcidzIGNhcnQ6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBmZXRjaFVzZXJDYXJ0KCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgLy8g0KPQtNCw0LvQtdC90LjQtSDRgtC+0LLQsNGA0LAg0LjQtyDQutC+0YDQt9C40L3Ri1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZyb21DYXJ0ID0gYXN5bmMgKGNhcklkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDQo9C00LDQu9C10L3QuNC1INGC0L7QstCw0YDQsCDQuNC3INC60L7RgNC30LjQvdGLXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2Vycy8ke3VzZXIuaWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgY2FydDogdXNlckNhcnQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gY2FySWQpLCAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LrQvtGA0LfQuNC90YNcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQutC+0YDQt9C40L3RgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QvtGB0LvQtSDRg9C00LDQu9C10L3QuNGPINGC0L7QstCw0YDQsFxyXG4gICAgICAgIHNldFVzZXJDYXJ0KHVzZXJDYXJ0LmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGNhcklkKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHJlbW92ZSBpdGVtIGZyb20gY2FydCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW1vdmluZyBpdGVtIGZyb20gY2FydDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICA8aDE+0JrQvtGA0LfQuNC90LA8L2gxPlxyXG4gICAgICB7dXNlckNhcnQubGVuZ3RoID4gMCA/IChcclxuICAgICAgICB1c2VyQ2FydC5tYXAoKGNhcikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2Nhci5pZH0gY2xhc3NOYW1lPVwiY2FydC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjYXIuaW1hZ2V9IGFsdD17Y2FyLm1vZGVsfSB3aWR0aD17MTAwfSAvPlxyXG4gICAgICAgICAgICA8aDM+e2Nhci5icmFuZH0ge2Nhci5tb2RlbH08L2gzPlxyXG4gICAgICAgICAgICA8cD7Qk9C+0LQg0LLRi9C/0YPRgdC60LA6IHtjYXIueWVhcn08L3A+XHJcbiAgICAgICAgICAgIDxwPtCh0YLQvtC40LzQvtGB0YLRjDogJHtjYXIucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZyb21DYXJ0KGNhci5pZCl9PtCj0LTQsNC70LjRgtGMINC40Lcg0LrQvtGA0LfQuNC90Ys8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+0JLQsNGI0LAg0LrQvtGA0LfQuNC90LAg0L/Rg9GB0YLQsC48L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8g0JXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGD0LbQtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9LCDQv9C10YDQtdC90LDQv9GA0LDQstC70Y/QtdC8INC10LPQvlxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgIH1cclxuICB9LCBbdXNlciwgbmF2aWdhdGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgVXNlcm5hbWU6XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIFBhc3N3b3JkOlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XHJcbiIsIi8vIGF1dGhBY3Rpb25zLmpzXHJcbmltcG9ydCB7IGZldGNoVXNlckNhcnQgfSBmcm9tICcuL2NhcnRBY3Rpb25zJzsgIFxyXG4vLyBhdXRoQWN0aW9ucy5qc1xyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQtdCz0L4g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC3INGB0L7RgdGC0L7Rj9C90LjRj1xyXG4gICAgY29uc3QgdXNlcklkID0gZ2V0U3RhdGUoKS5hdXRoLnVzZXI/LmlkO1xyXG5cclxuICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBpcyBsb2dnZWQgaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQo9C00LDQu9GP0LXQvCBsb2dnZWRJblVzZXIg0YEgaWQg0YLQtdC60YPRidC10LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9sb2dnZWRJblVzZXIvJHt1c2VySWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2dvdXQgb24gc2VydmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KPQtNCw0LvRj9C10Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40Lcg0LvQvtC60LDQu9GM0L3QvtCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0dPVVQnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZmFpbGVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuLy8gYXV0aEFjdGlvbnMuanNcclxuZXhwb3J0IGNvbnN0IGNoZWNrQXV0aCA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbG9nZ2VkSW5Vc2VyJyk7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKGxvZ2dlZEluVXNlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBsb2dnZWRJblVzZXJbMF07XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLCBwYXlsb2FkOiB1c2VyIH0pO1xyXG5cclxuICAgICAgLy8g0JfQsNCz0YDRg9C20LDQtdC8INC60L7RgNC30LjQvdGDINC00LvRjyDRgtC10LrRg9GJ0LXQs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICBkaXNwYXRjaChmZXRjaFVzZXJDYXJ0KHVzZXIuaWQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR09VVCcgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGF1dGg6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VycycpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoXHJcbiAgICAgICh1KSA9PiB1LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiB1LnBhc3N3b3JkID09PSBwYXNzd29yZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINCyIGxvZ2dlZEluVXNlclxyXG4gICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2xvZ2dlZEluVXNlcicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLCBwYXlsb2FkOiB1c2VyIH0pO1xyXG5cclxuICAgICAgLy8g0JfQsNCz0YDRg9C20LDQtdC8INC60L7RgNC30LjQvdGDINGC0LXQutGD0YnQtdCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgIGRpc3BhdGNoKGZldGNoVXNlckNhcnQodXNlci5pZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZDonLCBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn07IiwiLy8gY2FyQWN0aW9ucy5qc1xyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnRkVUQ0hfQ0FSU19SRVFVRVNUJyB9KTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhcnMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdGRVRDSF9DQVJTX1NVQ0NFU1MnLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdGRVRDSF9DQVJTX0ZBSUxVUkUnLCBwYXlsb2FkOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuIiwiLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0LIg0LjQt9Cx0YDQsNC90L3QvtC1XHJcbi8vIGNhcnRBY3Rpb25zLmpzXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJDYXJ0ID0gKHVzZXJJZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2Vycy8ke3VzZXJJZH1gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgLy8g0JfQsNCz0YDRg9C30LjQvCDQutC+0YDQt9C40L3RgyDQtNC70Y8g0Y3RgtC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0ZFVENIX1VTRVJfQ0FSVCcsXHJcbiAgICAgIHBheWxvYWQ6IHVzZXIuY2FydCB8fCBbXSwgIC8vINCX0LDQs9GA0YPQttCw0LXQvCDQutC+0YDQt9C40L3RgyDRjdGC0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgY2FydDonLCBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVDYXJ0Rm9yVXNlciA9IChjYXJ0SXRlbXMpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1c2VyIH0gPSBnZXRTdGF0ZSgpLmF1dGg7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhcnQvJHt1c2VyLmlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGNhcnQ6JywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INGC0L7QstCw0YDQsCDQsiDQutC+0YDQt9C40L3RgyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChjYXIpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDRgtC10LrRg9GJ0LXQvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUg0LjQtyBsb2dnZWRJblVzZXJcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gZ2V0U3RhdGUoKS5hdXRoOyAgLy8g0YLQtdC60YPRidC40Lkg0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBsb2dnZWQgaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INGB0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXJzJyk7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyDQndCw0YXQvtC00LjQvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINC60L7RgNC30LjQvdGDINC60L7RgtC+0YDQvtCz0L4g0LHRg9C00LXQvCDQvtCx0L3QvtCy0LvRj9GC0YxcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCgodSkgPT4gdS5pZCA9PT0gdXNlci5pZCk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC90L7QstGL0Lkg0YLQvtCy0LDRgCDQsiDQutC+0YDQt9C40L3RgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0ID0gWy4uLmN1cnJlbnRVc2VyLmNhcnQsIGNhcl07XHJcblxyXG4gICAgLy8g0J7RgtC/0YDQsNCy0LvRj9C10Lwg0LfQsNC/0YDQvtGBINC90LAg0L7QsdC90L7QstC70LXQvdC40LUg0LrQvtGA0LfQuNC90Ysg0Y3RgtC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGNvbnN0IHVwZGF0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2Vycy8ke3VzZXIuaWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhcnQ6IHVwZGF0ZWRDYXJ0IH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1cGRhdGVSZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgY2FydCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCU0LjRgdC/0LDRgtGH0LjQvCDRg9GB0L/QtdGI0L3QvtC1INC+0LHQvdC+0LLQu9C10L3QuNC1INC60L7RgNC30LjQvdGLXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXHJcbiAgICAgIHBheWxvYWQ6IHVwZGF0ZWRDYXJ0LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB0byBjYXJ0OicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vINCj0LTQsNC70LXQvdC40LUg0LjQtyDQutC+0YDQt9C40L3Ri1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FySWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2FydC8ke2NhcklkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnUkVNT1ZFX0ZST01fQ0FSVCcsXHJcbiAgICAgIHBheWxvYWQ6IHVwZGF0ZWRDYXJ0LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGZyb20gY2FydDonLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgYXV0aFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlICdMT0dJTl9TVUNDRVNTJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgY2FzZSAnTE9HT1VUJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4gICIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjYXJzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGNhcnNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdGRVRDSF9DQVJTX1JFUVVFU1QnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9O1xyXG4gICAgY2FzZSAnRkVUQ0hfQ0FSU19TVUNDRVNTJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBjYXJzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAnRkVUQ0hfQ0FSU19GQUlMVVJFJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJzUmVkdWNlcjtcclxuIiwiLy8gY2FydFJlZHVjZXIuanNcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdGRVRDSF9VU0VSX0NBUlQnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXRlbXM6IGFjdGlvbi5wYXlsb2FkIH07ICAvLyDQl9Cw0LPRgNGD0LbQsNC10Lwg0LrQvtGA0LfQuNC90YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF0gfTtcclxuICAgIGNhc2UgJ1JFTU9WRV9GUk9NX0NBUlQnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkKSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBjYXJzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2NhcnNSZWR1Y2VyJztcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvY2FydFJlZHVjZXInO1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hdXRoUmVkdWNlcic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgY2FyczogY2Fyc1JlZHVjZXIsXHJcbiAgY2FydDogY2FydFJlZHVjZXIsXHJcbiAgYXV0aDogYXV0aFJlZHVjZXIsIFxyXG59KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWxvZ28gYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWFjdGlvbnMgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1hY3Rpb25zIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jYXItbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyLWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXItY2FyZCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyLWNhcmQgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhci1jYXJkIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIH1cclxuICBcclxuICAuY2FydCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FydCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcnQgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FydCBsaSBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuY2FydC1pdGVtLWVudGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0LWl0ZW0tZW50ZXItYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gIH1cclxuICBcclxuICAuY2FydC1pdGVtLWV4aXQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcnQtaXRlbS1leGl0LWFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICB9XHJcbiAgI2Nzc2xvYWQtd3JhcHBlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHR6LWluZGV4OiAxNTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3NzbG9hZC1sb2FkZXIge1xyXG5cdHdpZHRoOiA0MTNweDtcclxuXHRoZWlnaHQ6IDQxM3B4O1xyXG5cdGJvcmRlcjogM3B4IHJnYigwLDAsMCkgc29saWQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0b3A6IDUwJTtcclxuXHRtYXJnaW46IC0yMDZweCAwIDAgLTIwNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbG9hZGluZyB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDM5cHg7XHJcblx0Zm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogNTVweDtcclxuXHRjb2xvcjogcmdiKDAsMCwwKTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0LW8tdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdC1tcy10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0LXdlYmtpdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0LW1vei10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY3NzbG9hZC1sb2FkZXItY2lyY2xlLTEge1xyXG5cdHdpZHRoOiAzODBweDtcclxuXHRoZWlnaHQ6IDM4MHB4O1xyXG5cdGxlZnQ6IDE0cHg7XHJcblx0dG9wOiAxNHB4O1xyXG5cdGJvcmRlcjogM3B4IHJnYigwLDAsMCkgc29saWQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YW5pbWF0aW9uOiBzcGluIDYuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1vLWFuaW1hdGlvbjogc3BpbiA2LjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHQtbXMtYW5pbWF0aW9uOiBzcGluIDYuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDYuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1tb3otYW5pbWF0aW9uOiBzcGluIDYuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyLWNpcmNsZS0yIHtcclxuXHR3aWR0aDogMzQ3cHg7XHJcblx0aGVpZ2h0OiAzNDdweDtcclxuXHRsZWZ0OiAxNHB4O1xyXG5cdHRvcDogMTRweDtcclxuXHRib3JkZXI6IDNweCB0cmFuc3BhcmVudCBzb2xpZDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMjMyLDIxLDE4KTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHQtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRhbmltYXRpb246IHNwaW4gMTAuMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1vLWFuaW1hdGlvbjogc3BpbiAxMC4yNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LW1zLWFuaW1hdGlvbjogc3BpbiAxMC4yNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTAuMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1tb3otYW5pbWF0aW9uOiBzcGluIDEwLjI1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1saW5lIHtcclxuXHR3aWR0aDogMjhweDtcclxuXHRoZWlnaHQ6IDZweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLWxpbmU6bnRoLWNoaWxkKDEpIHtcclxuXHRsZWZ0OiA0NHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1saW5lOm50aC1jaGlsZCgyKSB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0bGVmdDogOTFweDtcclxuXHR0b3A6IDkxcHg7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1saW5lOm50aC1jaGlsZCgzKSB7XHJcblx0dG9wOiA0NHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogNnB4O1xyXG5cdGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLWxpbmU6bnRoLWNoaWxkKDQpIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG5cdFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG5cdHJpZ2h0OiA5MXB4O1xyXG5cdHRvcDogOTFweDtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLWxpbmU6bnRoLWNoaWxkKDUpIHtcclxuXHRyaWdodDogNDRweDtcclxuXHR0b3A6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbGluZTpudGgtY2hpbGQoNikge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHJpZ2h0OiA5MXB4O1xyXG5cdGJvdHRvbTogOTFweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjMyLDIxLDE4KTtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLXN1YmxpbmUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogOHB4O1xyXG5cdGhlaWdodDogNnB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1zdWJsaW5lOm50aC1jaGlsZCg3KSB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XHJcblx0XHQtby10cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKTtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKTtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xyXG5cdGxlZnQ6IDU4cHg7XHJcblx0dG9wOiAxMzhweDtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLXN1YmxpbmU6bnRoLWNoaWxkKDgpIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg2Ny41ZGVnKTtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDY3LjVkZWcpO1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDY3LjVkZWcpO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2Ny41ZGVnKTtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjcuNWRlZyk7XHJcblx0bGVmdDogMTM4cHg7XHJcblx0dG9wOiA1OHB4O1xyXG59XHJcblxyXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtc3VibGluZTpudGgtY2hpbGQoOSkge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMTIuNWRlZyk7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTEyLjVkZWcpO1xyXG5cdHJpZ2h0OiAxMzhweDtcclxuXHR0b3A6IDU4cHg7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1zdWJsaW5lOm50aC1jaGlsZCgxMCkge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDE1Ny41ZGVnKTtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDE1Ny41ZGVnKTtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTcuNWRlZyk7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1Ny41ZGVnKTtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTU3LjVkZWcpO1xyXG5cdHJpZ2h0OiA1OHB4O1xyXG5cdHRvcDogMTM4cHg7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1zdWJsaW5lOm50aC1jaGlsZCgxMSkge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xyXG5cdFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKTtcclxuXHRyaWdodDogNTVweDtcclxuXHRib3R0b206IDEzNXB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYigyMzIsMjEsMTgpO1xyXG59XHJcblxyXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbmVlZGxlIHtcclxuXHR3aWR0aDogMzlweDtcclxuXHRoZWlnaHQ6IDM5cHg7XHJcblx0Ym9yZGVyOiAzcHggcmdiKDAsMCwwKSBzb2xpZDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbjogLTIycHggMCAwIC0yMnB4O1xyXG5cdHotaW5kZXg6IDE7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YW5pbWF0aW9uOiBwZWdJdCA2LjE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuXHRcdC1vLWFuaW1hdGlvbjogcGVnSXQgNi4xNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtYW5pbWF0aW9uOiBwZWdJdCA2LjE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBwZWdJdCA2LjE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuXHRcdC1tb3otYW5pbWF0aW9uOiBwZWdJdCA2LjE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLW5lZWRsZTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiA5LjVweCAxMzhweCA5LjVweCAwO1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmdiKDIzMiwyMSwxOCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA1MCU7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luOiAtOS41cHggMCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMCA1MCUgNTAlIDA7XHJcblx0XHQtby1ib3JkZXItcmFkaXVzOiAwIDUwJSA1MCUgMDtcclxuXHRcdC1tcy1ib3JkZXItcmFkaXVzOiAwIDUwJSA1MCUgMDtcclxuXHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1MCUgNTAlIDA7XHJcblx0XHQtbW96LWJvcmRlci1yYWRpdXM6IDAgNTAlIDUwJSAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBwZWdJdCB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDE2JSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XHJcblx0fVxyXG5cdDI1JSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZyk7XHJcblx0fVxyXG5cdDMwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0fVxyXG5cdDM2JSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNzBkZWcpO1xyXG5cdH1cclxuXHQ0MiUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuXHR9XHJcblx0NTAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDIyN2RlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIHBlZ0l0IHtcclxuXHQwJSB7XHJcblx0XHQtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0MTYlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcclxuXHR9XHJcblx0MjUlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDU1ZGVnKTtcclxuXHR9XHJcblx0MzAlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHR9XHJcblx0MzYlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDE3MGRlZyk7XHJcblx0fVxyXG5cdDQyJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG5cdH1cclxuXHQ1MCUge1xyXG5cdFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMjI3ZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIHBlZ0l0IHtcclxuXHQwJSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDE2JSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzVkZWcpO1xyXG5cdH1cclxuXHQyNSUge1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDU1ZGVnKTtcclxuXHR9XHJcblx0MzAlIHtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0fVxyXG5cdDM2JSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTcwZGVnKTtcclxuXHR9XHJcblx0NDIlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcblx0fVxyXG5cdDUwJSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI3ZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGVnSXQge1xyXG5cdDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDE2JSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcclxuXHR9XHJcblx0MjUlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTVkZWcpO1xyXG5cdH1cclxuXHQzMCUge1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0fVxyXG5cdDM2JSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE3MGRlZyk7XHJcblx0fVxyXG5cdDQyJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG5cdH1cclxuXHQ1MCUge1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcGVnSXQge1xyXG5cdDAlIHtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDE2JSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcclxuXHR9XHJcblx0MjUlIHtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNTVkZWcpO1xyXG5cdH1cclxuXHQzMCUge1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0fVxyXG5cdDM2JSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDE3MGRlZyk7XHJcblx0fVxyXG5cdDQyJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG5cdH1cclxuXHQ1MCUge1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIHNwaW4ge1xyXG5cdDAlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBzcGluIHtcclxuXHQwJSB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcblx0MCUge1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XHJcblx0MCUge1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcbi5sb2dpbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0tY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0tY29udGFpbmVyIGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1mb3JtLWNvbnRhaW5lciBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIHN0eWxlcy9tYWluLmNzcyAqL1xyXG5cclxuLyog0KHRgtC40LvQuCDQtNC70Y8g0YHQv9C40YHQutCwINCx0YDQtdC90LTQvtCyICovXHJcbi5icmFuZC1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTVlNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJyYW5kLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJyYW5kLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnJhbmQtbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5icmFuZC1saW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XHJcbiAgfVxyXG4gIC8qINCh0YLQuNC70Lgg0LTQu9GPINC60L7RgNC30LjQvdGLICovXHJcbi5jYXJ0IHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0bWF4LXdpZHRoOiAxMjAwcHg7XHJcblx0bWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0IGgxIHtcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyog0KHRgtC40LvQuCDQtNC70Y8g0L/Rg9GB0YLQvtC5INC60L7RgNC30LjQvdGLICovXHJcbiAgLmNhcnQgcCB7XHJcblx0Y29sb3I6ICM3Nzc7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvKiDQodGC0LjQu9C4INC00LvRjyDRgdC/0LjRgdC60LAg0YLQvtCy0LDRgNC+0LIg0LIg0LrQvtGA0LfQuNC90LUgKi9cclxuICAuY2FydCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2FydCBsaSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0Ym94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcnQgbGk6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIH1cclxuICBcclxuICAvKiDQmNC30L7QsdGA0LDQttC10L3QuNC1INGC0L7QstCw0YDQsCAqL1xyXG4gIC5jYXJ0IGxpIGltZyB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiDQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDRgtC+0LLQsNGA0LUgKi9cclxuICAuY2FydCBsaSBoMyB7XHJcblx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0IGxpIHAge1xyXG5cdGNvbG9yOiAjNjY2O1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiDQmtC90L7Qv9C60LAg0YPQtNCw0LvQtdC90LjRjyAqL1xyXG4gIC5jYXJ0IGxpIGJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogOHB4IDE2cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0IGxpIGJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcnQgbGkgYnV0dG9uOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCO0VBQ0E7Q0FDRCxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLE1BQU07Q0FDTixRQUFRO0NBQ1IsU0FBUztDQUNULFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLDRCQUE0QjtDQUM1QixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7Q0FDUix5QkFBeUI7Q0FDekIsa0JBQWtCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIseUNBQXlDO0NBQ3pDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsUUFBUTtDQUNSLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtFQUN4Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFVBQVU7Q0FDVixTQUFTO0NBQ1QsNEJBQTRCO0NBQzVCLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0Isa0JBQWtCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtDQUN4QixxQ0FBcUM7RUFDcEMsd0NBQXdDO0VBQ3hDLHlDQUF5QztFQUN6Qyw2Q0FBNkM7RUFDN0MsMENBQTBDO0FBQzVDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixVQUFVO0NBQ1YsU0FBUztDQUNULDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsa0NBQWtDO0NBQ2xDLGtCQUFrQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQix1QkFBdUI7Q0FDeEIsc0NBQXNDO0VBQ3JDLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsOENBQThDO0VBQzlDLDJDQUEyQztBQUM3Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixRQUFRO0NBQ1IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msd0JBQXdCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtDQUM5QixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsU0FBUztDQUNULFNBQVM7Q0FDVCxVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUJBQXlCO0VBQ3hCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtDQUMvQixXQUFXO0NBQ1gsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLFFBQVE7Q0FDUixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx3QkFBd0I7RUFDdkIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0NBQzlCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsMEJBQTBCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtDQUNoQyxVQUFVO0NBQ1YsVUFBVTtBQUNYOztBQUVBO0NBQ0MsMEJBQTBCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtDQUNoQyxXQUFXO0NBQ1gsU0FBUztBQUNWOztBQUVBO0NBQ0MsMkJBQTJCO0VBQzFCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLGdDQUFnQztDQUNqQyxZQUFZO0NBQ1osU0FBUztBQUNWOztBQUVBO0NBQ0MsMkJBQTJCO0VBQzFCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLGdDQUFnQztDQUNqQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsMEJBQTBCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtDQUNoQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osNEJBQTRCO0NBQzVCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTtDQUNSLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1Ysa0JBQWtCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtDQUN4QiwyQ0FBMkM7RUFDMUMsOENBQThDO0VBQzlDLCtDQUErQztFQUMvQyxtREFBbUQ7RUFDbkQsZ0RBQWdEO0FBQ2xEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFFBQVE7Q0FDUixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQyxnRUFBZ0U7Q0FDaEUsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixRQUFRO0NBQ1Isb0JBQW9CO0NBQ3BCLDBCQUEwQjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQywrQkFBK0I7QUFDakM7Ozs7OztBQU1BO0NBQ0M7RUFDQyx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLHlCQUF5QjtDQUMxQjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyx5QkFBeUI7Q0FDMUI7Q0FDQTtFQUNDLHVCQUF1QjtDQUN4QjtBQUNEOztBQUVBO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEOztBQUVBO0NBQ0M7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDZCQUE2QjtDQUM5QjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyw2QkFBNkI7Q0FDOUI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtBQUNEOztBQUVBO0NBQ0M7RUFDQywrQkFBK0I7Q0FDaEM7Q0FDQTtFQUNDLGdDQUFnQztDQUNqQztDQUNBO0VBQ0MsZ0NBQWdDO0NBQ2pDO0NBQ0E7RUFDQyxnQ0FBZ0M7Q0FDakM7Q0FDQTtFQUNDLGlDQUFpQztDQUNsQztDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyxpQ0FBaUM7Q0FDbEM7Q0FDQTtFQUNDLCtCQUErQjtDQUNoQztBQUNEOztBQUVBO0NBQ0M7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDZCQUE2QjtDQUM5QjtDQUNBO0VBQ0MsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQyw2QkFBNkI7Q0FDOUI7Q0FDQTtFQUNDLDhCQUE4QjtDQUMvQjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyw4QkFBOEI7Q0FDL0I7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtBQUNEOztBQUVBO0NBQ0M7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDZCQUE2QjtDQUM5QjtBQUNEOztBQUVBO0NBQ0M7RUFDQywrQkFBK0I7Q0FDaEM7Q0FDQTtFQUNDLGlDQUFpQztDQUNsQztBQUNEOztBQUVBO0NBQ0M7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDhCQUE4QjtDQUMvQjtBQUNEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQSxvQkFBb0I7O0FBRXRCLDZCQUE2QjtBQUM3QjtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBLHNCQUFzQjtBQUN4QjtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLHdDQUF3QztDQUN4QyxpQkFBaUI7Q0FDakIsaUJBQWlCO0VBQ2hCOztFQUVBO0NBQ0QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsV0FBVztFQUNWOztFQUVBLDZCQUE2QjtFQUM3QjtDQUNELFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsa0JBQWtCO0VBQ2pCOztFQUVBLHVDQUF1QztFQUN2QztDQUNELGdCQUFnQjtDQUNoQixVQUFVO0VBQ1Q7O0VBRUE7Q0FDRCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsd0NBQXdDO0VBQ3ZDOztFQUVBO0NBQ0QseUJBQXlCO0NBQ3pCLGlDQUFpQztFQUNoQzs7RUFFQSx1QkFBdUI7RUFDdkI7Q0FDRCxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7RUFDakI7O0VBRUEsd0JBQXdCO0VBQ3hCO0NBQ0QsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsa0JBQWtCO0VBQ2pCOztFQUVBO0NBQ0QsV0FBVztDQUNYLGVBQWU7Q0FDZixtQkFBbUI7RUFDbEI7O0VBRUEsb0JBQW9CO0VBQ3BCO0NBQ0QseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Ysc0NBQXNDO0VBQ3JDOztFQUVBO0NBQ0QseUJBQXlCO0VBQ3hCOztFQUVBO0NBQ0QsYUFBYTtFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwN2JmZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oZWFkZXItbG9nbyBhIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhlYWRlci1hY3Rpb25zIGEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhlYWRlci1hY3Rpb25zIGE6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAuY2FyLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyLWNhcmQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhci1jYXJkIGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXItY2FyZCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyLWNhcmQgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcnQge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FydCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJ0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FydCBsaSBpbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB9XFxyXFxuICAuY2FydC1pdGVtLWVudGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcnQtaXRlbS1lbnRlci1hY3RpdmUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FydC1pdGVtLWV4aXQge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FydC1pdGVtLWV4aXQtYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcXHJcXG4gIH1cXHJcXG4gICNjc3Nsb2FkLXdyYXBwZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0ei1pbmRleDogMTU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNzc2xvYWQtbG9hZGVyIHtcXHJcXG5cXHR3aWR0aDogNDEzcHg7XFxyXFxuXFx0aGVpZ2h0OiA0MTNweDtcXHJcXG5cXHRib3JkZXI6IDNweCByZ2IoMCwwLDApIHNvbGlkO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0bWFyZ2luOiAtMjA2cHggMCAwIC0yMDZweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0LW8tYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1sb2FkaW5nIHtcXHJcXG5cXHRmb250LXNpemU6IDI4cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMzlweDtcXHJcXG5cXHRmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1NXB4O1xcclxcblxcdGNvbG9yOiByZ2IoMCwwLDApO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0XFx0LW8tdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHRcXHQtbXMtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHRcXHQtd2Via2l0LXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0XFx0LW1vei10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXItY2lyY2xlLTEge1xcclxcblxcdHdpZHRoOiAzODBweDtcXHJcXG5cXHRoZWlnaHQ6IDM4MHB4O1xcclxcblxcdGxlZnQ6IDE0cHg7XFxyXFxuXFx0dG9wOiAxNHB4O1xcclxcblxcdGJvcmRlcjogM3B4IHJnYigwLDAsMCkgc29saWQ7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHQtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGFuaW1hdGlvbjogc3BpbiA2LjE1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuXFx0XFx0LW8tYW5pbWF0aW9uOiBzcGluIDYuMTVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG5cXHRcXHQtbXMtYW5pbWF0aW9uOiBzcGluIDYuMTVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG5cXHRcXHQtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA2LjE1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuXFx0XFx0LW1vei1hbmltYXRpb246IHNwaW4gNi4xNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXItY2lyY2xlLTIge1xcclxcblxcdHdpZHRoOiAzNDdweDtcXHJcXG5cXHRoZWlnaHQ6IDM0N3B4O1xcclxcblxcdGxlZnQ6IDE0cHg7XFxyXFxuXFx0dG9wOiAxNHB4O1xcclxcblxcdGJvcmRlcjogM3B4IHRyYW5zcGFyZW50IHNvbGlkO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3JkZXItcmlnaHQtY29sb3I6IHJnYigyMzIsMjEsMTgpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHQtby1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0LW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHQtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRhbmltYXRpb246IHNwaW4gMTAuMjVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG5cXHRcXHQtby1hbmltYXRpb246IHNwaW4gMTAuMjVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG5cXHRcXHQtbXMtYW5pbWF0aW9uOiBzcGluIDEwLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuXFx0XFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTAuMjVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG5cXHRcXHQtbW96LWFuaW1hdGlvbjogc3BpbiAxMC4yNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbGluZSB7XFxyXFxuXFx0d2lkdGg6IDI4cHg7XFxyXFxuXFx0aGVpZ2h0OiA2cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiKDAsMCwwKTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1saW5lOm50aC1jaGlsZCgxKSB7XFxyXFxuXFx0bGVmdDogNDRweDtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAtM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbGluZTpudGgtY2hpbGQoMikge1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRsZWZ0OiA5MXB4O1xcclxcblxcdHRvcDogOTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLWxpbmU6bnRoLWNoaWxkKDMpIHtcXHJcXG5cXHR0b3A6IDQ0cHg7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHdpZHRoOiA2cHg7XFxyXFxuXFx0aGVpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbGluZTpudGgtY2hpbGQoNCkge1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcblxcdHJpZ2h0OiA5MXB4O1xcclxcblxcdHRvcDogOTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLWxpbmU6bnRoLWNoaWxkKDUpIHtcXHJcXG5cXHRyaWdodDogNDRweDtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAtM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbGluZTpudGgtY2hpbGQoNikge1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRyaWdodDogOTFweDtcXHJcXG5cXHRib3R0b206IDkxcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiKDIzMiwyMSwxOCk7XFxyXFxufVxcclxcblxcclxcbi5jc3Nsb2FkLWxvYWRlciAuY3NzbG9hZC1zdWJsaW5lIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6IDhweDtcXHJcXG5cXHRoZWlnaHQ6IDZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtc3VibGluZTpudGgtY2hpbGQoNykge1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xcclxcblxcdFxcdC1vLXRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKTtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xcclxcblxcdFxcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XFxyXFxuXFx0bGVmdDogNThweDtcXHJcXG5cXHR0b3A6IDEzOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtc3VibGluZTpudGgtY2hpbGQoOCkge1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDY3LjVkZWcpO1xcclxcblxcdFxcdC1vLXRyYW5zZm9ybTogcm90YXRlKDY3LjVkZWcpO1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2Ny41ZGVnKTtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDY3LjVkZWcpO1xcclxcblxcdFxcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjcuNWRlZyk7XFxyXFxuXFx0bGVmdDogMTM4cHg7XFxyXFxuXFx0dG9wOiA1OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtc3VibGluZTpudGgtY2hpbGQoOSkge1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSgxMTIuNWRlZyk7XFxyXFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcXHJcXG5cXHRcXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDExMi41ZGVnKTtcXHJcXG5cXHRyaWdodDogMTM4cHg7XFxyXFxuXFx0dG9wOiA1OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtc3VibGluZTpudGgtY2hpbGQoMTApIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTcuNWRlZyk7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMTU3LjVkZWcpO1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTcuNWRlZyk7XFxyXFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTcuNWRlZyk7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNTcuNWRlZyk7XFxyXFxuXFx0cmlnaHQ6IDU4cHg7XFxyXFxuXFx0dG9wOiAxMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNzc2xvYWQtbG9hZGVyIC5jc3Nsb2FkLXN1YmxpbmU6bnRoLWNoaWxkKDExKSB7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XFxyXFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpO1xcclxcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjIuNWRlZyk7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKTtcXHJcXG5cXHRyaWdodDogNTVweDtcXHJcXG5cXHRib3R0b206IDEzNXB4O1xcclxcblxcdGJhY2tncm91bmQ6IHJnYigyMzIsMjEsMTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbmVlZGxlIHtcXHJcXG5cXHR3aWR0aDogMzlweDtcXHJcXG5cXHRoZWlnaHQ6IDM5cHg7XFxyXFxuXFx0Ym9yZGVyOiAzcHggcmdiKDAsMCwwKSBzb2xpZDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRvcDogNTAlO1xcclxcblxcdG1hcmdpbjogLTIycHggMCAwIC0yMnB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHQtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGFuaW1hdGlvbjogcGVnSXQgNi4xNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0LW8tYW5pbWF0aW9uOiBwZWdJdCA2LjE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXHJcXG5cXHRcXHQtbXMtYW5pbWF0aW9uOiBwZWdJdCA2LjE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXHJcXG5cXHRcXHQtd2Via2l0LWFuaW1hdGlvbjogcGVnSXQgNi4xNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0LW1vei1hbmltYXRpb246IHBlZ0l0IDYuMTVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3NzbG9hZC1sb2FkZXIgLmNzc2xvYWQtbmVlZGxlOmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiA5LjVweCAxMzhweCA5LjVweCAwO1xcclxcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmdiKDIzMiwyMSwxOCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHJpZ2h0OiA1MCU7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0bWFyZ2luOiAtOS41cHggMCAwIDA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCA1MCUgNTAlIDA7XFxyXFxuXFx0XFx0LW8tYm9yZGVyLXJhZGl1czogMCA1MCUgNTAlIDA7XFxyXFxuXFx0XFx0LW1zLWJvcmRlci1yYWRpdXM6IDAgNTAlIDUwJSAwO1xcclxcblxcdFxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1MCUgNTAlIDA7XFxyXFxuXFx0XFx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDUwJSA1MCUgMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwZWdJdCB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxNiUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MjUlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDMwJSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQzNiUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDE3MGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDQyJSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkAtby1rZXlmcmFtZXMgcGVnSXQge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTYlIHtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDI1JSB7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoNTVkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQzMCUge1xcclxcblxcdFxcdC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MzYlIHtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSgxNzBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQ0MiUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSB7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMjI3ZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5ALW1zLWtleWZyYW1lcyBwZWdJdCB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTYlIHtcXHJcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzVkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQyNSUge1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDMwJSB7XFxyXFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MzYlIHtcXHJcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTcwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0NDIlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQ1MCUge1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGVnSXQge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxNiUge1xcclxcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzVkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQyNSUge1xcclxcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTVkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQzMCUge1xcclxcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQzNiUge1xcclxcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTcwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0NDIlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQ1MCUge1xcclxcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI3ZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkAtbW96LWtleWZyYW1lcyBwZWdJdCB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDE2JSB7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDI1JSB7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDMwJSB7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDM2JSB7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNzBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQ0MiUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSB7XFxyXFxuXFx0XFx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5ALW8ta2V5ZnJhbWVzIHNwaW4ge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHQtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkAtbXMta2V5ZnJhbWVzIHNwaW4ge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcblxcdH1cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi5sb2dpbi1wYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY5O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tY29udGFpbmVyIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1jb250YWluZXIgbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6ICM1NTU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tY29udGFpbmVyIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLyogc3R5bGVzL21haW4uY3NzICovXFxyXFxuXFxyXFxuLyog0KHRgtC40LvQuCDQtNC70Y8g0YHQv9C40YHQutCwINCx0YDQtdC90LTQvtCyICovXFxyXFxuLmJyYW5kLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTVlNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5icmFuZC1saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJyYW5kLWl0ZW0ge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJyYW5kLWxpbmsge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnJhbmQtbGluazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxyXFxuICB9XFxyXFxuICAvKiDQodGC0LjQu9C4INC00LvRjyDQutC+0YDQt9C40L3RiyAqL1xcclxcbi5jYXJ0IHtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0bWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJ0IGgxIHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHRjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyog0KHRgtC40LvQuCDQtNC70Y8g0L/Rg9GB0YLQvtC5INC60L7RgNC30LjQvdGLICovXFxyXFxuICAuY2FydCBwIHtcXHJcXG5cXHRjb2xvcjogIzc3NztcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qINCh0YLQuNC70Lgg0LTQu9GPINGB0L/QuNGB0LrQsCDRgtC+0LLQsNGA0L7QsiDQsiDQutC+0YDQt9C40L3QtSAqL1xcclxcbiAgLmNhcnQgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcnQgbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJ0IGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyog0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDRgtC+0LLQsNGA0LAgKi9cXHJcXG4gIC5jYXJ0IGxpIGltZyB7XFxyXFxuXFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiDQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDRgtC+0LLQsNGA0LUgKi9cXHJcXG4gIC5jYXJ0IGxpIGgzIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGNvbG9yOiAjMzMzO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcnQgbGkgcCB7XFxyXFxuXFx0Y29sb3I6ICM2NjY7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qINCa0L3QvtC/0LrQsCDRg9C00LDQu9C10L3QuNGPICovXFxyXFxuICAuY2FydCBsaSBidXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHBhZGRpbmc6IDhweCAxNnB4O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FydCBsaSBidXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJ0IGxpIGJ1dHRvbjpmb2N1cyB7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3Byb2plY3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcHJvamVjdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfbWF0ZXJpYWxfQnV0dG9uX0J1dHRvbl9qcy1ub2RlX21vZHVsZXNfbXVpX21hdGVyaWFsX1NuYWNrYmFyX1NuYWNrYmEtZmIyNjIyXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhlYWRlciIsIkNhckxpc3RQYWdlIiwiQ2FydFBhZ2UiLCJMb2dpblBhZ2UiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJwYXRoIiwiZWxlbWVudCIsIkxpbmsiLCJicmFuZHMiLCJCcmFuZExpc3QiLCJjbGFzc05hbWUiLCJtYXAiLCJicmFuZCIsImtleSIsInRvIiwiY29uY2F0IiwidG9Mb3dlckNhc2UiLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIlNuYWNrYmFyIiwiQ2FyQ2FyZCIsIl9yZWYiLCJjYXIiLCJvbkFkZFRvQ2FydCIsInVzZXIiLCJzdGF0ZSIsImF1dGgiLCJfUmVhY3QkdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZW5TbmFja2JhciIsInNldE9wZW5TbmFja2JhciIsImhhbmRsZUFkZFRvQ2FydCIsImlkIiwiaGFuZGxlQ2xvc2VTbmFja2JhciIsInNyYyIsImltYWdlIiwiYWx0IiwibW9kZWwiLCJ3aWR0aCIsInllYXIiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwidHlwZSIsIm1pbGVhZ2UiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJzdHlsZSIsIm9wZW4iLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsIm1lc3NhZ2UiLCJGaWx0ZXJCYXIiLCJvbkZpbHRlckNoYW5nZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzZXRCcmFuZCIsImhhbmRsZUZpbHRlckNoYW5nZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJ1c2VEaXNwYXRjaCIsImxvZ291dCIsImRpc3BhdGNoIiwiaGFuZGxlTG9nb3V0IiwidXNlcm5hbWUiLCJQYWdpbmF0aW9uIiwidG90YWxJdGVtcyIsIml0ZW1zUGVyUGFnZSIsImN1cnJlbnRQYWdlIiwib25QYWdlQ2hhbmdlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiaGFuZGxlUGFnZUNsaWNrIiwicGFnZU51bWJlciIsImRpc2FibGVkIiwiUmVhY3RET00iLCJQcm92aWRlciIsIkJyb3dzZXJSb3V0ZXIiLCJzdG9yZSIsImNoZWNrQXV0aCIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInVzZUVmZmVjdCIsImZldGNoQ2FycyIsImFkZFRvQ2FydCIsInVzZVBhcmFtcyIsIl91c2VTZWxlY3RvciIsImNhcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaWx0ZXJlZENhcnMiLCJzZXRGaWx0ZXJlZENhcnMiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInNldEN1cnJlbnRQYWdlIiwiX3VzZVBhcmFtcyIsImFwcGx5RmlsdGVycyIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJuZXdGaWx0ZXJzIiwiaGFuZGxlUGFnZUNoYW5nZSIsImluZGV4T2ZMYXN0SXRlbSIsImluZGV4T2ZGaXJzdEl0ZW0iLCJjdXJyZW50Q2FycyIsInNsaWNlIiwibGVuZ3RoIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzQXJyYXkiLCJyZW1vdmVGcm9tQ2FydCIsInVzZU5hdmlnYXRlIiwibmF2aWdhdGUiLCJ1c2VyQ2FydCIsInNldFVzZXJDYXJ0IiwiZmV0Y2hVc2VyQ2FydCIsIl9jYWxsZWUiLCJyZXNwb25zZSIsImRhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2giLCJqc29uIiwiY2FydCIsInQwIiwiY29uc29sZSIsImhhbmRsZVJlbW92ZUZyb21DYXJ0IiwiX3JlZjIiLCJfY2FsbGVlMiIsImNhcklkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaXRlbSIsIm9rIiwiX3giLCJsb2dpbiIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEVycm9yIiwiaGFuZGxlTG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJnZXRTdGF0ZSIsIl9nZXRTdGF0ZSRhdXRoJHVzZXIiLCJ1c2VySWQiLCJfeDIiLCJsb2dnZWRJblVzZXIiLCJwYXlsb2FkIiwiX3gzIiwiX3JlZjMiLCJfY2FsbGVlMyIsInVzZXJzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmluZCIsIl94NCIsInNhdmVDYXJ0Rm9yVXNlciIsImNhcnRJdGVtcyIsImN1cnJlbnRVc2VyIiwidXBkYXRlZENhcnQiLCJ1cGRhdGVSZXNwb25zZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl94NSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfeDYiLCJpbml0aWFsU3RhdGUiLCJhdXRoUmVkdWNlciIsInVuZGVmaW5lZCIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJjYXJzUmVkdWNlciIsIml0ZW1zIiwiY2FydFJlZHVjZXIiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicm9vdFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9