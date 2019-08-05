'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/css');

var _VortexUpload = require('./VortexUpload');

var _VortexUpload2 = _interopRequireDefault(_VortexUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VortexUploadModal = function (_React$Component) {
    (0, _inherits3.default)(VortexUploadModal, _React$Component);

    function VortexUploadModal(props) {
        (0, _classCallCheck3.default)(this, VortexUploadModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VortexUploadModal.__proto__ || (0, _getPrototypeOf2.default)(VortexUploadModal)).call(this, props));

        _this.state = {
            fileList: _this.props.upload.fileList || []
        };
        return _this;
    }

    (0, _createClass3.default)(VortexUploadModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.upload.fileListVersion != nextProps.upload.fileListVersion) {
                this.setState({
                    fileList: nextProps.upload.fileList
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var t = this;
            var ulProps = (0, _extends3.default)({}, t.props.upload, {
                onSuccess: function onSuccess(file) {
                    if (t.props.upload.mode == 'single') {
                        t.setState({
                            fileList: [file]
                        });
                    } else {
                        t.setState({
                            fileList: [].concat((0, _toConsumableArray3.default)(t.state.fileList), [file])
                        });
                    }
                    if (typeof t.props.upload.onSuccess == 'function') {
                        t.props.upload.onSuccess(file);
                    }
                },
                onError: function onError(res) {
                    if (typeof t.props.upload.onError == 'function') {
                        t.props.upload.onError(res);
                    }
                },
                onRemove: function onRemove(file) {
                    t.setState({
                        fileList: t.state.fileList.filter(function (item) {
                            return item.id != file.id;
                        })
                    });
                    if (typeof t.props.upload.onRemove == 'function') {
                        return t.props.upload.onRemove(file);
                    }
                }
            });

            var title = _react2.default.createElement(
                'span',
                null,
                '\u4E0A\u4F20\u6587\u4EF6',
                this.props.template ? _react2.default.createElement(_button2.default, { size: 'small', shape: 'circle', icon: 'file-text', title: '\u4E0B\u8F7D\u6A21\u677F', type: 'dashed',
                    onClick: function onClick() {
                        window.open(_this2.props.template);
                    } }) : null
            );
            var mdProps = (0, _extends3.default)({
                title: title,
                okText: "确定",
                cancelText: "取消"
            }, t.props.modal, {
                onOk: function onOk() {
                    if (typeof t.props.modal.onOk == 'function') {
                        t.props.modal.onOk(t.state.fileList);
                    }
                }
            });
            return _react2.default.createElement(
                _modal2.default,
                mdProps,
                _react2.default.createElement(_VortexUpload2.default, ulProps),
                typeof t.props.modal.setContent == 'function' ? t.props.modal.setContent(t.state.fileList) : null
            );
        }
    }]);
    return VortexUploadModal;
}(_react2.default.Component);

exports.default = VortexUploadModal;
module.exports = exports['default'];