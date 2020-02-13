"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Paginate = function Paginate(allData, itemsPerPage) {
  return allData.map(function (item, index) {
    return index % itemsPerPage === 0 && allData.slice(index, index + itemsPerPage);
  }).filter(Boolean);
};

var _default = function _default(_ref) {
  var data = _ref.data,
      itemsPerPage = _ref.itemsPerPage,
      oneItem = _ref.oneItem,
      next = _ref.next,
      prev = _ref.prev,
      activeStyle = _ref.activeStyle,
      pageName = _ref.pageName;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      pageNo = _useState2[0],
      setPageNo = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      check = _useState4[0],
      setCheck = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      lower = _useState6[0],
      setLower = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      upper = _useState8[0],
      setUpper = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      goBack = _useState10[0],
      setGoBack = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      goFoward = _useState12[0],
      setGoFoward = _useState12[1];

  var _useState13 = (0, _react.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      currentLength = _useState14[0],
      setCurrentLength = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      paginationPageNo = _useState16[0],
      setPaginationPageNo = _useState16[1];

  (0, _react.useEffect)(function () {
    setPageNo(0);
  }, [data, pages]);
  var pages = data ? Paginate(data, itemsPerPage) : [];
  var allPageNumbers = pages && Paginate(pages.map(function (item, index) {
    return index;
  }), 10);

  if ((pageNo + 1) % 10 === 0 && pageNo !== 0 && check) {
    setPaginationPageNo(paginationPageNo + 1);
    setCurrentLength(currentLength + 10);
    setCheck(false);
    setLower(true);
    setGoBack(false);
    setGoFoward(false);
  }

  if (!goFoward) {
    setGoBack(true);
    setGoFoward(true);
  } // pageNo / currentLength === 1 && !goBack ? setGoBack(true):setGoBack(false);


  if (pageNo / currentLength === 1 && !goBack) {
    setPaginationPageNo(paginationPageNo - 1);
    setCurrentLength(currentLength - 10);
    setCheck(false);
    setUpper(true);
    setGoBack(true);
    setGoBack(true);
  }

  return _react["default"].createElement("div", {
    className: "pagination-container"
  }, (pages[pageNo] || pages[0]).map(function (item, index) {
    return oneItem(item, index);
  }), _react["default"].createElement("div", {
    className: "pagination-buttons"
  }, _react["default"].createElement("div", {
    className: "arrows"
  }, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPageNo(pageNo === 0 ? pageNo : pageNo - 1);
      setCheck(true);
      setLower(false);
      setUpper(false);
      setGoBack(false);
    }
  }, prev)), _react["default"].createElement("div", {
    className: "pages"
  }, lower && _react["default"].createElement("div", null, _react["default"].createElement("button", {
    type: "button",
    style: activeStyle
  }, pageNo + 1)), (allPageNumbers[paginationPageNo] || allPageNumbers[0]).map(function (item, index) {
    return _react["default"].createElement("div", {
      id: index
    }, _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        setPageNo(item);
        setCheck(true);
        setLower(false);
        setUpper(false);
        setGoBack(false);
      },
      style: pageNo === currentLength + index ? activeStyle : {}
    }, pageName, " ", item + 1));
  }), upper && _react["default"].createElement("div", null, _react["default"].createElement("button", {
    type: "button",
    style: activeStyle
  }, pageNo + 1))), _react["default"].createElement("div", {
    className: "arrows"
  }, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPageNo(pageNo === pages.length - 1 ? pageNo : pageNo + 1);
      setCheck(true);
      setLower(false);
      setUpper(false);
      setGoBack(false);
    }
  }, next))));
};

exports["default"] = _default;
