import { tenantId, userId, token_type, access_token } from './parameter';
/*
    普通请求
    参数： 1. url,
          2. options:{
              method:'post',
              body:{aa:1}
            }
*/

export let cancelAjax = [];
export let requestUrl = [];

export default function request(url, options = {}) {
  let postData = {};

  if (options.body) {
    if (options.body instanceof window.FormData) {
      postData = options.body;
    } else {
      for (let k in options.body) {
        if (typeof options.body[k] == 'object' && options.body[k] !== null) {
          postData[k] = JSON.stringify(options.body[k]);
        } else {
          postData[k] = options.body[k];
        }
      }
    }
  }
  let ajaxPropmise = new Promise((resolve, reject) => {
    let urlResult = `${url}`;
    let ajaxResult = $.ajax({
      type: options.method || 'get',
      url: urlResult,
      timeout: 30000,
      data: options.entityType == 'raw' ? JSON.stringify(postData) : postData,
      dataType: options.dataType || 'json',
      jsonp: options.dataType == 'jsonp' ? 'gpsback' : undefined,
      cache: false,
      processData: options.body instanceof window.FormData ? false : undefined,
      contentType:
        options.body instanceof window.FormData
          ? false
          : options.entityType == 'raw'
          ? 'application/json;charset=UTF-8'
          : undefined,
      headers: {
            Authorization: token_type + ' ' + access_token
      },
      success: function(data) {
        data.ajax = ajaxPropmise;
        resolve(data);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        // reject(textStatus);
        let data = {};
        data.textStatus = textStatus;
        data.ajax = ajaxPropmise;
        data.result = '404';
        data.msg = '服务器异常';
        resolve(data);
      }
    });
    let index = requestUrl.indexOf(url);
    if (index < 0) {
      requestUrl.push(url);
      cancelAjax.push(ajaxResult);
    } else {
      cancelAjax[index] = ajaxResult;
    }
  });
  return ajaxPropmise
    .then((data) => ({ data }))
    .catch((err) => {
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

export function parseParam(param, key) {
  var paramStr = '';
  if (typeof param !== 'boolean' && (param == null || param == '' || param == undefined)) {
    return '';
  }
  if (typeof param == 'string' || typeof param == 'number' || typeof param == 'boolean') {
    paramStr += '&' + key + '=' + param;
  } else {
    $.each(param, function(i) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += '&' + parseParam(this, k);
    });
  }
  return paramStr.substr(1);
}
// 下载文件
export function downFile(url, options = {}) {
  let payload = options.body;
  let urlParams = [];
  for (let i in payload) {
    let result = parseParam(payload[i], i);
    if (result !== '') {
      urlParams.push(result);
    }
  }
  const href_url = `${url}?${urlParams.join('&')}`;
  window.open(href_url);
}
