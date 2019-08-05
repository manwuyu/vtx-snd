'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // 站点垃圾量统计
    facTransedGarNum: {
        url: '/cloud/zhj/garbageSupervise/facTransedGarNum.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    },
    // 垃圾量类型日统计
    garTypeDailyReport: {
        url: '/cloud/zhj/garbageSupervise/garTypeDailyReport.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    },
    // 垃圾量类型月统计
    garTypeMonthlyReport: {
        url: '/cloud/zhj/garbageSupervise/garTypeMonthlyReport.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    },
    // 获取分组列表
    loadCheckGroupList: {
        url: '/cloud/zhj/subjectManage/loadCheckGroupList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    },
    // 获取主体列表
    loadSubjectList: {
        url: '/cloud/zhj/subjectManage/loadSubjectList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    }
};
module.exports = exports['default'];