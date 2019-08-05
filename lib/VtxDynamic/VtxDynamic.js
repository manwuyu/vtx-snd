'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelAjaxFun = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.getParam = getParam;
exports.getParamAndName = getParamAndName;
exports.getParameter = getParameter;
exports.getParameters = getParameters;

var _management = require('./api/management');

var _management2 = _interopRequireDefault(_management);

var _clyx = require('./api/clyx');

var _clyx2 = _interopRequireDefault(_clyx);

var _zhdd = require('./api/zhdd');

var _zhdd2 = _interopRequireDefault(_zhdd);

var _clwxfw = require('./api/clwxfw');

var _clwxfw2 = _interopRequireDefault(_clwxfw);

var _khgl = require('./api/khgl');

var _khgl2 = _interopRequireDefault(_khgl);

var _zhj = require('./api/zhj');

var _zhj2 = _interopRequireDefault(_zhj);

var _spjg = require('./api/spjg');

var _spjg2 = _interopRequireDefault(_spjg);

var _ljcz = require('./api/ljcz');

var _ljcz2 = _interopRequireDefault(_ljcz);

var _analysis = require('./api/analysis');

var _analysis2 = _interopRequireDefault(_analysis);

var _zyry = require('./api/zyry');

var _zyry2 = _interopRequireDefault(_zyry);

var _pdgl = require('./api/pdgl');

var _pdgl2 = _interopRequireDefault(_pdgl);

var _gcadd = require('./api/gcadd');

var _gcadd2 = _interopRequireDefault(_gcadd);

var _gcgl = require('./api/gcgl');

var _gcgl2 = _interopRequireDefault(_gcgl);

var _ssgl = require('./api/ssgl');

var _ssgl2 = _interopRequireDefault(_ssgl);

var _ywyzt = require('./api/ywyzt');

var _ywyzt2 = _interopRequireDefault(_ywyzt);

var _jxbj = require('./api/jxbj');

var _jxbj2 = _interopRequireDefault(_jxbj);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _parameter = require('./parameter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 取消请求
var cancelAjaxFun = exports.cancelAjaxFun = function cancelAjaxFun(url) {
  var index = _request.requestUrl.indexOf(url);
  if (index > -1) {
    _request.cancelAjax[index].abort();
  }
};

function getParam() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  param.tenantId = _parameter.tenantId;
  param.userId = _parameter.userId;
  return param;
}
function getParamAndName() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  param.tenantId = _parameter.tenantId;
  param.userId = _parameter.userId;
  param.userName = _parameter.userName;
  return param;
}

function getParameter() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  param.tenantId = _parameter.tenantId;
  param.userId = _parameter.userId;
  return { parameters: (0, _stringify2.default)(param) };
}

function getParameters() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var parameters = {
    authParam: {
      tenantId: _parameter.tenantId
    },
    param: param,
    reqMethod: {
      isJsonP: 0
    }
  };
  return { parameters: (0, _stringify2.default)(parameters) };
}

var _dynamic = (0, _extends3.default)({}, getApiUrl(_analysis2.default, 'analysis'), getApiUrl(_clyx2.default, 'clyx'), getApiUrl(_clwxfw2.default, 'clwxfw'), getApiUrl(_gcadd2.default, 'gcadd'), getApiUrl(_gcgl2.default, 'gcgl'), getApiUrl(_khgl2.default, 'khgl'), getApiUrl(_ljcz2.default, 'ljcz'), getApiUrl(_management2.default, 'management'), getApiUrl(_pdgl2.default, 'pdgl'), getApiUrl(_spjg2.default, 'spjg'), getApiUrl(_ssgl2.default, 'ssgl'), getApiUrl(_ywyzt2.default, 'ywyzt'), getApiUrl(_zhdd2.default, 'zhdd'), getApiUrl(_zhj2.default, 'zhj'), getApiUrl(_zyry2.default, 'zyry'), getApiUrl(_jxbj2.default, 'jxbj'));

function getApiUrl(api, type) {
  var _dynamic = {};
  _dynamic[type] = {};

  var _loop = function _loop(i) {
    _dynamic[type][i] = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var dataObject;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (api[i].cancelAjax || api[i].cancelAjax == undefined) cancelAjaxFun(api[i].url);
                dataObject = {};
                _context.t0 = api[i].packDataFun;
                _context.next = _context.t0 === 'getParameter' ? 5 : _context.t0 === 'getParameters' ? 7 : _context.t0 === 'getParamAndName' ? 9 : 11;
                break;

              case 5:
                dataObject = getParameter(data);
                return _context.abrupt('break', 13);

              case 7:
                dataObject = getParameters(data);
                return _context.abrupt('break', 13);

              case 9:
                dataObject = getParamAndName(data);
                return _context.abrupt('break', 13);

              case 11:
                dataObject = getParam(data);
                return _context.abrupt('break', 13);

              case 13:
                _context.t1 = api[i].fun;
                _context.next = _context.t1 === 'downFile' ? 16 : 18;
                break;

              case 16:
                return _context.abrupt('return', (0, _request.downFile)(api[i].url, {
                  body: getParam(data)
                }));

              case 18:
                return _context.abrupt('return', (0, _request2.default)(api[i].url, {
                  body: dataObject,
                  method: api[i].method,
                  entityType: api[i].entityType
                }));

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }();
  };

  for (var i in api) {
    _loop(i);
  }
  return _dynamic;
}
exports.default = _dynamic;