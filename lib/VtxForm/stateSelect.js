'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptGroup = exports.Option = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/css');

require('./stateSelect.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    error: 'vtx-ui-select-error',
    normal: 'vtx-ui-select-normal'
};

var StateSelect = function (_React$Component) {
    (0, _inherits3.default)(StateSelect, _React$Component);

    function StateSelect(props) {
        (0, _classCallCheck3.default)(this, StateSelect);
        return (0, _possibleConstructorReturn3.default)(this, (StateSelect.__proto__ || (0, _getPrototypeOf2.default)(StateSelect)).call(this, props));
    }

    (0, _createClass3.default)(StateSelect, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$errorMsg = _props.errorMsg,
                errorMsg = _props$errorMsg === undefined ? ' ' : _props$errorMsg,
                _props$validated = _props.validated,
                validated = _props$validated === undefined ? true : _props$validated;

            var selectProps = (0, _extends3.default)({
                style: { width: 300 }
            }, this.props);
            delete selectProps.errorMsg;
            delete selectProps.validated;
            delete selectProps.inherit;
            return _react2.default.createElement(
                'div',
                {
                    style: { width: this.props.inherit ? 'inherit' : '' },
                    className: validated ? styles.normal : styles.error, 'data-errormsg': errorMsg },
                _react2.default.createElement(_select2.default, selectProps)
            );
        }
    }]);
    return StateSelect;
}(_react2.default.Component);

var Option = exports.Option = _select2.default.Option;
var OptGroup = exports.OptGroup = _select2.default.OptGroup;
exports.default = StateSelect;