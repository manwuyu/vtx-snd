'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VtxExport = require('./VtxExport');

var _VtxExport2 = _interopRequireDefault(_VtxExport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VtxExport2(props) {
    var newProps = (0, _extends3.default)({}, props, {
        mode: 'simple'
    });
    return _react2.default.createElement(_VtxExport2.default, newProps);
}

exports.default = VtxExport2;
module.exports = exports['default'];