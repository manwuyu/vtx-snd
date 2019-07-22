'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VtxRow = require('../VtxGrid/VtxRow.js');

var _VtxRow2 = _interopRequireDefault(_VtxRow);

var _VtxCol = require('../VtxGrid/VtxCol.js');

var _VtxCol2 = _interopRequireDefault(_VtxCol);

require('./VtxBtnGroup.css');

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/css');

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

require('antd/lib/checkbox/style/css');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    normal: 'vtx-ui-btnGroup-normal',
    extraBtns: 'vtx-ui-btnGroup-extraBtns',
    titleselectioncontainer: 'vtx-ui-btnGroup-titleselectioncontainer',
    item: 'vtx-ui-btnGroup-item',
    title: 'vtx-ui-btnGroup-titleselectioncontainer-title'
};

var SubMenu = _menu2.default.SubMenu;

var confirm = _modal2.default.confirm;
var ButtonGroup = _button2.default.Group;

var VtxGrid = function (_React$Component) {
    _inherits(VtxGrid, _React$Component);

    function VtxGrid(props) {
        _classCallCheck(this, VtxGrid);

        var _this = _possibleConstructorReturn(this, (VtxGrid.__proto__ || Object.getPrototypeOf(VtxGrid)).call(this, props));

        _this.renderextraButtons = function () {
            var extraButtons = _this.props.extraButtons;

            if (!(extraButtons instanceof Array)) return _react2.default.createElement(_menu2.default, null);
            var menuItems = [];
            extraButtons.map(function (item, index) {
                if (!item.key) {
                    console.error('缺少key');
                    return false;
                }
                if (!item.onClick) {
                    item.onClick = function () {};
                }
                if (item.key == 'rows') {
                    menuItems.push(_react2.default.createElement(
                        _menu2.default.Item,
                        { key: item.key },
                        _react2.default.createElement(
                            'div',
                            {
                                style: _extends({}, item.style),
                                className: styles.item + ' ' + (item.className ? item.className : ''),
                                onClick: item.onClick
                            },
                            item.text ? item.text : '导出选中行'
                        )
                    ));
                } else if (item.key == 'page') {
                    menuItems.push(_react2.default.createElement(
                        _menu2.default.Item,
                        { key: item.key },
                        _react2.default.createElement(
                            'div',
                            {
                                style: _extends({}, item.style),
                                className: styles.item + ' ' + (item.className ? item.className : ''),
                                onClick: item.onClick
                            },
                            item.text ? item.text : '导出当前页'
                        )
                    ));
                } else if (item.key == 'all') {
                    menuItems.push(_react2.default.createElement(
                        _menu2.default.Item,
                        { key: item.key },
                        _react2.default.createElement(
                            'div',
                            {
                                style: _extends({}, item.style),
                                className: styles.item + ' ' + (item.className ? item.className : ''),
                                onClick: item.onClick
                            },
                            item.text ? item.text : '导出全部'
                        )
                    ));
                } else {
                    menuItems.push(_react2.default.createElement(
                        _menu2.default.Item,
                        { key: item.key },
                        _react2.default.createElement(
                            'div',
                            {
                                style: _extends({}, item.style),
                                className: styles.item + ' ' + (item.className ? item.className : ''),
                                onClick: item.onClick
                            },
                            item.text ? item.text : '未知按钮'
                        )
                    ));
                }
            });
            return _react2.default.createElement(
                _menu2.default,
                null,
                menuItems
            );
        };

        _this.analyzeButtons = function () {
            var buttons = _this.props.buttons;

            if (!(buttons instanceof Array)) return null;
            var btns = [];
            var menuItems = [];
            buttons.map(function (item, index) {
                if (item.type == 'new') {
                    btns.push(_react2.default.createElement(
                        _button2.default,
                        {
                            key: index,
                            icon: 'plus',
                            onClick: item.onClick,
                            type: 'plus',
                            className: item.className,
                            style: _extends({}, item.style)
                        },
                        item.text
                    ));
                } else if (item.type == 'del') {
                    btns.push(_react2.default.createElement(
                        _button2.default,
                        {
                            key: index,
                            icon: 'delete',
                            type: 'delete',
                            onClick: function onClick() {
                                return confirm(_extends({
                                    className: 'delModal',
                                    title: '确定删除选中的数据吗?',
                                    okText: '确定',
                                    okType: 'primary',
                                    cancelText: '取消',
                                    onOk: function onOk() {
                                        console.log('OK');
                                    },
                                    onCancel: function onCancel() {
                                        console.log('Cancel');
                                    }
                                }, item.modal));
                            },
                            className: item.className,
                            style: _extends({}, item.style)
                        },
                        item.text
                    ));
                } else {
                    var menu = _react2.default.createElement(
                        _menu2.default,
                        null,
                        item.children && item.children.map(function (item, index) {
                            return _react2.default.createElement(
                                _menu2.default.Item,
                                { key: index },
                                _react2.default.createElement(
                                    'div',
                                    {
                                        style: _extends({}, item.style),
                                        onClick: item.onClick,
                                        className: styles.item + ' ' + (item.className ? item.className : '')
                                    },
                                    _react2.default.createElement(_icon2.default, {
                                        type: item.icon || 'menu-unfold',
                                        style: { marginRight: '5px' }
                                    }),
                                    item.text
                                )
                            );
                        })
                    );
                    btns.push(_react2.default.createElement(
                        _dropdown2.default,
                        { overlay: menu, key: index },
                        _react2.default.createElement(
                            _button2.default,
                            {
                                icon: item.icon || 'bars',
                                className: item.className,
                                type: 'more',
                                style: _extends({}, item.style)
                            },
                            item.text
                        )
                    ));
                }
            });
            return btns;
        };

        return _this;
    }

    _createClass(VtxGrid, [{
        key: 'render',
        value: function render() {
            var t = this;
            return _react2.default.createElement(
                'div',
                {
                    className: styles.normal + ' ' + (t.props.className ? t.props.className : '')
                },
                _react2.default.createElement(
                    _VtxRow2.default,
                    { gutter: 10, attr: 'row' },
                    _react2.default.createElement(
                        _VtxCol2.default,
                        { span: 12, xl: { span: 12 } },
                        _react2.default.createElement(
                            _VtxRow2.default,
                            { gutter: 10, attr: 'row' },
                            this.analyzeButtons()
                        )
                    ),
                    t.props.columnsVisibility && t.props.changeColumnVisibility ? _react2.default.createElement(
                        _VtxCol2.default,
                        { span: 12, xl: { span: 12 } },
                        _react2.default.createElement(
                            _VtxRow2.default,
                            { gutter: 3, attr: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: styles.extraBtns },
                                _react2.default.createElement(
                                    ButtonGroup,
                                    null,
                                    _react2.default.createElement(
                                        _popover2.default,
                                        {
                                            placement: 'bottomRight',
                                            title: '隐藏显示列',
                                            content: _react2.default.createElement(
                                                'div',
                                                { className: styles.titleselectioncontainer },
                                                t.props.columnsVisibility.map(function (item, index) {
                                                    return _react2.default.createElement(
                                                        _checkbox2.default,
                                                        {
                                                            key: index,
                                                            checked: item.visible,
                                                            onChange: function onChange(e) {
                                                                t.props.changeColumnVisibility(item.key, e.target.checked);
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: styles.title },
                                                            item.title
                                                        )
                                                    );
                                                })
                                            )
                                            // trigger="click"
                                        },
                                        _react2.default.createElement(
                                            _button2.default,
                                            null,
                                            _react2.default.createElement(_icon2.default, { type: 'more', style: { fontSize: '5px' } }),
                                            _react2.default.createElement(_icon2.default, { type: 'caret-down', style: { fontSize: '5px' } })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _dropdown2.default,
                                        { overlay: this.renderextraButtons() },
                                        _react2.default.createElement(
                                            _button2.default,
                                            null,
                                            _react2.default.createElement(_icon2.default, { type: 'export', style: { fontSize: '5px' } }),
                                            _react2.default.createElement(_icon2.default, { type: 'caret-down', style: { fontSize: '5px' } })
                                        )
                                    )
                                )
                            )
                        )
                    ) : null
                )
            );
        }
    }]);

    return VtxGrid;
}(_react2.default.Component);

VtxGrid.VtxRow = _VtxRow2.default;
VtxGrid.VtxCol = _VtxCol2.default;

exports.default = VtxGrid;
module.exports = exports['default'];