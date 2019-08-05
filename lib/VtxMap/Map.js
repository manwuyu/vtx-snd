'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AMap = require('./AMap/AMap');

var _AMap2 = _interopRequireDefault(_AMap);

var _Map = require('./BMap/Map');

var _Map2 = _interopRequireDefault(_Map);

var _TMap = require('./TMap/TMap');

var _TMap2 = _interopRequireDefault(_TMap);

var _Map3 = require('./GMap/Map');

var _Map4 = _interopRequireDefault(_Map3);

require('./Map.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VtxMap = function (_React$Component) {
    (0, _inherits3.default)(VtxMap, _React$Component);

    function VtxMap(props) {
        (0, _classCallCheck3.default)(this, VtxMap);
        return (0, _possibleConstructorReturn3.default)(this, (VtxMap.__proto__ || (0, _getPrototypeOf2.default)(VtxMap)).call(this, props));
    }

    (0, _createClass3.default)(VtxMap, [{
        key: 'render',
        value: function render() {
            var t = this;
            var _t$props = t.props,
                mapType = _t$props.mapType,
                getMapInstance = _t$props.getMapInstance,
                newProps = (0, _objectWithoutProperties3.default)(_t$props, ['mapType', 'getMapInstance']);

            if (typeof getMapInstance == 'function') {
                newProps.ref = function (map) {
                    if (map) {
                        getMapInstance(map);
                    }
                };
            }
            switch (mapType) {
                case 'amap':
                    return _react2.default.createElement(_AMap2.default, newProps);
                case 'tmap':
                    return _react2.default.createElement(_TMap2.default, newProps);
                case 'gmap':
                    return _react2.default.createElement(_Map4.default, newProps);
                default:
                    return _react2.default.createElement(_Map2.default, newProps);
            }
        }
    }]);
    return VtxMap;
}(_react2.default.Component);

exports.default = VtxMap;
module.exports = exports['default'];