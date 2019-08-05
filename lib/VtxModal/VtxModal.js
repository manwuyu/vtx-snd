'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./VtxModal.css');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    normal: 'vtx-ui-modal-normal',
    title: 'vtx-ui-modal-title',
    title_name: 'vtx-ui-modal-title_name',
    close: 'vtx-ui-modal-close'
};


function VtxModal(props) {
    var _props$closable = props.closable,
        closable = _props$closable === undefined ? true : _props$closable,
        _props$wrapClassName = props.wrapClassName,
        wrapClassName = _props$wrapClassName === undefined ? '' : _props$wrapClassName,
        _props$title = props.title,
        title = _props$title === undefined ? '' : _props$title,
        _props$bodyStyle = props.bodyStyle,
        bodyStyle = _props$bodyStyle === undefined ? {} : _props$bodyStyle,
        ModalProps = (0, _objectWithoutProperties3.default)(props, ['closable', 'wrapClassName', 'title', 'bodyStyle']);


    wrapClassName = styles.normal + ' ' + wrapClassName;
    bodyStyle = (0, _extends3.default)({
        maxHeight: window.innerHeight * 0.7 + 'px'
    }, bodyStyle);
    title = function renderTitle() {
        return _react2.default.createElement(
            'div',
            { className: styles.title, style: { paddingRight: closable ? '32px' : '0px' } },
            _react2.default.createElement(
                'div',
                { className: styles.title_name },
                title
            ),
            closable ? _react2.default.createElement(
                'div',
                { className: styles.close },
                _react2.default.createElement(
                    'p',
                    { onClick: ModalProps.onCancel },
                    _react2.default.createElement(_icon2.default, { type: 'close' })
                )
            ) : ''
        );
    }();

    return _react2.default.createElement(
        _modal2.default,
        (0, _extends3.default)({
            width: 700,
            maskClosable: false,
            closable: false,
            title: title,
            wrapClassName: wrapClassName,
            bodyStyle: bodyStyle
        }, ModalProps),
        ModalProps.children
    );
}
VtxModal.info = _modal2.default.info;
VtxModal.success = _modal2.default.success;
VtxModal.error = _modal2.default.error;
VtxModal.warning = _modal2.default.warning;
VtxModal.confirm = _modal2.default.confirm;

exports.default = VtxModal;
module.exports = exports['default'];