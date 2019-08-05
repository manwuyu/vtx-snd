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

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DraggableModal = function (_React$Component) {
    (0, _inherits3.default)(DraggableModal, _React$Component);

    function DraggableModal(props) {
        (0, _classCallCheck3.default)(this, DraggableModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DraggableModal.__proto__ || (0, _getPrototypeOf2.default)(DraggableModal)).call(this, props));

        _this.state = {
            init_x: 0,
            init_y: 0,
            x_move: 0,
            y_move: 0
        };
        _this.initSucceed = false; //是否已完成初始化拖拽事件
        _this.startDrag = _this.startDrag.bind(_this);
        _this.initEvent = _this.initEvent.bind(_this);
        return _this;
    }
    // 初始化弹框的拖拽事件


    (0, _createClass3.default)(DraggableModal, [{
        key: 'initEvent',
        value: function initEvent() {
            if (!this.drag) return;
            var modalHead = _reactDom2.default.findDOMNode(this.drag).parentNode.previousSibling;
            if (modalHead.className.indexOf('ant-modal-header') !== -1) {
                modalHead.style.cursor = 'move';
                modalHead.onmousedown = this.startDrag;
                this.initSucceed = true;
            }
        }
        // 开始拖拽：绑定事件

    }, {
        key: 'startDrag',
        value: function startDrag(e) {
            var _this2 = this;

            e.preventDefault();
            this.setState({
                init_x: e.clientX - this.state.x_move,
                init_y: e.clientY - this.state.y_move
            });
            var mousemove = function mousemove(e) {
                _this2.setState({
                    x_move: e.clientX - _this2.state.init_x,
                    y_move: e.clientY - _this2.state.init_y
                });
            };
            var mouseup = function mouseup(e) {
                document.removeEventListener('mousemove', mousemove);
                document.removeEventListener('mouseup', mouseup);
            };

            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var transformStyle = {
                transform: 'translate(' + this.state.x_move + 'px,' + this.state.y_move + 'px)'
            };
            var props = (0, _extends3.default)({}, this.props, {
                style: (0, _extends3.default)({}, this.props.style, transformStyle)
            });

            return _react2.default.createElement(
                _modal2.default,
                props,
                this.props.children,
                _react2.default.createElement('div', { ref: function ref(elem) {
                        _this3.drag = elem;
                    } })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initEvent();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this.initSucceed) {
                this.initEvent();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.visible && nextProps.visible && !nextProps.remainPosition) {
                this.setState({
                    init_x: 0,
                    init_y: 0,
                    x_move: 0,
                    y_move: 0
                });
            }
        }
    }]);
    return DraggableModal;
}(_react2.default.Component);

exports.default = DraggableModal;
module.exports = exports['default'];