'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // 获取单车成本区间分析列表
    getCarCostPageList: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/pageList'
    },

    // 单车油耗分析
    getCarCostOil: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/oil'
    },

    // 饼图-维修保养分类
    getCarCostRepair: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/repair'
    },
    // 饼图-维保项目分类
    getCarCostTypeOfAccessories: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/typeOfAccessories'
    },
    // 车辆成本月度分析
    loadCarMonthCblx: {
        url: '/cloud/clwxfw/np/v3/bk/car/month/cblx'
    },
    // 车辆成本月度分析
    loadCarMonthWblx: {
        url: '/cloud/clwxfw/np/v3/bk/car/month/wblx'
    },
    // 车辆成本约趋势分析
    loadCarCostMonth: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/month',
        method: 'POST'
    },
    // 饼图-维保项目类型分类
    getTypeOfAccessories: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/typeOfAccessories'
    },
    // 车辆名称
    loadCarGrade: {
        url: '/cloud/clwxfw/api/np/v2/field/loadGrade.smvc',
        packDataFun: 'getParameters'
    },
    // 车辆类别
    loadCarClass: {
        url: '/cloud/clwxfw/api/np/v2/field/loadClass.smvc',
        packDataFun: 'getParameters'
    },
    // 车辆部门树
    loadDeptCarTree: {
        url: '/cloud/clwxfw/api/np/v1/tree/loadDeptCarTree.smvc',
        packDataFun: 'getParameter'
    },
    // 导出列表
    exportAllList: {
        url: '/cloud/clwxfw/np/v3/bk/car/cost/export',
        fun: 'downFile'
    },
    // 结算记录分页查询
    loadsettlementPage: {
        url: '/cloud/clwxfw/api/np/v3/settlementManage/loadPage.smvc'
    },
    // 撤销结算记录
    revokeSettlement: {
        url: '/cloud/clwxfw/api/np/v3/settlementManage/revokeSettlement.smvc'
    },
    // 查看结算记录详情列表
    loadSettlementContentList: {
        url: '/cloud/clwxfw/api/np/v3/settlementManage/loadSettlement.smvc'
    },
    // 导出结算列表
    settlementExport: {
        url: '/cloud/clwxfw/api/np/v3/settlementManage/export.smvc',
        fun: 'downFile'
    },
    // 结算
    settlement: {
        url: '/cloud/clwxfw/api/np/v3/settlementManage/settlement.smvc'
    },
    loadDepartmentList: {
        url: '/cloud/clwxfw/api/np/v3/common/loadDepartmentList.smvc'
    }
};
module.exports = exports['default'];