'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ZYRY_URL = exports.ZYRY_URL = '/cloud/zyry/api/v2/';
var ZYRY_URL_101 = exports.ZYRY_URL_101 = '/cloud/zyry/api/v101/';

exports.default = {
    loadSingleParam: {
        url: ZYRY_URL + 'common/loadSingleParam.smvc',
        method: 'GET',
        fun: 'request'
    },
    // 获取枚举类
    loadEnumByName: {
        url: ZYRY_URL + 'common/loadEnumByName.smvc',
        method: 'GET',
        fun: 'request'
    },
    loadDeviceStatusPage: {
        url: ZYRY_URL + 'web/kanbanManage/loadDeviceStatusPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportDeviceStatus: {
        url: ZYRY_URL + 'web/kanbanManage/exportDeviceStatusPage.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffAllHistoryPositions: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffAllHistoryPositions.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffBatteryHistorys: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffBatteryHistorys.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffStepHistorys: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffStepHistorys.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffHeartbeatHistorys: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffHeartbeatHistorys.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffDailyTrend: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffDailyTrend.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffMonthlyTrend: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffMonthlyTrend.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffRank: {
        url: ZYRY_URL + 'web/kanbanManage/loadStaffRank.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    pageListDailyReport: {
        url: ZYRY_URL + 'attendanceReport/pageListDailyReport.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportDailyReport: {
        url: ZYRY_URL + 'attendanceReport/download.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    pageListMonthlyReport: {
        url: ZYRY_URL + 'attendanceStatistics/pageList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportMonthlyReport: {
        url: ZYRY_URL + 'attendanceStatistics/download.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getDailyReportDetail: {
        url: ZYRY_URL + 'attendanceStatistics/getDailyReportByStatus.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadAdjustPage: {
        url: ZYRY_URL + 'attendanceManage/loadAdjustPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadAdjustInfo: {
        url: ZYRY_URL + 'attendanceManage/loadAdjustInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    saveAdjust: {
        url: ZYRY_URL + 'attendanceManage/saveAdjust.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    confirmAbsenteeism: {
        url: ZYRY_URL + 'attendanceManage/confirmAbsenteeism.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    confirmRest: {
        url: ZYRY_URL + 'attendanceManage/confirmRest.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    cancelAdjustAttendance: {
        url: ZYRY_URL + 'attendanceManage/cancelAdjustAttendance.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    cancelRest: {
        url: ZYRY_URL + 'attendanceManage/cancelRest.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    cancelAbsenteeism: {
        url: ZYRY_URL + 'attendanceManage/cancelAbsenteeism.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadOverTimePage: {
        url: ZYRY_URL + 'overTimeManage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    addUpdate: {
        url: ZYRY_URL + 'overTimeManage/addUpdate.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportOverTime: {
        url: ZYRY_URL + 'overTimeManage/export.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    removeOverTimeRecord: {
        url: ZYRY_URL + 'overTimeManage/remove.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadInfo: {
        url: ZYRY_URL + 'overTimeManage/loadInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getShiftsByStaffId: {
        url: ZYRY_URL + 'overTimeManage/getShiftsByStaffId.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadTimeMonthlyReportPage: {
        url: ZYRY_URL + 'reportManage/loadTimeMonthlyReportPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportTimeMonthlyReport: {
        url: ZYRY_URL + 'reportManage/exportTimeMonthlyReport.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //刷脸考勤月明细
    loadFaceClockMonthReportPage: {
        url: ZYRY_URL + 'reportManage/loadFaceClockMonthReportPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportFaceClockMonthReport: {
        url: ZYRY_URL + 'reportManage/exportFaceClockMonthReport.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    updateConfirmStatus: {
        url: ZYRY_URL + 'reportManage/updateConfirmStatus.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadOverTimeMonthReportPage: {
        url: ZYRY_URL + 'overtimeMonthReport/pageList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportOverTimeMonthReport: {
        url: ZYRY_URL + 'overtimeMonthReport/download.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadAttendanceSummaryPage: {
        url: ZYRY_URL + 'attendanceSummary/pageList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportAttendanceSummary: {
        url: ZYRY_URL + 'attendanceSummary/download.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadGroupList: {
        url: ZYRY_URL + 'subjectManage/loadCheckGroupList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadManning: {
        url: ZYRY_URL + 'dashBoradManage/loadManning.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadRealTimePositions: {
        url: ZYRY_URL + 'dashBoradManage/loadRealTimePositions.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadJobElementAreas: {
        url: ZYRY_URL + 'dashBoradManage/loadJobElementAreas.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadWorkInfo: {
        url: ZYRY_URL + 'dashBoradManage/loadWorkInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadDeviceData: {
        url: ZYRY_URL + 'dashBoradManage/loadDeviceData.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadDutyData: {
        url: ZYRY_URL + 'dashBoradManage/loadDutyData.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadSubDetailList: {
        url: ZYRY_URL + 'dashBoradManage/loadSubDetailList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffInfo: {
        url: ZYRY_URL + 'dashBoradManage/loadStaffInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffHistoryPositions: {
        url: ZYRY_URL + 'dashBoradManage/loadStaffHistoryPositions.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getStaffAttendance: {
        url: ZYRY_URL + 'cloud/getStaffAttendance.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadCheckGroupList: {
        url: ZYRY_URL + 'subjectManage/loadCheckGroupList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffSubjectStatus: {
        url: ZYRY_URL + 'subjectManage/loadStaffSubjectStatus.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffViolationStatus: {
        url: ZYRY_URL + 'subjectManage/loadStaffViolationStatus.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffTotalWorkAreaStatus: {
        url: ZYRY_URL + 'subjectManage/loadStaffTotalWorkAreaStatus.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffAvgWorkAreaStatus: {
        url: ZYRY_URL + 'subjectManage/loadStaffAvgWorkAreaStatus.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffRealTimePositions: {
        url: ZYRY_URL + 'subjectManage/loadStaffRealTimePositions.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadSinglePage: {
        url: ZYRY_URL + 'web/kanbanManage/loadSinglePage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportSinglePage: {
        url: ZYRY_URL + 'web/kanbanManage/exportSinglePage.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadCheckDevicePage: {
        url: ZYRY_URL + 'web/kanbanManage/loadCheckDevicePage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportCheckDevicePage: {
        url: ZYRY_URL + 'web/kanbanManage/exportCheckDevicePage.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadSubjectDeptStaffTree: {
        url: ZYRY_URL + 'onLineManage/loadSubjectDeptStaffTree.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadOSRealTimePositions: {
        url: ZYRY_URL + 'onLineManage/loadRealTimePositions.smvc',
        method: 'POST',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //106版本
    loadOSRealTimePositionsZHJ: {
        url: ZYRY_URL + 'onLineManage/loadRealTimePositionsForZHJ.smvc',
        method: 'POST',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffShiftList: {
        url: ZYRY_URL + 'onLineManage/loadStaffShiftList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffStatus: {
        url: ZYRY_URL + 'onLineManage/loadStaffStatus.smvc',
        method: 'POST',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffHistoryPositionsZHJ: {
        url: ZYRY_URL + 'onLineManage/loadStaffHistoryPositions.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //人工补班
    loadPeopleAddShiftPage: {
        url: ZYRY_URL + 'overTimeV2Manage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadPeopleAddShiftInfo: {
        url: ZYRY_URL + 'overTimeV2Manage/loadInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportPeopleAddShift: {
        url: ZYRY_URL + 'overTimeV2Manage/export.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    addUpdatePeopleAddShift: {
        url: ZYRY_URL + 'overTimeV2Manage/addUpdate.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    removePeopleAddShift: {
        url: ZYRY_URL + 'overTimeV2Manage/remove.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //日历考勤
    loadCalAttendancePage: {
        url: ZYRY_URL + 'overTimeV2Manage/loadCalAttendanceIndex.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //作业区段
    loadJobAreaManagePage: {
        url: ZYRY_URL + 'jobAreaManage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    addUpdateJobAreaManage: {
        url: ZYRY_URL + 'jobAreaManage/addUpdate.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    removeJobAreaManage: {
        url: ZYRY_URL + 'jobAreaManage/remove.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadJobAreaManageInfo: {
        url: ZYRY_URL + 'jobAreaManage/loadInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportJobAreaManage: {
        url: ZYRY_URL + 'jobAreaManage/export.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadTypeList: {
        url: ZYRY_URL + 'jobAreaManage/loadTypeList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //作业单元
    loadJobElementManageList: {
        url: ZYRY_URL + 'jobElementManage/loadList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadJobElementManagePage: {
        url: ZYRY_URL + 'jobElementManage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadJobAreaList: {
        url: ZYRY_URL + 'jobElementManage/loadJobAreaList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    addUpdateJobElementManage: {
        url: ZYRY_URL + 'jobElementManage/addUpdate.smvc',
        method: 'POST',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    removeJobElementManage: {
        url: ZYRY_URL + 'jobElementManage/remove.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadJobElementManageInfo: {
        url: ZYRY_URL + 'jobElementManage/loadInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 岗位管理
    loadPostManagePage: {
        url: ZYRY_URL + 'postManage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadPostManageList: {
        url: ZYRY_URL + 'postManage/loadList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportPostManage: {
        url: ZYRY_URL + 'postManage/export.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    savemorePostManage: {
        url: ZYRY_URL + 'postManage/savemore.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    updatePostManage: {
        url: ZYRY_URL + 'postManage/update.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    removePostManage: {
        url: ZYRY_URL + 'postManage/remove.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadKanbanPage: {
        url: ZYRY_URL + 'healthReportManage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadStaffDetail: {
        url: ZYRY_URL + 'healthReportManage/loadStaffDetail.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },

    // 违规月明细
    loadViolationReportPage: {
        url: ZYRY_URL + 'violationStatistics/pageList.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportViolationReport: {
        url: ZYRY_URL + 'violationStatistics/download.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },

    //人员轨迹
    loadStaffTreeHead: {
        url: ZYRY_URL + 'position/loadStaffTreeHead.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    loadStaffTree: {
        url: ZYRY_URL + 'position/loadStaffTree.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    getStaffByName: {
        url: ZYRY_URL + 'position/getStaffByName.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    getHistoryPositionsByTrail: {
        url: ZYRY_URL + 'position/historyPosition.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    exportHistoryPosition: {
        url: ZYRY_URL + 'position/exportHistoryPosition.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    //设备管理
    loadDeviceManage: {
        url: ZYRY_URL_101 + 'deviceManage/loadPage.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    saveDeviceManage: {
        url: ZYRY_URL_101 + 'deviceManage/saveDevice.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    modifyDeviceManage: {
        url: ZYRY_URL_101 + 'deviceManage/modifyDevice.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    removeDeviceManage: {
        url: ZYRY_URL_101 + 'deviceManage/remove.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportDeviceManage: {
        url: ZYRY_URL_101 + 'deviceManage/export.smvc',
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    batchSet: {
        url: ZYRY_URL_101 + 'deviceManage/batchSet.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadModifyLogs: {
        url: ZYRY_URL_101 + 'deviceManage/loadModifyLogs.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    //人员轨迹
    getWorkElesByShiftInfo: {
        url: ZYRY_URL_101 + 'history/getWorkElesByShiftInfo.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    }

};