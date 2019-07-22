'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

require('antd/lib/input-number/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;
var TextArea = _input2.default.TextArea;
var Option = Select.Option;

function getContentJsx(item, contentProps, setFieldsValue) {
    switch (item.contType.toLowerCase()) {
        case 'input':
            var InputProps = _extends({
                style: { width: '100%' },
                onChange: function onChange() {}
            }, item);
            return _react2.default.createElement(_input2.default, {
                placeholder: InputProps.placeholder,
                onBlur: function onBlur(e) {},
                maxLength: InputProps.maxLength,
                style: InputProps.style,
                onChange: InputProps.onChange
            });
            break;
        case 'select':
            var SelectProps = _extends({
                style: { width: '100%' },
                selectOptionValue: 'id',
                selectOptionName: 'name',
                onChange: function onChange() {},
                onSelect: function onSelect() {}
            }, item);
            return _react2.default.createElement(
                Select,
                {
                    showSearch: true,
                    placeholder: SelectProps.placeholder,
                    style: SelectProps.style,
                    onSelect: function onSelect(value, option) {
                        SelectProps.onSelect(value, option, setFieldsValue);
                    },
                    onChange: SelectProps.onChange
                },
                contentProps[SelectProps.selectDataKey] instanceof Array && contentProps[SelectProps.selectDataKey].map(function (sitem, index) {
                    return _react2.default.createElement(
                        Option,
                        { value: '' + sitem[SelectProps.selectOptionValue], key: index },
                        sitem[SelectProps.selectOptionName]
                    );
                })
            );
            break;
        case 'inputnumber':
            var InputNumberProps = _extends({
                style: { width: '100%' },
                onChange: function onChange() {}
            }, item);
            return _react2.default.createElement(_inputNumber2.default, {
                placeholder: InputNumberProps.placeholder,
                maxLength: InputNumberProps.maxLength,
                style: InputNumberProps.style,
                onChange: InputNumberProps.onChange,
                min: InputNumberProps.min
            });
            break;
        case 'treeselect':
            var TreeSelectProps = _extends({
                style: {},
                dropdownStyle: {
                    maxHeight: 400
                },
                showSearch: true,
                disabled: false,
                treeDefaultExpandedKeys: ['-1'],
                onChange: function onChange() {}
            }, item);
            return _react2.default.createElement(_treeSelect2.default, {
                showSearch: TreeSelectProps.showSearch,
                treeDefaultExpandedKeys: TreeSelectProps.treeDefaultExpandedKeys,
                placeholder: TreeSelectProps.placeholder,
                treeData: contentProps[item.treeDataKey],
                onChange: TreeSelectProps.onChange,
                dropdownStyle: TreeSelectProps.dropdownStyle,
                disabled: TreeSelectProps.disabled
            });
            break;
        case 'textarea':
            var TextAreaProps = _extends({
                style: {},
                onChange: function onChange() {}
            }, item);
            return _react2.default.createElement(TextArea, {
                placeholder: TextAreaProps.placeholder,
                onBlur: function onBlur(e) {},
                autosize: { minRows: 3 },
                onChange: TextAreaProps.onChange
            });
    }
}

function getinitialValue(contentProps, item) {
    switch (item.contType.toLowerCase()) {
        case 'select':
            var selectResult = contentProps[item.contValue] ? '' + contentProps[item.contValue] : contentProps[item.contValue];
            if (typeof contentProps[item.contValue] == 'number') {
                selectResult = contentProps[item.contValue].toString();
            }
            console.log('selectResult', selectResult);
            return selectResult;
            break;
        default:
            return contentProps[item.contValue];
            break;
    }
}

var NewItem = function (_React$Component) {
    _inherits(NewItem, _React$Component);

    function NewItem(props) {
        _classCallCheck(this, NewItem);

        var _this = _possibleConstructorReturn(this, (NewItem.__proto__ || Object.getPrototypeOf(NewItem)).call(this, props));

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

    _createClass(NewItem, [{
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

            var initModalProps = _extends({
                width: 900
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
                                        rules: item.validated,
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