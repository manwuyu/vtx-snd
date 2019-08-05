export default {
    loadCarDailyTrend: {
        url: '/cloud/clyx/carDailyTrend/loadCarDailyTrend.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    },
    loadCarMonthlyTrend:{
        url: '/cloud/clyx/carDailyTrend/loadCarMonthlyTrend.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true
    },
    loadCarDailyOrderTrend: {
        url: '/cloud/clyx/carDailyTrend/loadCarDailyOrderTrend.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 车辆树
    loadClyxDeptCarTree: {
        url: `/cloud/clyx/common/loadDeptCarTree.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 车辆树头
    loadCarTreeHead: {
        url: `/cloud/clyx/common/loadCarTreeHead.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 车辆模糊搜索
    loadCarByCarCode: {
        url: `/cloud/clyx/common/loadCarByCarCode.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 获取分组列表
    loadCheckGroupList: {
        url: `/cloud/clyx/common/loadCheckGroupList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 获取主体列表
    loadSubjectList: {
        url: `/cloud/clyx/common/loadSubjectList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // ====================== carOnLineSupervise
    // 获取车辆实时信息
    loadRealtimeSummaryInfo: {
        url: `/cloud/clyx/carOnLineSupervise/loadRealtimeCarInfo.smvc`,
        method: 'POST',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 获取车辆绑定的视频
    getBindVideoList: {
        url: `/cloud/clyx/carOnLineSupervise/getBindVideoList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 开始获取视频流
    startVideo: {
        url: `/cloud/clyx/carOnLineSupervise/startVideo.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    // ====================== gpsPosition
    // 获取车辆历史轨迹
    queryHisPositionList: {
        url: `/cloud/clyx/gpsPosition/queryHisPositionList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 获取车辆历史轨迹的实时数据
    getRealTimeList:{
        url: `/cloud/clyx/gpsPosition/getHisPositionList.smvc`,
        method: 'POST',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    // 查询选中车辆信息
    getGpsInfoById: {
        url: `/cloud/clyx/gpsPosition/getGpsInfoById.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    newHistoryPosition: {
        url: `/cloud/clyx/gpsPosition/newHistoryPosition.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    historyPosition: {
        url: `/cloud/clyx/gpsPosition/historyPosition.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
};
