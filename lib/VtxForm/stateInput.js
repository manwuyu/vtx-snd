'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/css');

require('./stateInput.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    error: 'vtx-ui-input-error',
    normal: 'vtx-ui-input-normal'
};

var stateInput = function (_React$Component) {
    (0, _inherits3.default)(stateInput, _React$Component);

    function stateInput(props) {
        (0, _classCallCheck3.default)(this, stateInput);
        return (0, _possibleConstructorReturn3.default)(this, (stateInput.__proto__ || (0, _getPrototypeOf2.default)(stateInput)).call(this, props));
    }

    (0, _createClass3.default)(stateInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$errorMsg = _props.errorMsg,
                errorMsg = _props$errorMsg === undefined ? ' ' : _props$errorMsg,
                _props$validated = _props.validated,
                validated = _props$validated === undefined ? true : _props$validated,
                _props$loading = _props.loading,
                loading = _props$loading === undefined ? false : _props$loading;


            var inputProps = (0, _extends3.default)({
                style: { width: 300 }
            }, this.props);

            delete inputProps.errorMsg;
            delete inputProps.validated;
            delete inputProps.loading;
            delete inputProps.inherit;

            var actErrorMsg = void 0,
                actValidated = void 0;
            if (errorMsg instanceof Array && validated instanceof Array) {
                var firstUnmatched = validated.indexOf(false);
                if (firstUnmatched == -1) {
                    actValidated = true;
                    actErrorMsg = errorMsg[0];
                } else {
                    actValidated = false;
                    actErrorMsg = errorMsg[firstUnmatched] || '';
                }
            } else {
                actErrorMsg = errorMsg;
                actValidated = validated;
            }

            inputProps.suffix = loading ? _react2.default.createElement(_icon2.default, { type: 'loading' }) : actValidated ? null : _react2.default.createElement(_icon2.default, { type: 'close-circle', style: { color: 'red' } });

            return _react2.default.createElement(
                'div',
                {
                    style: { width: this.props.inherit ? 'inherit' : '' },
                    className: actValidated ? styles.normal : styles.error, 'data-errormsg': actErrorMsg },
                _react2.default.createElement(_input2.default, inputProps)
            );
        }
    }]);
    return stateInput;
}(_react2.default.Component);

exports.default = stateInput;
module.exports = exports['default'];