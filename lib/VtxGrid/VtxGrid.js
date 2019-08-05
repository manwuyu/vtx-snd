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

var _dva = require('dva');

var _router = require('dva/router');

var _VtxRow = require('./VtxRow.js');

var _VtxRow2 = _interopRequireDefault(_VtxRow);

var _VtxCol = require('./VtxCol.js');

var _VtxCol2 = _interopRequireDefault(_VtxCol);

require('./VtxGrid.css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    Lists: 'vtx-ui-grid-lists',
    colon: 'vtx-ui-grid-colon',
    list: 'vtx-ui-grid-list',
    normal: 'vtx-ui-grid-normal'
};

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
        var height = 48,
            style = { borderBottom: '1px solid #e1e1e1' };
        if (props.showAll || props.showMore) {
            style = _this.weightiness > 4 ? { boxShadow: '0 1px 10px -3px #999' } : { borderBottom: '1px solid #e1e1e1' };
            height = _this.weightiness > 4 ? _this.getHeight(_this.weightiness) : 48;
        }
        _this.state = {
            height: height,
            style: style,
            // hiddenMoreButtion: props.hiddenMoreButtion || false,
            // hiddenconfrimButtion: props.hiddenconfrimButtion || false,
            // hiddenclearButtion: props.hiddenclearButtion || false,
            width: window.innerWidth
        };
        return _this;
    }

    (0, _createClass3.default)(VtxGrid, [{
        key: 'getHeight',
        value: function getHeight(w) {
            return Math.ceil(w / 4) * 38 + 10;
        }
    }, {
        key: 'isShowMore',
        value: function isShowMore(weightiness) {
            var t = this;
            var h = t.state.height;
            // if(this.isFrist && (t.props.showAll || t.props.showMore)){
            //     this.isFrist = 0;
            //     t.setState({
            //         height: t.getHeight(weightiness),
            //         style: {
            //             boxShadow: '0 1px 10px -3px #999'
            //         }
            //     })
            //     return false;
            // }
            if (h > 48) {
                t.setState({
                    height: 48,
                    style: {
                        borderBottom: '1px solid #e1e1e1'
                    }
                });
            } else {
                t.setState({
                    height: t.getHeight(weightiness),
                    style: {
                        boxShadow: '0 1px 10px -3px #999'
                    }
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
            var _this2 = this;

            var t = this;
            var props = t.props;
            var w = t.state.width > 1000 ? t.state.width : 1000,
                ar = Math.ceil(210 / w * 24),
                al = 24 - ar;
            var render = function render(d, i) {
                // let b = 4, c = 20,gwt = props.gridweight[i];
                var xs = Math.ceil(62 / (w * al / 24 / 24 / 4)),
                    b = xs % 4 === 0 ? xs : xs - xs % 4 + 4,
                    c = 24 - b,
                    gwt = props.gridweight[i];
                if (gwt === 2) {
                    // b = 2;
                    b = b / 2;
                    c = 24 - b;
                }
                if (gwt === 4) {
                    // b = 1;
                    b = b / 4;
                    c = 24 - b;
                }
                return _react2.default.createElement(
                    _VtxCol2.default,
                    { key: i, span: 6 * gwt },
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
                { ref: function ref(_ref) {
                        _this2.ref = _ref;
                    }, className: styles.normal + ' ' + t.props.className, style: (0, _extends3.default)({ height: t.state.height + 'px' }, t.state.style) },
                _react2.default.createElement(
                    _VtxRow2.default,
                    { gutter: 10, attr: 'row' },
                    _react2.default.createElement(
                        _VtxCol2.default,
                        { span: al, xl: { span: 21 } },
                        _react2.default.createElement(
                            _VtxRow2.default,
                            { gutter: 10, attr: 'row' },
                            analyzeChildern(props.children)
                        )
                    ),
                    _react2.default.createElement(
                        _VtxCol2.default,
                        { span: ar, xl: { span: 3 } },
                        _react2.default.createElement(
                            _VtxRow2.default,
                            { gutter: 10, attr: 'row' },

                            // t.state.hiddenconfrimButtion?"":
                            t.props.hiddenconfrimButtion ? "" : _react2.default.createElement(
                                _VtxCol2.default,
                                { span: 10 },
                                _react2.default.createElement(
                                    'span',
                                    { 'data-type': 'bt' },
                                    _react2.default.createElement(
                                        _button2.default,
                                        { style: { width: '100%' }, type: 'primary', onClick: props.confirm },
                                        props.confirmText || '查询'
                                    )
                                )
                            ),

                            // t.state.hiddenclearButtion?"":
                            t.props.hiddenclearButtion ? "" : _react2.default.createElement(
                                _VtxCol2.default,
                                { span: 10 },
                                _react2.default.createElement(
                                    'span',
                                    { 'data-type': 'bt' },
                                    _react2.default.createElement(
                                        _button2.default,
                                        { style: { width: '100%' }, onClick: props.clear },
                                        props.clearText || '清空'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _VtxCol2.default,
                                { span: 4 },

                                // this.weightiness > 4 && !t.state.hiddenMoreButtion?
                                this.weightiness > 4 && !t.props.hiddenMoreButtion ? _react2.default.createElement(
                                    'span',
                                    { 'data-type': 'bt' },
                                    _react2.default.createElement(_button2.default, { type: 'primary', shape: 'circle', icon: 'ellipsis', onClick: function onClick() {
                                            return t.isShowMore(_this2.weightiness);
                                        } })
                                ) : ''
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
            if (t.ref) {
                t.setState({
                    width: t.ref.offsetWidth
                });
            }
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
            var _this3 = this;

            var t = this;
            this.weightiness = 0;
            nextProps.gridweight.map(function (item, index) {
                _this3.weightiness += item;
            });
            // if(this.weightiness > 4 && (t.props.showAll || t.props.showMore)){
            //     t.isShowMore(this.weightiness);
            // }
            // t.setState({
            //     hiddenMoreButtion: nextProps.hiddenMoreButtion || false,
            //     hiddenconfrimButtion: nextProps.hiddenconfrimButtion || false,
            //     hiddenclearButtion: nextProps.hiddenclearButtion || false,
            // })
        }
    }]);
    return VtxGrid;
}(_react2.default.Component);

VtxGrid.VtxRow = _VtxRow2.default;
VtxGrid.VtxCol = _VtxCol2.default;

exports.default = VtxGrid;
module.exports = exports['default'];