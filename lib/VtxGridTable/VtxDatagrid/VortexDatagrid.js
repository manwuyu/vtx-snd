'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

require('antd/lib/table/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

require('antd/lib/popconfirm/style/css');

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/tooltip/style/css');

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

require('antd/lib/checkbox/style/css');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/css');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/css');

require('./VortexDatagrid.css');

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confirm = _modal2.default.confirm;

var styles = {
    autoHeightcontainer: 'vtx-ui-grid-data-table-autoheightcontainer',
    ct: 'vtx-ui-grid-data-table-ct',
    nowrapOverflow: 'vtx-ui-grid-data-table-nowrapoverflow',
    titleSelectionContainer: 'vtx-ui-grid-data-table-titleselectioncontainer',
    columnBt: 'vtx-ui-grid-data-table-columnbt',
    indexColumn: 'vtx-ui-grid-data-table-indexcolumn',
    data_tb: 'vtx-ui-grid-data-table-datagrid'
};

var VortexDatagrid = function (_React$Component) {
    (0, _inherits3.default)(VortexDatagrid, _React$Component);

    function VortexDatagrid(props) {
        (0, _classCallCheck3.default)(this, VortexDatagrid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VortexDatagrid.__proto__ || (0, _getPrototypeOf2.default)(VortexDatagrid)).call(this, props));

        _this.id = 'vtxdg' + new Date().getTime();
        // 表头和分页组件的高度，用来计算表格body的高度
        // this.headFootHeight = props.headFootHeight || (66 + props.num - 62);

        _this.headFootHeight = props.headFootHeight || 130;
        _this.state = {
            autoFit: props.autoFit,
            bodyHeight: null,
            // columnConfig: this.columnHandler(),
            columnsVisibility: props.columns.map(function (item) {
                return {
                    title: item.title,
                    key: item.key,
                    visible: Array.isArray(props.defaultVisibleCols) ? props.defaultVisibleCols.indexOf(item.key) > -1 : true
                };
            })
        };
        _this.resetHeight = _this.resetHeight.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(VortexDatagrid, [{
        key: 'resetHeight',
        value: function resetHeight() {
            var bodyHeight = this.props.style.height - this.headFootHeight;
            this.setState({
                bodyHeight: bodyHeight
            });
            var divs = document.getElementById(this.id).getElementsByTagName('div');
            var bodyDiv = Array.prototype.filter.call(divs, function (dom) {
                return dom.className == 'ant-table-body';
            })[0];
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var t = this;
            // 自适应高度
            if (t.state.autoFit) {
                setTimeout(function () {
                    t.resetHeight();
                }, 1);
                window.addEventListener('resize', t.resetHeight, false);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var t = this;
            if (t.state.autoFit) {
                window.removeEventListener('resize', t.resetHeight, false);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var changeColumn = _ref.changeColumn;

            this.changeColumnVisibility(changeColumn.key, changeColumn.visible);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            //重新渲染结束
            var t = this;
            if (t.state.bodyHeight != this.props.style.height - this.headFootHeight) {
                if (t.state.autoFit) {
                    setTimeout(function () {
                        t.resetHeight();
                    }, 10);
                }
            }
        }
        // 表格column配置项修改

    }, {
        key: 'columnHandler',
        value: function columnHandler(props) {
            var t = this;
            props = props || this.props;

            var deletedColKeys = t.state.columnsVisibility.filter(function (item) {
                return !item.visible;
            }).map(function (item) {
                return item.key;
            });

            var columnConfig = props.columns.filter(function (item) {
                return deletedColKeys.indexOf(item.key) == -1;
            }).map(function (col, index) {
                var newCol = (0, _extends3.default)({}, col);
                // let title = newCol.title;
                // newCol.preTitle = title;
                // newCol.title = <span onContextMenu={()=>{alert(title)}}>{title}</span>
                // 配置按钮操作列
                if (col.renderButtons) {
                    delete newCol.renderButtons;
                    newCol.render = function (text, record, index) {
                        return t.generateButtons(col.renderButtons, record, text, index);
                    };
                }
                // 不允许换行列的处理
                if (col.nowrap) {
                    delete newCol.nowrap;
                    newCol.className = styles.nowrapOverflow;
                    if (typeof newCol.render == 'function') {
                        var oldRender = newCol.render;
                        newCol.render = function (text, record) {
                            if (text === null || text === undefined) text = '';
                            return _react2.default.createElement(
                                _tooltip2.default,
                                { title: oldRender(text, record), placement: 'topLeft' },
                                oldRender(text, record)
                            );
                        };
                    } else {
                        newCol.render = function (text, record) {
                            if (text === null || text === undefined) text = '';
                            return _react2.default.createElement(
                                _tooltip2.default,
                                { title: _react2.default.createElement(
                                        'span',
                                        null,
                                        text
                                    ), placement: 'topLeft' },
                                text
                            );
                        };
                    }
                }
                return newCol;
            });

            // 序列号处理
            if (props.indexColumn) {
                columnConfig.unshift({
                    title: props.indexTitle || ' ',
                    dataIndex: 'rIndex',
                    key: 'rIndex',
                    width: 50,
                    className: styles.indexColumn
                });
            }

            return columnConfig;
        }
        // 隐藏/显示列

    }, {
        key: 'changeColumnVisibility',
        value: function changeColumnVisibility(key, visible) {
            var columnsVisibility = this.state.columnsVisibility.map(function (item) {
                if (item.key == key) {
                    return (0, _extends3.default)({}, item, {
                        visible: visible
                    });
                }
                return item;
            });
            this.setState({
                columnsVisibility: columnsVisibility
            });
            if (typeof this.props.colsVisibilityChange == 'function') {
                this.props.colsVisibilityChange(columnsVisibility);
            }
        }
        // 快捷生成表格按钮列

    }, {
        key: 'generateButtons',
        value: function generateButtons(btList, rowData, text, index) {
            function onClick(_ref2) {
                // console.log(key)

                var key = _ref2.key;
            }
            var btnList = typeof btList === 'function' ? btList(text, rowData, index) : btList;
            if (btnList.length <= 2) {
                return _react2.default.createElement(
                    'span',
                    null,
                    btnList.length <= 2 && btnList.map(function (bt, bt_index) {
                        switch (bt.name) {
                            /*case '编辑': return (
                                    <span key={bt_index}>
                                        {bt_index==0?null: <span className="ant-divider" />}
                                        <a onClick={()=>{
                                            if(typeof(bt.onClick)=='function'){
                                                bt.onClick(rowData);
                                            }
                                        }}>{bt.name}</a>
                                    </span>
                                );*/
                            case '删除':
                                return _react2.default.createElement(
                                    'span',
                                    { key: bt_index },
                                    bt_index == 0 ? null : _react2.default.createElement('span', { className: 'ant-divider' }),
                                    _react2.default.createElement(
                                        'a',
                                        {
                                            onClick: function onClick() {
                                                return confirm((0, _extends3.default)({
                                                    className: 'delMessage',
                                                    title: '确定删除吗?',
                                                    okText: '确定',
                                                    okType: 'primary',
                                                    cancelText: '取消',
                                                    onOk: function onOk() {
                                                        if (typeof bt.onClick == 'function') {
                                                            bt.onClick(rowData);
                                                        }
                                                    }
                                                }, bt.modal));
                                            }
                                        },
                                        bt.name
                                    )
                                );
                            default:
                                return _react2.default.createElement(
                                    'span',
                                    { key: bt_index },
                                    bt_index == 0 ? null : _react2.default.createElement('span', { className: 'ant-divider' }),
                                    _react2.default.createElement(
                                        'a',
                                        {
                                            onClick: function onClick() {
                                                if (typeof bt.onClick == 'function') {
                                                    bt.onClick(rowData);
                                                }
                                            }
                                        },
                                        bt.name
                                    )
                                );
                        }
                    })
                );
            } else {
                var result = [];
                {
                    btnList.map(function (bt, bt_index) {
                        if (bt_index > 0) {
                            switch (bt.name) {
                                case '删除':
                                    result.push(_react2.default.createElement(
                                        _menu2.default.Item,
                                        { key: bt_index },
                                        _react2.default.createElement(
                                            'a',
                                            {
                                                onClick: function onClick() {
                                                    return confirm((0, _extends3.default)({
                                                        className: 'delMessage',
                                                        title: '确定删除吗?',
                                                        okText: '确定',
                                                        okType: 'primary',
                                                        cancelText: '取消',
                                                        onOk: function onOk() {
                                                            if (typeof bt.onClick == 'function') {
                                                                bt.onClick(rowData);
                                                            }
                                                        }
                                                    }, bt.modal));
                                                },
                                                style: { width: 80 }
                                            },
                                            bt.name
                                        )
                                    ));
                                    break;
                                default:
                                    result.push(_react2.default.createElement(
                                        _menu2.default.Item,
                                        { key: bt_index },
                                        _react2.default.createElement(
                                            'a',
                                            {
                                                onClick: function onClick() {
                                                    if (typeof bt.onClick == 'function') {
                                                        bt.onClick(rowData);
                                                    }
                                                },
                                                style: { width: 80 }
                                            },
                                            bt.name
                                        )
                                    ));
                                    break;
                            }
                        }
                    });
                }
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'a',
                            {
                                onClick: function onClick() {
                                    if (typeof btnList[0].onClick == 'function') {
                                        btnList[0].onClick(rowData);
                                    }
                                }
                            },
                            btnList[0].name
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement('span', { className: 'ant-divider' }),
                        _react2.default.createElement(
                            _dropdown2.default,
                            { overlay: _react2.default.createElement(
                                    _menu2.default,
                                    { onClick: onClick },
                                    result
                                ) },
                            _react2.default.createElement(
                                'a',
                                null,
                                '\u66F4\u591A ',
                                _react2.default.createElement(_icon2.default, { type: 'down' })
                            )
                        )
                    )
                );
            }
        }
        // 获取经过处理的表格最新props

    }, {
        key: 'getNewProps',
        value: function getNewProps() {
            var t = this;

            var newProps = (0, _extends3.default)({}, t.props, {
                columns: t.columnHandler()
            });
            // 自适应处理
            if (newProps.autoFit) {
                delete newProps.autoFit;
                if (newProps.scroll) {
                    newProps.scroll = (0, _extends3.default)({}, newProps.scroll, {
                        y: t.state.bodyHeight
                    });
                } else {
                    newProps.scroll = {
                        y: t.state.bodyHeight
                    };
                }
            }
            // 序列号处理
            if (newProps.indexColumn) {
                delete newProps.indexColumn;
                var startIndex = typeof newProps.startIndex == 'number' ? newProps.startIndex : 1;
                delete newProps.startIndex;
                newProps.dataSource = newProps.dataSource.map(function (item, index) {
                    return (0, _extends3.default)({}, item, {
                        rIndex: index + startIndex
                    });
                });
            }

            return newProps;
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this;
            var containerClasses = [styles.ct];
            if (t.state.autoFit) {
                containerClasses.push(styles.autoHeightcontainer);
            }

            return _react2.default.createElement(
                'div',
                { id: t.id, className: containerClasses.join(' ') },
                _react2.default.createElement(_table2.default, (0, _extends3.default)({}, t.getNewProps(), { className: t.dataSource ? styles.data_tb : '' }))
            );
        }
    }]);
    return VortexDatagrid;
}(_react2.default.Component);

exports.default = VortexDatagrid;
module.exports = exports['default'];