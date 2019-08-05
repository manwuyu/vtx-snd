'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style/css');

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

require('antd/lib/dropdown/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VtxExport = function (_React$Component) {
    (0, _inherits3.default)(VtxExport, _React$Component);

    function VtxExport(props) {
        (0, _classCallCheck3.default)(this, VtxExport);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VtxExport.__proto__ || (0, _getPrototypeOf2.default)(VtxExport)).call(this, props));

        _this.exportButtonClick = _this.exportButtonClick.bind(_this);
        _this.iframeName = 'export_iframe_' + Math.random();
        _this.isExporting = false;
        return _this;
    }

    (0, _createClass3.default)(VtxExport, [{
        key: 'exportButtonClick',
        value: function exportButtonClick(param) {
            var pass_val = typeof this.props.getExportParams == 'function' ? this.props.getExportParams(param.key) : null;
            if (!this.props.downloadURL) {
                console.error('未配置下载地址');
                return;
            }
            if (!pass_val) {
                console.error('未配置导出参数');
                return;
            }
            this.downLoadFile(this.props.downloadURL, this.props.mode == 'simple' ? pass_val : { parameters: (0, _stringify2.default)(pass_val) });
        }
    }, {
        key: 'downLoadFile',
        value: function downLoadFile(reqURL, postData) {
            var formDom = document.createElement('form');
            formDom.style.display = 'none';
            formDom.setAttribute('target', this.iframeName);
            formDom.setAttribute('method', 'post');
            formDom.setAttribute('action', reqURL);

            document.body.appendChild(formDom);

            for (var propoty in postData) {
                var input = document.createElement('input');
                var p_value = (0, _typeof3.default)(postData[propoty]) == 'object' ? (0, _stringify2.default)(postData[propoty]) : postData[propoty];
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', propoty);
                input.setAttribute('value', p_value);
                formDom.appendChild(input);
            }

            this.isExporting = true;
            formDom.submit();
            formDom.parentNode.removeChild(formDom);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var exportMenu = _react2.default.createElement(
                _menu2.default,
                { onClick: this.exportButtonClick },
                this.props.rowButton === false ? null : _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'rows' },
                    '\u5BFC\u51FA\u9009\u4E2D\u884C'
                ),
                this.props.pageButton === false ? null : _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'page' },
                    '\u5BFC\u51FA\u5F53\u524D\u9875'
                ),
                this.props.allButton === false ? null : _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'all' },
                    '\u5BFC\u51FA\u5168\u90E8'
                )
            );
            return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    _dropdown2.default,
                    { overlay: exportMenu, trigger: ["click"] },
                    _react2.default.createElement(
                        _button2.default,
                        { icon: 'export' },
                        '\u5BFC\u51FA ',
                        _react2.default.createElement(_icon2.default, { type: 'down' })
                    )
                ),
                _react2.default.createElement('iframe', { name: this.iframeName, style: { display: 'none' },
                    onLoad: function onLoad() {
                        if (typeof _this2.props.afterExport == 'function' && _this2.isExporting) {
                            _this2.props.afterExport();
                        }
                        _this2.isExporting = false;
                    } })
            );
        }
    }]);
    return VtxExport;
}(_react2.default.Component);

exports.default = VtxExport;
module.exports = exports['default'];