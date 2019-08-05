'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

require('./VtxRpsFrame.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    iframeParent: 'vtx-ui-frame-ct'
};

var VtxRpsFrame = function (_React$Component) {
    (0, _inherits3.default)(VtxRpsFrame, _React$Component);

    function VtxRpsFrame() {
        (0, _classCallCheck3.default)(this, VtxRpsFrame);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VtxRpsFrame.__proto__ || (0, _getPrototypeOf2.default)(VtxRpsFrame)).call(this));

        _this.iframeName = Math.random() + new Date().getTime();
        return _this;
    }

    (0, _createClass3.default)(VtxRpsFrame, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.flag !== nextProps.flag) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.getReportInfoByCode();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getReportInfoByCode();
        }
    }, {
        key: 'getReportInfoByCode',
        value: function getReportInfoByCode() {
            var t = this;
            var _props = this.props,
                report_code = _props.report_code,
                report_param = _props.report_param,
                data_param = _props.data_param,
                paramTypeCode = _props.paramTypeCode,
                tenantId = _props.tenantId;

            var param = {
                report_code: report_code,
                timestamp: new Date().valueOf(),
                reqMethod: 0
            };
            var paramCode = paramTypeCode || "param_report_constant";
            //获取公共参数
            var commonParamPromise = new _promise2.default(function (resolve, reject) {
                $.ajax({
                    type: 'get',
                    url: '/cloud/management/rest/np/param/getByParamTypeCode?parameters={"paramTypeCode": "' + paramCode + '","tenantId":"' + tenantId + '"}',
                    // data: postData,
                    dataType: 'json',
                    'content-type': "application/x-www-form-urlencoded",
                    cache: false,
                    success: function success(data) {
                        resolve(data);
                    },
                    error: function error(XMLHttpRequest, textStatus, errorThrown) {
                        reject(textStatus);
                    }
                });
            });
            //获取报表code
            var getReportInfoByCodePromise = new _promise2.default(function (resolve, reject) {
                $.ajax({
                    type: 'get',
                    url: '/cloud/rps/api/np/v101/report/getReportInfoByCode.smvc',
                    data: { parameters: (0, _stringify2.default)(param) },
                    dataType: 'json',
                    async: true,
                    success: function success(data) {
                        resolve(data);
                    },
                    error: function error(XMLHttpRequest, textStatus, errorThrown) {
                        reject(textStatus);
                    }
                });
            });
            _promise2.default.all([commonParamPromise, getReportInfoByCodePromise]).then(function (data) {
                var commonParamResult = data[0];
                var reportInfoByCodeResult = data[1];
                if (!commonParamResult.result && !reportInfoByCodeResult.result) {
                    //报表公共参数
                    var commonParamData = commonParamResult.data;
                    var obj = {};
                    commonParamData.forEach(function (d) {
                        obj[d.parmCode] = d.parmName;
                    });

                    var reportInfoByCodeData = reportInfoByCodeResult.data;
                    var _param = (0, _extends3.default)({
                        data_url: reportInfoByCodeData.data_url,
                        data_param: (0, _stringify2.default)(data_param)
                    }, report_param, obj, {
                        reqMethod: 0
                    });
                    createForm('/ReportServer?report_code=' + report_code + '&reportlet=' + reportInfoByCodeData.reportlet + '&fr_locale=zh_CN&timestamp=' + new Date().valueOf(), _param, '' + t.iframeName);
                }
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: styles.iframeParent },
                _react2.default.createElement('iframe', { className: 'wrapper', width: '100%', height: '100%', name: '' + this.iframeName })
            );
        }
    }]);
    return VtxRpsFrame;
}(_react2.default.Component);

exports.default = VtxRpsFrame;


var createForm = function createForm(reqURL, param, iframeName) {
    var formDom = $("<form>"); //定义一个form表单  
    formDom.attr("style", "display:none");
    formDom.attr("target", iframeName);
    formDom.attr("method", "post");
    formDom.attr("action", reqURL);
    var inputArray = [];
    for (var k in param) {
        var input1 = $("<input>");
        input1.attr("type", "hidden");
        input1.attr("name", k);
        input1.attr("value", param[k]);
        inputArray.push(input1);
    }
    $("body").append(formDom); //将表单放置在web中  
    for (var i = 0, len = inputArray.length; i < len; i++) {
        formDom.append(inputArray[i]);
    }
    formDom.submit(); //表单提交 
    formDom.remove();
};
module.exports = exports['default'];