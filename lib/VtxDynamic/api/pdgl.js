'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PDGL_URL = exports.PDGL_URL = '/cloud/pdgl/api/v1/';
exports.default = {
  loadshiftTimeList: {
    url: PDGL_URL + 'shiftTime',
    method: 'GET',
    fun: 'requestNew',
    cancelAjax: true,
    packDataFun: 'getParam'
  }
};