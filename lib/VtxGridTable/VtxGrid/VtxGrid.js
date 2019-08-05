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

var _VtxRow = require('./VtxRow.js');

var _VtxRow2 = _interopRequireDefault(_VtxRow);

var _VtxCol = require('./VtxCol.js');

var _VtxCol2 = _interopRequireDefault(_VtxCol);

require('./VtxGrid.css');

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

var styles = {
  normal: 'vtx-ui-grid-grid-normal',
  min: 'vtx-ui-grid-grid-min',
  max: 'vtx-ui-grid-grid-max',
  moreBtn: 'vtx-ui-grid-grid-moreBtn',
  arrow: 'vtx-ui-grid-grid-arrow',
  arrowOn: 'vtx-ui-grid-grid-arrow-on',
  action: 'vtx-ui-grid-grid-action',
  hidden: 'vtx-ui-grid-grid-hidden',
  normalBox: 'vtx-ui-grid-grid-normalBox'
};

var SubMenu = _menu2.default.SubMenu;

var confirm = _modal2.default.confirm;

var VtxGrid = function (_React$Component) {
  (0, _inherits3.default)(VtxGrid, _React$Component);

  function VtxGrid(props) {
    (0, _classCallCheck3.default)(this, VtxGrid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VtxGrid.__proto__ || (0, _getPrototypeOf2.default)(VtxGrid)).call(this, props));

    _this.isResize = null; //resize定时
    _this.weightiness = 0;
    _this.resetWidth = _this.resetWidth.bind(_this);

    props.gridweight.map(function (item, index) {
      _this.weightiness += item;
    });
    var height = 38,
        style = {};
    if (props.showAll || props.showMore) {
      height = _this.weightiness > 3 ? _this.getHeight(_this.weightiness) : 38;
    }

    _this.state = {
      height: height,
      style: style,
      width: window.innerWidth
    };
    return _this;
  }

  (0, _createClass3.default)(VtxGrid, [{
    key: 'getHeight',
    value: function getHeight(w, h) {
      if (w == 3 && h > 38) return 38;
      if (w == 3 && h == 38) return 76;
      return (Math.ceil(w / 3) + 1) * 38;
    }
  }, {
    key: 'isShowMore',
    value: function isShowMore(weightiness) {
      var _this2 = this;

      var t = this;
      var h = t.state.height;
      if (h > 38) {
        t.setState({
          height: 38
        }, function () {
          return t.props.setGridHeight(_this2.state.height - 38, h);
        });
      } else {
        t.setState({
          height: t.getHeight(weightiness, h)
        }, function () {
          return t.props.setGridHeight(_this2.state.height - 38);
        });
      }
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
          width: window.innerWidth
        });
      }, 50);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var t = this;
      var props = t.props;
      var buttons = props.buttons;

      var w = t.state.width > 1000 ? t.state.width : 1000,
          ar = Math.ceil(210 / w * 24),
          al = 24 - ar;
      var render = function render(d, i) {
        // let b = 4, c = 20,gwt = props.gridweight[i];
        var xs = Math.ceil(62 / (w * al / 24 / 24 / 3)),
            b = xs % 3 === 0 ? xs : xs - xs % 3 + 3,
            c = 24 - b,
            gwt = props.gridweight[i];
        if (gwt === 2) {
          // b = 2;
          b = b / 2;
          c = 24 - b;
        }
        if (gwt === 3) {
          // b = 1;
          b = b / 3;
          c = 24 - b;
        }
        if (i < t.weightiness) {
          return _react2.default.createElement(
            _VtxCol2.default,
            { key: i, span: 8 * gwt, className: _this3.state.height <= 38 && i > 1 ? styles.hidden : '' },
            _react2.default.createElement(
              _VtxRow2.default,
              { gutter: 2, attr: 'row' },
              _react2.default.createElement(
                _VtxCol2.default,
                { span: b },
                _react2.default.createElement(
                  'span',
                  { 'data-type': 'fieldName' },
                  props.titles[i]
                )
              ),
              _react2.default.createElement(
                _VtxCol2.default,
                { span: c },
                _react2.default.createElement(
                  'span',
                  { 'data-type': 'colon' },
                  '\uFF1A',
                  d
                )
              )
            )
          );
        } else {
          return '';
        }
      };
      var analyzeChildern = function analyzeChildern(data) {
        if (!data) return '';
        if (!data.length) {
          return render(data, 0);
        } else {
          return data.map(function (item, index) {
            return render(item, index);
          });
        }
      };
      return _react2.default.createElement(
        'div',
        { className: '' + styles.normalBox },
        _react2.default.createElement(
          'div',
          {
            className: styles.normal + ' ' + (t.props.className ? t.props.className : ''),
            style: (0, _extends3.default)({ height: t.state.height + 'px' }, t.state.style)
          },
          _react2.default.createElement(
            _VtxRow2.default,
            { gutter: 10, attr: 'row' },
            _react2.default.createElement(
              _VtxCol2.default,
              { span: 24, xl: { span: 24 } },
              _react2.default.createElement(
                _VtxRow2.default,
                { gutter: 10, attr: 'row' },
                analyzeChildern(props.children)
              )
            ),
            _react2.default.createElement(
              _VtxCol2.default,
              { span: 4, xl: { span: 3 }, className: '' + styles.action, style: { top: t.state.height - 38 } },
              _react2.default.createElement(
                _VtxRow2.default,
                { gutter: 10, attr: 'row' },
                // t.state.hiddenconfrimButtion?"":
                t.props.hiddenconfrimButtion ? '' : _react2.default.createElement(
                  _VtxCol2.default,
                  { span: 8 },
                  _react2.default.createElement(
                    'span',
                    { 'data-type': 'bt' },
                    _react2.default.createElement(
                      _button2.default,
                      { style: { width: '100%' }, type: 'plus', onClick: props.confirm },
                      props.confirmText || '查询'
                    )
                  )
                ),
                // t.state.hiddenclearButtion?"":
                t.props.hiddenclearButtion ? '' : _react2.default.createElement(
                  _VtxCol2.default,
                  { span: 8 },
                  _react2.default.createElement(
                    'span',
                    { 'data-type': 'bt' },
                    _react2.default.createElement(
                      _button2.default,
                      { style: { width: '100%' }, onClick: props.clear },
                      props.clearText || '重置'
                    )
                  )
                ),
                _react2.default.createElement(
                  _VtxCol2.default,
                  { span: 8 },
                  this.weightiness > 2 && !t.props.hiddenMoreButtion ? _react2.default.createElement(
                    'span',
                    { 'data-type': 'bt', onClick: function onClick() {
                        return t.isShowMore(_this3.weightiness);
                      }, className: '' + styles.moreBtn },
                    t.state.height <= 38 ? _react2.default.createElement(
                      'span',
                      null,
                      '\u5C55\u5F00'
                    ) : _react2.default.createElement(
                      'span',
                      null,
                      '\u6536\u8D77 '
                    ),
                    _react2.default.createElement(
                      'i',
                      { className: 'vtx-ui-iconfont ' + styles.arrow + ' ' + (t.state.height <= 38 ? '' : styles.arrowOn) },
                      '\uE60A'
                    )
                  ) : ''
                )
              )
            )
          )
        )
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      var t = this;
      this.weightiness = 0;
      nextProps.gridweight.map(function (item, index) {
        _this4.weightiness += item;
      });
    }
  }]);
  return VtxGrid;
}(_react2.default.Component);

VtxGrid.VtxRow = _VtxRow2.default;
VtxGrid.VtxCol = _VtxCol2.default;

exports.default = VtxGrid;
module.exports = exports['default'];