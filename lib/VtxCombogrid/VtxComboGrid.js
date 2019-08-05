'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

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

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

var _VtxDatagrid = require('../VtxDatagrid');

var _VtxDatagrid2 = _interopRequireDefault(_VtxDatagrid);

require('./VtxComboGrid.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    cbBox: 'vtx-ui-combogrid-cbbox',
    formGrid: 'vtx-ui-combogrid-formgrid',
    gridTitle: 'vtx-ui-combogrid-gridtitle',
    gridContent: 'vtx-ui-combogrid-gridcontent',
    buttonGrid: 'vtx-ui-combogrid-buttongrid',
    form_ct: 'vtx-ui-combogrid-form_ct',
    grid_ct: 'vtx-ui-combogrid-grid_ct'
};

var Option = _select2.default.Option;

/*------------组件props-----------
search(form,pagination),查询函数
clear(),
selectRow(rows)，选中行事件
value,
name,
tableCfg:{tableData,tableColumns,total},
formCfg:[{name,type,key}],
*/

var ComboGrid = function (_React$Component) {
    (0, _inherits3.default)(ComboGrid, _React$Component);

    function ComboGrid(props) {
        (0, _classCallCheck3.default)(this, ComboGrid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ComboGrid.__proto__ || (0, _getPrototypeOf2.default)(ComboGrid)).call(this, props));

        _this.input = null;
        _this.state = {
            popoverVisible: false
        };
        return _this;
    }

    (0, _createClass3.default)(ComboGrid, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var popoverProps = (0, _extends5.default)({}, this.props, {
                hidePopover: function hidePopover() {
                    _this2.setState({ popoverVisible: false });
                }
            });
            return _react2.default.createElement(
                'div',
                { className: styles.cbBox },
                _react2.default.createElement(
                    _popover2.default,
                    { placement: 'bottomLeft',
                        content: _react2.default.createElement(PopupCT, popoverProps),
                        trigger: 'click',
                        onVisibleChange: function onVisibleChange(v) {
                            _this2.setState({ popoverVisible: v });
                        },
                        visible: this.state.popoverVisible
                    },
                    _react2.default.createElement(_input2.default, { ref: function ref(t) {
                            if (t) _this2.input = t;
                        },
                        value: this.props.value,
                        style: { width: '100%' },
                        suffix: this.props.value === '' || this.props.value === null || this.props.value === undefined ? null : _react2.default.createElement(_icon2.default, { type: 'close-circle', onClick: this.props.clear, style: { cursor: 'pointer' } })
                    })
                )
            );
        }
    }]);
    return ComboGrid;
}(_react2.default.Component);

var PopupCT = function (_React$Component2) {
    (0, _inherits3.default)(PopupCT, _React$Component2);

    function PopupCT(props) {
        (0, _classCallCheck3.default)(this, PopupCT);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (PopupCT.__proto__ || (0, _getPrototypeOf2.default)(PopupCT)).call(this, props));

        _this3.state = {
            query: {},
            form: _this3.getInitForm(),
            currentPage: 1,
            pageSize: 10
        };
        _this3.panel = null;
        return _this3;
    }

    (0, _createClass3.default)(PopupCT, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.query();
        }
    }, {
        key: 'getInitForm',
        value: function getInitForm() {
            var new_form = {};
            var formCfg = this.props.formCfg || [];
            for (var i = 0, len = formCfg.length; i < len; i++) {
                new_form[formCfg[i].key] = '';
            }
            return new_form;
        }
    }, {
        key: 'query',
        value: function query() {
            this.setState({
                query: (0, _extends5.default)({}, this.state.form),
                currentPage: 1
            });
            this.props.search(this.state.form, {
                currentPage: 1,
                pageSize: this.state.pageSize
            });
        }
    }, {
        key: 'empty',
        value: function empty() {
            this.setState({
                query: this.getInitForm(),
                form: this.getInitForm(),
                currentPage: 1
            });
            this.props.search(this.getInitForm(), {
                currentPage: 1,
                pageSize: this.state.pageSize
            });
        }
    }, {
        key: 'getTableProps',
        value: function getTableProps() {
            var t = this;
            var tbcfg = t.props.tableCfg;
            return {
                columns: tbcfg.tableColumns,
                dataSource: tbcfg.tableData,
                startIndex: (t.state.currentPage - 1) * t.state.pageSize + 1, //后端分页
                indexColumn: true,
                autoFit: true,
                size: 'small',
                onChange: function onChange(pagination, filters, sorter) {
                    t.props.search(t.state.query, {
                        pageSize: pagination.pageSize,
                        currentPage: pagination.current
                    });
                    t.setState({
                        currentPage: pagination.current
                    });
                },
                onRowClick: function onRowClick(record, index, event) {
                    t.props.hidePopover();
                    if (typeof t.props.selectRow === 'function') {
                        t.props.selectRow(record);
                    }
                },

                pagination: {
                    showQuickJumper: true,
                    current: t.state.currentPage,
                    total: tbcfg.total,
                    pageSize: t.state.pageSize,
                    showTotal: function showTotal(total) {
                        return '\u5408\u8BA1 ' + tbcfg.total + ' \u6761';
                    }
                }
            };
        }
    }, {
        key: 'formGenerator',
        value: function formGenerator(formCfg) {
            var _this4 = this;

            var t = this;
            return _react2.default.createElement(
                'div',
                null,
                formCfg.map(function (item, index) {
                    switch (item.type) {
                        case 'input':
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: styles.formGrid },
                                _react2.default.createElement(
                                    'div',
                                    { className: styles.gridTitle },
                                    item.name
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: styles.gridContent },
                                    _react2.default.createElement(_input2.default, { value: t.state.form[item.key],
                                        style: { width: '100%' },
                                        onChange: function onChange(e) {
                                            t.setState({
                                                form: (0, _extends5.default)({}, t.state.form, (0, _defineProperty3.default)({}, item.key, e.target.value))
                                            });
                                        } })
                                )
                            );
                        case 'select':
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: styles.formGrid },
                                _react2.default.createElement(
                                    'div',
                                    { className: styles.gridTitle },
                                    item.name
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: styles.gridContent },
                                    _react2.default.createElement(
                                        _select2.default,
                                        { getPopupContainer: function getPopupContainer() {
                                                return t.panel;
                                            },
                                            value: t.state.form[item.key],
                                            style: { width: '100%' },
                                            onChange: function onChange(val) {
                                                t.setState({
                                                    form: (0, _extends5.default)({}, t.state.form, (0, _defineProperty3.default)({}, item.key, val))
                                                });
                                            } },
                                        item.options.map(function (op) {
                                            return _react2.default.createElement(
                                                Option,
                                                { key: op.value },
                                                op.name
                                            );
                                        })
                                    )
                                )
                            );
                        default:
                            return null;
                    }
                }),
                _react2.default.createElement(
                    'div',
                    { className: styles.buttonGrid },
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', size: 'small', onClick: function onClick() {
                                if (typeof _this4.props.search === 'function') {
                                    _this4.query();
                                }
                            } },
                        '\u67E5\u8BE2'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { size: 'small', onClick: function onClick() {
                                _this4.empty();
                            } },
                        '\u6E05\u7A7A'
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                'div',
                { ref: function ref(t) {
                        if (t) _this5.panel = t;
                    } },
                _react2.default.createElement(
                    'div',
                    { className: styles.form_ct },
                    this.formGenerator(this.props.formCfg)
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.grid_ct },
                    _react2.default.createElement(_VtxDatagrid2.default, this.getTableProps())
                )
            );
        }
    }]);
    return PopupCT;
}(_react2.default.Component);

exports.default = ComboGrid;
module.exports = exports['default'];