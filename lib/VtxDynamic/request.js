'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUrl = exports.cancelAjax = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = request;
exports.parseParam = parseParam;
exports.downFile = downFile;

var _parameter = require('./parameter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    普通请求
    参数： 1. url,
          2. options:{
              method:'post',
              body:{aa:1}
            }
*/

var cancelAjax = exports.cancelAjax = [];
var requestUrl = exports.requestUrl = [];

function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var postData = {};

  if (options.body) {
    if (options.body instanceof window.FormData) {
      postData = options.body;
    } else {
      for (var k in options.body) {
        if ((0, _typeof3.default)(options.body[k]) == 'object' && options.body[k] !== null) {
          postData[k] = (0, _stringify2.default)(options.body[k]);
        } else {
          postData[k] = options.body[k];
        }
      }
    }
  }
  var ajaxPropmise = new _promise2.default(function (resolve, reject) {
    var urlResult = '' + url;
    var ajaxResult = $.ajax({
      type: options.method || 'get',
      url: urlResult,
      timeout: 30000,
      data: options.entityType == 'raw' ? (0, _stringify2.default)(postData) : postData,
      dataType: options.dataType || 'json',
      jsonp: options.dataType == 'jsonp' ? 'gpsback' : undefined,
      cache: false,
      processData: options.body instanceof window.FormData ? false : undefined,
      contentType: options.body instanceof window.FormData ? false : options.entityType == 'raw' ? 'application/json;charset=UTF-8' : undefined,
      headers: {
        Authorization: _parameter.token_type + ' ' + _parameter.access_token
      },
      success: function success(data) {
        data.ajax = ajaxPropmise;
        resolve(data);
      },
      error: function error(XMLHttpRequest, textStatus, errorThrown) {
        // reject(textStatus);
        var data = {};
        data.textStatus = textStatus;
        data.ajax = ajaxPropmise;
        data.result = '404';
        data.msg = '服务器异常';
        resolve(data);
      }
    });
    var index = requestUrl.indexOf(url);
    if (index < 0) {
      requestUrl.push(url);
      cancelAjax.push(ajaxResult);
    } else {
      cancelAjax[index] = ajaxResult;
    }
  });
  return ajaxPropmise.then(function (data) {
    return { data: data };
  }).catch(function (err) {
    return {
      data: {
        data: {
          result: '404',
          msg: '服务器异常'
        }
      }
    };
  });
}

function parseParam(param, key) {
  var paramStr = '';
  if (typeof param !== 'boolean' && (param == null || param == '' || param == undefined)) {
    return '';
  }
  if (typeof param == 'string' || typeof param == 'number' || typeof param == 'boolean') {
    paramStr += '&' + key + '=' + param;
  } else {
    $.each(param, function (i) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += '&' + parseParam(this, k);
    });
  }
  return paramStr.substr(1);
}
// 下载文件
function downFile(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var payload = options.body;
  var urlParams = [];
  for (var i in payload) {
    var result = parseParam(payload[i], i);
    if (result !== '') {
      urlParams.push(result);
    }
  }
  var href_url = url + '?' + urlParams.join('&');
  window.open(href_url);
}