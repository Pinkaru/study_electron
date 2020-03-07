"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _Login = require("./Login");

var _Signup = require("./Signup");

var _Rooms = require("./Rooms");

var _Room = require("./Room");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRouting = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: "/" },
        _react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login.Login }),
        _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _Signup.Signup }),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: "rooms", component: _Rooms.Rooms },
            _react2.default.createElement(_reactRouter.Route, { path: ":roomId", component: _Room.Room })
        )
    )
);

if (!location.hash.length) {
    location.hash = "#/login";
}
(0, _reactDom.render)(_react2.default.createElement(
    "div",
    null,
    "Hello, Elctron and React JSX"
), document, getElementById("app"));