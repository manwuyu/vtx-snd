import managementApi from './api/management';
import clyxApi from './api/clyx';
import zhddApi from './api/zhdd';
import clwxfwApi from './api/clwxfw';
import khglApi from './api/khgl';
import zhjApi from './api/zhj';
import spjgApi from './api/spjg';
import ljczApi from './api/ljcz';
import analysisApi from './api/analysis';
import zyryApi from './api/zyry';
import pdglApi from './api/pdgl';
import gcaddApi from './api/gcadd';
import gcglApi from './api/gcgl';
import ssglApi from './api/ssgl';
import ywyztApi from './api/ywyzt';
import jxbjApi from './api/jxbj';

import request, { requestUrl, cancelAjax, downFile } from './request';

import { tenantId, userId, userName } from './parameter';
// 取消请求
export const cancelAjaxFun = (url) => {
  let index = requestUrl.indexOf(url);
  if (index > -1) {
    cancelAjax[index].abort();
  }
};

export function getParam(param = {}) {
  param.tenantId = tenantId;
  param.userId = userId;
  return param;
}
export function getParamAndName(param = {}) {
  param.tenantId = tenantId;
  param.userId = userId;
  param.userName = userName;
  return param;
}

export function getParameter(param = {}) {
  param.tenantId = tenantId;
  param.userId = userId;
  return { parameters: JSON.stringify(param) };
}

export function getParameters(param = {}) {
  var parameters = {
    authParam: {
      tenantId: tenantId
    },
    param: param,
    reqMethod: {
      isJsonP: 0
    }
  };
  return { parameters: JSON.stringify(parameters) };
}

const _dynamic = {
  ...getApiUrl(analysisApi, 'analysis'),
  ...getApiUrl(clyxApi, 'clyx'),
  ...getApiUrl(clwxfwApi, 'clwxfw'),
  ...getApiUrl(gcaddApi, 'gcadd'),
  ...getApiUrl(gcglApi, 'gcgl'),
  ...getApiUrl(khglApi, 'khgl'),
  ...getApiUrl(ljczApi, 'ljcz'),
  ...getApiUrl(managementApi, 'management'),
  ...getApiUrl(pdglApi, 'pdgl'),
  ...getApiUrl(spjgApi, 'spjg'),
  ...getApiUrl(ssglApi, 'ssgl'),
  ...getApiUrl(ywyztApi, 'ywyzt'),
  ...getApiUrl(zhddApi, 'zhdd'),
  ...getApiUrl(zhjApi, 'zhj'),
  ...getApiUrl(zyryApi, 'zyry'),
  ...getApiUrl(jxbjApi, 'jxbj'),
  
};

function getApiUrl(api, type) {
  let _dynamic = {};
  _dynamic[type] = {};
  for (let i in api) {
    _dynamic[type][i] = async function(data = {}) {
      if (api[i].cancelAjax || api[i].cancelAjax == undefined) cancelAjaxFun(api[i].url);
      let dataObject = {};
      switch (api[i].packDataFun) {
        case 'getParameter':
          dataObject = getParameter(data);
          break;
        case 'getParameters':
          dataObject = getParameters(data);
          break;
        case 'getParamAndName':
          dataObject = getParamAndName(data);
          break;
        default:
          dataObject = getParam(data);
          break;
      }
      switch (api[i].fun) {
        case 'downFile':
          return downFile(api[i].url, {
            body: getParam(data)
          });
          break;
        default:
          return request(api[i].url, {
            body: dataObject,
            method: api[i].method,
            entityType: api[i].entityType
          });
          break;
      }
    };
  }
  return _dynamic;
}
export default _dynamic;