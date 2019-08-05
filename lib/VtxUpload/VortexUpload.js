'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

require('antd/lib/upload/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

require('./VortexUpload.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    uploadCt: 'vtx-ui-upload-uploadct'
};

var VortexUpload = function (_React$Component) {
    (0, _inherits3.default)(VortexUpload, _React$Component);

    function VortexUpload(props) {
        (0, _classCallCheck3.default)(this, VortexUpload);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VortexUpload.__proto__ || (0, _getPrototypeOf2.default)(VortexUpload)).call(this, props));

        var t = _this;
        // 初始化上传下载的地址
        _this.uploadURL = props.action;
        _this.downLoadURL = props.downLoadURL;
        // 可在外部配置的属性，具体文档参考AntUI
        _this.configurableProperty = ['data', 'showUploadList', 'multiple', 'accept', 'listType', 'disabled', 'withCredentials', 'beforeUpload'];

        _this.state = {
            fileList: _this.getSynFileList()
        };
        return _this;
    }

    (0, _createClass3.default)(VortexUpload, [{
        key: 'getConfig',
        value: function getConfig() {
            var t = this;
            var props = this.props;
            // 重置上传下载的地址
            t.uploadURL = props.action;
            t.downLoadURL = props.downLoadURL;
            var config = {
                action: t.uploadURL,
                fileList: t.state.fileList,
                onChange: function onChange(info) {
                    // 此处根据后台返回的数据结构取得文件ID             
                    var vtxId = info.file.response && Array.isArray(info.file.response.data) && info.file.response.data.length > 0 ? info.file.response.data[0].id : undefined;
                    var newFileList = info.fileList;
                    var newFile = vtxId ? (0, _extends3.default)({}, info.file, {
                        id: vtxId,
                        url: t.downLoadURL + vtxId
                    }) : (0, _extends3.default)({}, info.file);

                    if (info.file.status === 'done' && vtxId) {
                        newFileList = info.fileList.map(function (item) {
                            if (item.uid == info.file.uid) {
                                return (0, _extends3.default)({}, item, {
                                    id: vtxId,
                                    url: t.downLoadURL + vtxId
                                });
                            }
                            return item;
                        });
                    }
                    // 更新组件状态
                    if (props.mode == 'single' && info.file.status === 'done') {
                        t.setState({ fileList: [newFile] });
                    } else {
                        t.setState({ fileList: newFileList });
                    }
                    // 触发外部方法
                    if (info.file.status === 'done') {
                        if (typeof props.onSuccess == 'function') {
                            props.onSuccess(newFile);
                        }
                    } else if (info.file.status === 'error') {
                        if (typeof props.onError == "function") {
                            props.onError(info.file);
                        }
                    }
                },
                onRemove: function onRemove(file) {
                    if (typeof props.onRemove == "function") {
                        return props.onRemove(file);
                    }
                }
            };

            // 继承相关配置
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(t.configurableProperty), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var p = _step.value;

                    if (props[p] !== undefined) {
                        config[p] = props[p];
                    }
                }
                // viewMode
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (props.viewMode && props.showUploadList !== false) {
                config.showUploadList = { showRemoveIcon: false };
            }
            if (props.listType == 'picture-card') {
                if ((0, _typeof3.default)(config.showUploadList) == 'object') {
                    config.showUploadList.showPreviewIcon = false;
                } else {
                    config.showUploadList = { showPreviewIcon: false };
                }
            }

            return config;
        }
    }, {
        key: 'getSynFileList',
        value: function getSynFileList(props) {
            var t = this;
            props = props || this.props;
            var processedFileList = props.fileList || [];
            // 单文件模式只取第一个
            if (props.mode == 'single' && processedFileList.length > 1) {
                processedFileList = [processedFileList[0]];
            }
            processedFileList = processedFileList.map(function (item, index) {
                // 将外部传入的简易文件数组处理成为组件需要的数组结构
                if (item.name === undefined || item.id === undefined) {
                    console.error('文件列表的name和id属性不能为空');
                }
                var itemURL = item.url || t.downLoadURL + item.id;
                return (0, _extends3.default)({}, item, {
                    uid: -1 - index,
                    status: 'done',
                    url: itemURL,
                    thumbUrl: itemURL
                });
            });
            return processedFileList;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.fileListVersion != nextProps.fileListVersion) {
                this.setState({
                    fileList: this.getSynFileList(nextProps)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: styles.uploadCt },
                _react2.default.createElement(
                    _upload2.default,
                    this.getConfig(),
                    this.props.viewMode ? null : this.props.customizedButton || (this.props.listType == 'picture-card' ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_icon2.default, { type: 'plus', style: { fontSize: '28px', color: '#999' } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'ant-upload-text' },
                            '\u4E0A\u4F20'
                        )
                    ) : _react2.default.createElement(
                        _button2.default,
                        null,
                        _react2.default.createElement(_icon2.default, { type: 'upload' }),
                        '\u4E0A\u4F20'
                    ))
                )
            );
        }
    }]);
    return VortexUpload;
}(_react2.default.Component);

exports.default = VortexUpload;
module.exports = exports['default'];