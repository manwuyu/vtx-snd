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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VtxItemModal = require('./VtxItemModal.css');

var _VtxItemModal2 = _interopRequireDefault(_VtxItemModal);

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

require('antd/lib/spin/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/css');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/css');

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

require('antd/lib/row/style/css');

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

require('antd/lib/col/style/css');

var _treeSelect = require('antd/lib/tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

require('antd/lib/tree-select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/css');

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

require('antd/lib/input-number/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var TextArea = _input2.default.TextArea;
var Option = _select2.default.Option;

function getContentJsx(item, contentProps, setFieldsValue) {

    switch (item.contType.toLowerCase()) {
        case 'input':
            var InputProps = (0, _extends3.default)({
                style: { width: '100%' },
                onBlur: function onBlur(e) {},
                onChange: function onChange() {}
            }, item.options);
            return _react2.default.createElement(_input2.default, InputProps);
            break;
        case 'select':
            var SelectProps = (0, _extends3.default)({
                showSearch: true,
                style: { width: '100%' },
                onChange: function onChange() {},
                onSelect: function onSelect() {}
            }, item.options);
            var SelectOtherProps = (0, _extends3.default)({
                selectOptionValue: 'id',
                selectOptionName: 'name'
            }, item);
            var SelectOptionProps = (0, _extends3.default)({}, item.optionOptions ? item.optionOptions : {});
            return _react2.default.createElement(
                _select2.default,
                (0, _extends3.default)({}, SelectProps, {
                    onSelect: function onSelect(value, option) {
                        SelectProps.onSelect(value, option, setFieldsValue);
                    }
                }),
                contentProps[SelectOtherProps.selectDataKey] instanceof Array && contentProps[SelectOtherProps.selectDataKey].map(function (sitem, index) {
                    return _react2.default.createElement(
                        Option,
                        (0, _extends3.default)({ value: '' + sitem[SelectOtherProps.selectOptionValue], key: index }, SelectOptionProps),
                        sitem[SelectOtherProps.selectOptionName]
                    );
                })
            );
            break;
        case 'inputnumber':
            var InputNumberProps = (0, _extends3.default)({
                style: { width: '100%' },
                onChange: function onChange() {}
            }, item.options);
            return _react2.default.createElement(_inputNumber2.default, InputNumberProps);
            break;
        case 'treeselect':
            var TreeSelectProps = (0, _extends3.default)({
                style: {},
                dropdownStyle: {
                    maxHeight: 400
                },
                showSearch: true,
                disabled: false,
                treeDefaultExpandedKeys: ['-1'],
                treeData: contentProps[item.treeDataKey],
                onChange: function onChange() {}
            }, item.options);
            return _react2.default.createElement(_treeSelect2.default, TreeSelectProps);
            break;
        case 'textarea':
            var TextAreaProps = (0, _extends3.default)({
                style: {},
                autosize: { minRows: 3 },
                onBlur: function onBlur(e) {},
                onChange: function onChange() {}
            }, item.options);
            return _react2.default.createElement(TextArea, TextAreaProps);
    }
}

function getinitialValue(contentProps, item) {
    switch (item.contType.toLowerCase()) {
        case 'select':
            var selectResult = contentProps[item.contValue] ? '' + contentProps[item.contValue] : contentProps[item.contValue];
            if (typeof contentProps[item.contValue] == 'number') {
                selectResult = contentProps[item.contValue].toString();
            }
            return selectResult;
            break;
        default:
            return contentProps[item.contValue];
            break;
    }
}

var NewItem = function (_React$Component) {
    (0, _inherits3.default)(NewItem, _React$Component);

    function NewItem(props) {
        (0, _classCallCheck3.default)(this, NewItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewItem.__proto__ || (0, _getPrototypeOf2.default)(NewItem)).call(this, props));

        _this.reset = function () {
            _this.props.form.resetFields();
        };

        _this.submit = function (callBack) {
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    callBack(values);
                }
            });
        };

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(NewItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                modalProps = _props.modalProps,
                contentProps = _props.contentProps,
                itemArrs = _props.itemArrs,
                form = _props.form;
            var getFieldDecorator = form.getFieldDecorator,
                getFieldProps = form.getFieldProps,
                getFieldValue = form.getFieldValue,
                setFieldsValue = form.setFieldsValue;

            var initModalProps = (0, _extends3.default)({
                width: 900,
                title: '',
                maskClosable: false
            }, modalProps);
            return _react2.default.createElement(
                _modal2.default,
                initModalProps,
                modalProps.visible ? _react2.default.createElement(
                    _form2.default,
                    null,
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        itemArrs instanceof Array && itemArrs.map(function (item, key) {
                            return _react2.default.createElement(
                                _col2.default,
                                { span: 12, key: key },
                                _react2.default.createElement(
                                    FormItem,
                                    {
                                        label: item.label,
                                        labelCol: { span: 6 },
                                        wrapperCol: { span: 16 }
                                    },
                                    getFieldDecorator([item.contValue], {
                                        rules: item.rules ? item.rules : [],
                                        initialValue: getinitialValue(contentProps, item)
                                    })(getContentJsx(item, contentProps, setFieldsValue))
                                )
                            );
                        })
                    )
                ) : null
            );
        }
    }]);
    return NewItem;
}(_react2.default.Component);

var NewItemForm = _form2.default.create()(NewItem);
exports.default = NewItemForm;
module.exports = exports['default'];