'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

require('antd/lib/message/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('weakmap-polyfill');
// require('formdata-polyfill');

/*
    props:
        visible,选填
        templateURL,选填
        uploadURL,必填
        postData,选填
        fileKey,选填
        accept,选填
        close(),选填
        afterUpload(data),选填
 */
var VtxImport = function (_React$Component) {
    (0, _inherits3.default)(VtxImport, _React$Component);

    function VtxImport(props) {
        (0, _classCallCheck3.default)(this, VtxImport);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VtxImport.__proto__ || (0, _getPrototypeOf2.default)(VtxImport)).call(this, props));

        _this.form = null;
        _this.fileInput = null;
        _this.iframe = null;
        _this.useFormData = window.FormData ? true : false;
        _this.fileKey = props.fileKey || 'file';
        _this.accept = props.accept || 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv';
        // console.log('useFormData',this.useFormData);
        // this.uploadURL = props.uploadURL;
        _this.state = {
            visible: true,
            uploading: false
        };
        return _this;
    }

    (0, _createClass3.default)(VtxImport, [{
        key: 'uploadSuccess',
        value: function uploadSuccess(data) {
            this.fileInput.value = '';
            this.setState({
                uploading: false
            });
            if (typeof this.props.afterUpload === 'function') {
                this.props.afterUpload(data);
            }
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            this.fileInput.value = '';
            if (typeof this.props.close === 'function') {
                this.props.close();
            } else {
                this.setState({
                    visible: !this.state.visible
                });
            }
        }
    }, {
        key: 'getPostURL',
        value: function getPostURL() {
            var postUrl = this.props.uploadURL;
            var postData = this.props.postData || {};
            var postArray = [];
            for (var k in postData) {
                if (postData[k] !== undefined && postData[k] !== null && postData[k] !== '') {
                    postArray.push(k + '=' + encodeURIComponent(postData[k]));
                }
            }
            return postArray.length > 0 ? postUrl + '?' + postArray.join('&') : postUrl;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var t = this;
            var postUrl = t.getPostURL();
            var modalProps = {
                bodyStyle: {
                    backgroundColor: '#f8f8f8'
                },
                visible: t.props.visible === undefined ? t.state.visible : t.props.visible,
                title: '导入',
                onCancel: t.closeModal.bind(t),
                maskClosable: false,
                footer: [t.props.templateURL ? _react2.default.createElement(
                    _button2.default,
                    { key: 1, onClick: function onClick() {
                            window.open(t.props.templateURL);
                        } },
                    '\u4E0B\u8F7D\u6A21\u677F'
                ) : null, _react2.default.createElement(
                    _button2.default,
                    { key: 2, type: 'primary', loading: t.state.uploading, onClick: function onClick() {
                            if (_this2.fileInput.value) {
                                t.setState({
                                    uploading: true
                                });
                                if (t.useFormData) {
                                    var request = new XMLHttpRequest();
                                    request.open("POST", postUrl);
                                    request.onreadystatechange = function (e) {
                                        if (e.target.readyState == 4) {
                                            t.uploadSuccess(e.target.response);
                                        }
                                    };
                                    var fmd = new FormData();
                                    fmd.append(_this2.fileKey, _this2.fileInput.files[0]);
                                    request.send(fmd);
                                } else {
                                    _this2.form.submit();
                                }
                            } else {
                                _message2.default.info('请选择需要上传的文件');
                            }
                        } },
                    '\u4E0A\u4F20'
                ), _react2.default.createElement(
                    _button2.default,
                    { key: 3, onClick: t.closeModal.bind(t) },
                    '\u5173\u95ED'
                )]
            };
            if (!this.useFormData && this.iframe) {
                this.iframe.onload = function () {
                    _this2.uploadSuccess(_this2.iframe.contentWindow.document.documentElement.innerHTML);
                    // console.log(this.iframe.contentWindow.document.documentElement.innerHTML)
                };
            }

            return _react2.default.createElement(
                _modal2.default,
                modalProps,
                _react2.default.createElement(
                    'form',
                    { encType: 'multipart/form-data', method: 'post', target: 'tmp', action: postUrl, ref: function ref(dom) {
                            if (dom) _this2.form = dom;
                        } },
                    _react2.default.createElement('input', { type: 'file', name: this.fileKey, accept: this.accept, ref: function ref(dom) {
                            if (dom) _this2.fileInput = dom;
                        } })
                ),
                _react2.default.createElement('iframe', { name: 'tmp', style: { display: 'none' }, ref: function ref(dom) {
                        if (dom) _this2.iframe = dom;
                    } }),
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);
    return VtxImport;
}(_react2.default.Component);

exports.default = VtxImport;
module.exports = exports['default'];