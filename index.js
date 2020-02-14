"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pagination = _interopRequireDefault(require("./pagination"));

var _mockData = _interopRequireDefault(require("./mockData"));

var App = function App() {
  return _react["default"].createElement(_pagination["default"], {
    itemsPerPage: 1,
    activeStyle: {
      backgroundColor: '#00b9f2',
      color: 'white'
    },
    next: "next",
    prev: "previous",
    data: _mockData["default"],
    oneItem: function oneItem(item, index) {
      return _react["default"].createElement("div", {
        key: index
      }, _react["default"].createElement("div", null, item.firstName), _react["default"].createElement("div", null, item.lastName));
    }
  });
};

var _default = App;
exports["default"] = _default;
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
      oneItem = _ref.oneItem,
      next = _ref.next,
      prev = _ref.prev,
      activeStyle = _ref.activeStyle,
      pageName = _ref.pageName;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      pageNo = _useState2[0],
      setPageNo = _useState2[1];

  var pages = data ? Paginate(data, itemsPerPage) : [];
  var allPages = pages.map(function (item, index) {
    return index;
  });
  var allPageNumbers = pageNo < 5 ? allPages.slice(0, 10) : allPages.slice(pageNo - 5, pageNo + 5);
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
      style: item === pageNo ? activeStyle : {}
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
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var rootElement = document.getElementById('app');
(0, _reactDom.render)(_react["default"].createElement(_App["default"], null), rootElement);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  firstName: 'John',
  lastName: 'Doe'
}, {
  firstName: 'Hezron',
  lastName: 'Kimutai'
}, {
  firstName: 'Sharon',
  lastName: 'Koech'
}, {
  firstName: 'Emmy',
  lastName: 'Lagat'
}, {
  firstName: 'Dorcas',
  lastName: 'Chep'
}, {
  firstName: 'Esther',
  lastName: 'Aww'
}, {
  firstName: 'Kerubo',
  lastName: 'Him'
}, {
  firstName: 'Peter',
  lastName: 'Pata'
}, {
  firstName: 'New',
  lastName: 'World'
}, {
  firstName: 'Of',
  lastName: 'Mine'
}, {
  firstName: '1',
  lastName: 'Doe'
}, {
  firstName: '2',
  lastName: 'Kimutai'
}, {
  firstName: '3',
  lastName: 'Koech'
}, {
  firstName: '4',
  lastName: 'Lagat'
}, {
  firstName: '5',
  lastName: 'Chep'
}, {
  firstName: '6',
  lastName: 'Aww'
}, {
  firstName: '7',
  lastName: 'Him'
}, {
  firstName: '8',
  lastName: 'Pata'
}, {
  firstName: '9',
  lastName: 'World'
}, {
  firstName: '10',
  lastName: 'Mine'
}];
exports["default"] = _default;
