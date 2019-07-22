'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VtxGrid = require('./VtxGrid');

var _VtxDatagrid = require('./VtxDatagrid');

var _VtxBtnGroup = require('./VtxBtnGroup');

require('../../static/font/iconfont.css');

require('./VtxGridTable.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  commonbg: 'vtx-ui-gridtable-commonbg',
  noData: 'vtx-ui-gridtable-noData',
  normal: 'vtx-ui-gridtable-normal'
};

var VtxGridTable = function (_React$Component) {
  _inherits(VtxGridTable, _React$Component);

  function VtxGridTable(props) {
    _classCallCheck(this, VtxGridTable);

    var _this = _possibleConstructorReturn(this, (VtxGridTable.__proto__ || Object.getPrototypeOf(VtxGridTable)).call(this, props));

    _this.setGridHeight = function (gridHeight) {
      _this.setState({
        gridHeight: gridHeight
      });
    };

    _this.initHeight = function (grid) {
      var weightiness = 0;
      var gridHeight = 0;
      if (grid) {
        grid.gridweight.map(function (item, index) {
          weightiness += item;
        });
        if (grid.showAll || grid.showMore) {
          gridHeight = weightiness > 3 ? _this.getHeight(weightiness) : 38;
        }
      }
      return gridHeight;
    };

    _this.changeColumnVisibility = function (key, visible) {
      var columnsVisibility = _this.state.columnsVisibility.map(function (item) {
        if (item.key == key) {
          return _extends({}, item, {
            visible: visible
          });
        }
        return item;
      });
      _this.setState({
        columnsVisibility: columnsVisibility,
        changeColumn: {
          key: key,
          visible: visible
        }
      });
    };

    _this.initDatagrid = function (datagrid) {
      var intParam = {
        indexTitle: '序号',
        indexColumn: true,
        hideColumn: true,
        rowKey: 'id',
        autoFit: false,
        locale: {
          emptyText: _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: styles.noData })
          )
        }
      };
      var intPaginationParam = {
        showSizeChanger: true,
        showQuickJumper: true
      };
      if (datagrid.pagination instanceof Object) {
        datagrid.pagination = _extends({}, intPaginationParam, datagrid.pagination);
      }

      return _extends({}, intParam, datagrid);
    };

    _this.state = {
      columnsVisibility: props.datagrid ? props.datagrid.columns.map(function (item) {
        return {
          title: item.title,
          key: item.key,
          visible: Array.isArray(props.defaultVisibleCols) ? props.defaultVisibleCols.indexOf(item.key) > -1 : true
        };
      }) : undefined,
      changeColumn: {
        key: undefined,
        visible: undefined
      },
      gridHeight: _this.initHeight(props.grid),
      height: window.innerHeight
    };
    _this.isResize = null;
    _this.resetWidth = _this.resetWidth.bind(_this);
    return _this;
  }

  _createClass(VtxGridTable, [{
    key: 'getHeight',
    value: function getHeight(w) {
      return Math.ceil(w / 3) * 38;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          grid = _props.grid,
          datagrid = _props.datagrid,
          btngroup = _props.btngroup;
      var _state = this.state,
          columnsVisibility = _state.columnsVisibility,
          changeColumn = _state.changeColumn,
          gridHeight = _state.gridHeight,
          height = _state.height;

      var tableHeight = height - 177 - gridHeight;
      if (!grid && !btngroup) {
        tableHeight = height - 40 - 55;
      } else if (!grid) {
        tableHeight = height - 40 - 55 - 16 - 63;
      } else if (!btngroup) {
        tableHeight = height - 40 - 55 - 16 - gridHeight - 58;
      } else {
        tableHeight = height - 40 - 55 - 16 - 63 - gridHeight - 58;
      }
      return _react2.default.createElement(
        'div',
        { className: styles.commonbg },
        _react2.default.createElement(
          'div',
          { className: styles.normal, style: { marginTop: grid || btngroup ? 16 : 0 } },
          grid ? _react2.default.createElement(
            _VtxGrid.VtxGrid,
            _extends({}, grid, { setGridHeight: this.setGridHeight }),
            this.props.children
          ) : null,
          btngroup ? _react2.default.createElement(_VtxBtnGroup.VtxBtnGroup, _extends({}, btngroup, {
            columnsVisibility: columnsVisibility,
            changeColumnVisibility: this.changeColumnVisibility
          })) : null,
          datagrid && datagrid.rowSelection && datagrid.rowSelection.showTotal ? _react2.default.createElement(
            'div',
            { className: 'vtx-ui-gridtable-infobox' },
            datagrid.rowSelection.showTotal instanceof Object ? _react2.default.createElement(
              'div',
              { className: 'vtx-ui-gridtable-info' },
              datagrid.rowSelection.showTotal
            ) : _react2.default.createElement(
              'div',
              { className: 'vtx-ui-gridtable-info' },
              _react2.default.createElement(
                'i',
                { className: 'vtx-ui-gridtable-icon' },
                _react2.default.createElement(
                  'svg',
                  { viewBox: '64 64 896 896', 'data-icon': 'info-circle', width: '1em', height: '1em', fill: 'currentColor', 'aria-hidden': 'true', focusable: 'false' },
                  _react2.default.createElement('path', { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z' })
                )
              ),
              '\u5DF2\u9009\u62E9 ',
              _react2.default.createElement(
                'span',
                { className: 'vtx-ui-gridtable-num' },
                datagrid.rowSelection.selectedRowKeys.length
              ),
              ' \u9879',
              _react2.default.createElement(
                'span',
                { className: 'vtx-ui-gridtable-clear', onClick: datagrid.rowSelection.onClear },
                '\u6E05\u7A7A'
              )
            )
          ) : null
        ),
        datagrid ? _react2.default.createElement(_VtxDatagrid.VtxDatagrid, _extends({}, this.initDatagrid(datagrid), {
          gridHeight: gridHeight,
          style: {
            height: datagrid.autoFit ? datagrid.height || tableHeight : 'auto'
          },
          changeColumn: changeColumn
        })) : null
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var t = this;
      // 自适应宽度
      window.addEventListener('resize', t.resetWidth, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var t = this;
      window.removeEventListener('resize', t.resetWidth, false);
    }
  }, {
    key: 'resetWidth',
    value: function resetWidth() {
      var t = this;
      if (this.isResize) {
        clearTimeout(this.isResize);
      }
      this.isResize = setTimeout(function () {
        t.setState({
          height: window.innerHeight
        });
      }, 50);
    }
  }]);

  return VtxGridTable;
}(_react2.default.Component);

exports.default = VtxGridTable;
module.exports = exports['default'];