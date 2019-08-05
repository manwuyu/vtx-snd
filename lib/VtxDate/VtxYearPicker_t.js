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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./VtxYearPicker.css');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');


var styles = {
    normal: 'vtx-ui-date-normal',
    calendarpicker: 'vtx-ui-date-calendarpicker',
    clearDate: 'vtx-ui-date-cleardate',
    calendarpickerinput: 'vtx-ui-date-calendarpickerinput',
    calendaricon: 'vtx-ui-date-calendaricon',
    error: 'vtx-ui-date-error',
    years: 'vtx-ui-date-years',
    yearsTitle: 'vtx-ui-date-yearstitle',
    arrows: 'vtx-ui-date-arrows',
    lists: 'vtx-ui-date-lists',
    list: 'vtx-ui-date-list',
    selectlist: 'vtx-ui-date-selectlist',
    selectlist_disabled: 'vtx-ui-date-selectlist_disabled',
    noselect: 'vtx-ui-date-noselect',
    hidden: 'vtx-ui-date-hidden',
    show: 'vtx-ui-date-show'
};

var VtxYearPicker_t = function (_React$Component) {
    (0, _inherits3.default)(VtxYearPicker_t, _React$Component);

    function VtxYearPicker_t(props) {
        (0, _classCallCheck3.default)(this, VtxYearPicker_t);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VtxYearPicker_t.__proto__ || (0, _getPrototypeOf2.default)(VtxYearPicker_t)).call(this, props));

        _this.state = {
            time: props.time,
            selectedtime: props.time,
            cli: document.onclick,
            cn: props.style,
            top: props.top,
            left: props.left,
            bottom: props.bottom,
            signtype: props.signtype
        };
        return _this;
    }

    (0, _createClass3.default)(VtxYearPicker_t, [{
        key: 'clickItem',
        value: function clickItem(item, index, e) {
            var t = this;
            if (index == 0 || index == 11) {
                e.nativeEvent.stopImmediatePropagation();
                t.setState({
                    time: item
                });
            } else {
                t.setState({
                    cn: styles.hidden
                }, function () {
                    setTimeout(function () {
                        t.setState({
                            time: ''
                        });
                    }, 190);
                });
                t.chooseYear(item);
            }
        }
    }, {
        key: 'attachEvent',
        value: function attachEvent() {
            var t = this;
            document.onclick = function (event) {
                t.setState({
                    cn: styles.hidden
                }, function () {
                    setTimeout(function () {
                        t.setState({
                            time: ''
                        });
                    }, 190);
                });
                document.onclick = t.state.cli;
            };
        }
    }, {
        key: 'chooseYear',
        value: function chooseYear(date) {
            var props = this.props;
            var d = date.toString();
            if ('onChange' in props) {
                props.onChange((0, _moment2.default)(d, 'YYYY'), d);
            }
        }
    }, {
        key: 'changeTime',
        value: function changeTime(item, e) {
            e.nativeEvent.stopImmediatePropagation();
            this.setState({
                time: item
            });
        }
    }, {
        key: 'isDisabled',
        value: function isDisabled(time) {
            var t = this;
            if ('disabledDate' in t.props && typeof t.props.disabledDate === 'function') {
                return t.props.disabledDate((0, _moment2.default)(time, 'YYYY'));
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this;
            var props = t.props;
            var calendarAry = [],
                time = void 0,
                startTime = void 0,
                endTime = void 0;
            if (t.state.time == '') {
                calendarAry = [];
            } else {
                time = parseInt(t.state.time, 10);
                startTime = time - (time % 10 + 1);
                endTime = time + (10 - time % 10);
                for (var i = startTime; i <= endTime; i++) {
                    calendarAry.push(i);
                }
            }
            var sty = {
                position: 'absolute',
                left: t.state.left
            };
            if (t.state.signtype == 't') {
                sty.top = t.state.top;
            } else {
                sty.bottom = -t.state.bottom;
            }
            return _react2.default.createElement(
                'div',
                { className: t.state.cn, style: sty },
                !t.state.time ? '' : _react2.default.createElement(
                    'div',
                    { className: styles.years },
                    _react2.default.createElement(
                        'div',
                        { className: styles.yearsTitle },
                        _react2.default.createElement(_icon2.default, { onClick: function onClick(e) {
                                t.changeTime(calendarAry[0], e);
                            }, type: 'double-left', className: styles.arrows, style: { left: '7px' } }),
                        calendarAry[1],
                        '-',
                        calendarAry[10],
                        _react2.default.createElement(_icon2.default, { onClick: function onClick(e) {
                                t.changeTime(calendarAry[11], e);
                            }, type: 'double-right', className: styles.arrows, style: { right: '7px' } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: styles.lists },
                        calendarAry.map(function (item, index) {
                            var disabled = t.isDisabled(item);
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: index,
                                    onClick: function onClick(e) {
                                        if (!disabled) {
                                            t.clickItem(item, index, e);
                                        } else {
                                            e.nativeEvent.stopImmediatePropagation();
                                        }
                                    },
                                    className: styles.list + ' ' + styles.noselect,
                                    unselectable: "on"
                                },
                                _react2.default.createElement(
                                    'span',
                                    {
                                        className: (item == t.state.selectedtime && index !== 0 && index !== 11 ? styles.selectlist : '') + ' ' + (disabled ? styles.selectlist_disabled : '')
                                    },
                                    item
                                )
                            );
                        })
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            //插入真实DOM结束
            var t = this;
            if (!('open' in t.props)) {
                t.attachEvent();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //已加载组件，收到新的参数时调用
            var t = this;
            if (!('open' in nextProps)) {
                if (t.props.sign != nextProps.sign) {
                    t.attachEvent();
                }
            }
            var newParam = {
                selectedtime: nextProps.time,
                cn: nextProps.style,
                top: nextProps.top,
                left: nextProps.left,
                bottom: nextProps.bottom,
                signtype: nextProps.signtype
            };
            if ('open' in nextProps) {
                if (!nextProps.open) {
                    t.setState((0, _extends3.default)({}, newParam), function () {
                        setTimeout(function () {
                            t.setState({
                                time: ''
                            });
                        }, 190);
                    });
                } else {
                    t.setState((0, _extends3.default)({
                        time: nextProps.time
                    }, newParam));
                }
            } else {
                t.setState((0, _extends3.default)({
                    time: nextProps.time
                }, newParam));
            }
        }
    }]);
    return VtxYearPicker_t;
}(_react2.default.Component);
//large 高度为 32px，small 为 22px，default是 28px


exports.default = VtxYearPicker_t;
module.exports = exports['default'];