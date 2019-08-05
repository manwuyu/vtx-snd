'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // 访问日志
  saveVisitLog: {
    url: '/cloud/analysis/api/v101/visitLog/save',
    method: 'POST',
    packDataFun: 'getParamAndName',
    entityType: 'raw'
  }
};
module.exports = exports['default'];