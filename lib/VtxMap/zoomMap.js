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

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zoomMap = function (_React$Component) {
    (0, _inherits3.default)(zoomMap, _React$Component);

    function zoomMap(props) {
        (0, _classCallCheck3.default)(this, zoomMap);

        var _this = (0, _possibleConstructorReturn3.default)(this, (zoomMap.__proto__ || (0, _getPrototypeOf2.default)(zoomMap)).call(this, props));

        _this.map = null;
        _this.state = {
            filterPoints: []
        };
        return _this;
    }

    (0, _createClass3.default)(zoomMap, [{
        key: 'resetPoints',
        value: function resetPoints() {
            var mapPoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var zoomLv = arguments[1];

            // console.log('当前zoom等级',this.state.zoomLv);
            console.log(this.map.getMapExtent());
            zoomLv = zoomLv || this.map.getZoomLevel();
            if (zoomLv) {
                this.setState({
                    filterPoints: mapPoints.filter(function (item) {
                        return typeof item.zoomLevel == 'number' ? item.zoomLevel <= zoomLv : true;
                    })
                }, function () {
                    // console.log(`zoom等级(${this.state.zoomLv})过滤后还有${this.state.filterPoints.length}个点`);
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log(this.map.getMapExtent())        
            // 地图加载完成取得当前zoom值，初始化内部点数据
            this.resetPoints(this.props.mapPoints);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.deepEqual(this.props.mapPoints, nextProps.mapPoints)) {
                // 外部点数据改变，更新内部点数据
                this.resetPoints(nextProps.mapPoints);
            }
        }
    }, {
        key: 'deepEqual',
        value: function deepEqual(a, b) {
            return _immutable2.default.is(_immutable2.default.fromJS(a), _immutable2.default.fromJS(b));
        }
    }, {
        key: 'zoomEnd',
        value: function zoomEnd(obj) {
            // console.log(obj)
            //zoom操作后，更新内部点数据
            this.resetPoints(this.props.mapPoints);

            if (typeof this.props.zoomEnd === "function") {
                this.props.zoomEnd(obj);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var newProps = (0, _extends3.default)({}, this.props, {
                zoomEnd: this.zoomEnd.bind(this),
                mapPoints: this.state.filterPoints,
                ref: function ref(p) {
                    if (p) {
                        _this2.map = p;
                    }
                }
                // 屏蔽地图默认的setFitView的调整zoom功能，只会重新设置center
            });if (newProps.mapVisiblePoints) {
                newProps.mapVisiblePoints = (0, _extends3.default)({}, newProps.mapVisiblePoints, {
                    type: 'center'
                });
            }

            return _react2.default.createElement(_Map2.default, newProps);
        }
    }]);
    return zoomMap;
}(_react2.default.Component);

exports.default = zoomMap;
module.exports = exports['default'];