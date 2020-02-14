"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var Paginate = function Paginate(allData, itemsPerPage) {
  return allData.map(function (item, index) {
    return index % itemsPerPage === 0 && allData.slice(index, index + itemsPerPage);
  }).filter(Boolean);
};

var _default = function _default(_ref) {
  var data = _ref.data,
      itemsPerPage = _ref.itemsPerPage,
      onePage = _ref.onePage,
      next = _ref.next,
      prev = _ref.prev,
      activePageStyle = _ref.activePageStyle,
      pageName = _ref.pageName,
      pageButtons = _ref.pageButtons;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      pageNo = _useState2[0],
      setPageNo = _useState2[1];

  var pages = data ? Paginate(data, itemsPerPage) : [];
  var allPages = pages.map(function (item, index) {
    return index;
  });
  var allPageNumbers = pageNo < Math.round(pageButtons / 2) ? allPages.slice(0, pageButtons) : allPages.slice(pageNo - Math.round(pageButtons / 2), pageNo + Math.round(pageButtons / 2));
  return _react["default"].createElement("div", {
    className: "pagination-container"
  }, (pages[pageNo] || pages[0]).map(function (item, index) {
    return onePage(item, index);
  }), _react["default"].createElement("div", {
    className: "pagination-buttons"
  }, _react["default"].createElement("div", {
    className: "arrows"
  }, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPageNo(pageNo === 0 ? pageNo : pageNo - 1);
    }
  }, prev)), _react["default"].createElement("div", {
    className: "pages"
  }, allPageNumbers.map(function (item, index) {
    return _react["default"].createElement("div", {
      id: index,
      key: index
    }, _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        setPageNo(item);
      },
      style: item === pageNo ? activePageStyle : {}
    }, pageName, " ", item + 1));
  })), _react["default"].createElement("div", {
    className: "arrows"
  }, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPageNo(pageNo === pages.length - 1 ? pageNo : pageNo + 1);
    }
  }, next))));
};

exports["default"] = _default;
