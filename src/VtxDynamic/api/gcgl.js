export const GCGL_URL = '/cloud/gcgl/';
export default {
    loadEnumValue: {
        url: `${GCGL_URL}common/loadEnumValue.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getEqpList: {
        url: `${GCGL_URL}common/getEqpList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    /*********************************设施树*********************************/
    loadToiletEquipmentTree: {
        url: `${GCGL_URL}common/loadToiletEquipmentTree.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    /*********************************公厕台账*********************************/
    loadEquipmentManage: {
        url: `${GCGL_URL}equipmentManage/pageList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    exportEquipmentManage: {
        url: `${GCGL_URL}equipmentManage/export.smvc`,
        method: 'GET',
        fun: 'downFile',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    updateEquipmentManage: {
        url: `${GCGL_URL}equipmentManage/update.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    deleteEquipmentManage: {
        url: `${GCGL_URL}equipmentManage/delete.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    /*********************************公厕设备*********************************/
    loadDeviceManage: {
        url: `${GCGL_URL}deviceManage/pageList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    updateDeviceManage: {
        url: `${GCGL_URL}deviceManage/update.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    deleteDeviceManage: {
        url: `${GCGL_URL}deviceManage/delete.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    deviceSubPageList: {
        url: `${GCGL_URL}deviceManage/deviceSubPageList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    updateDeviceSub: {
        url: `${GCGL_URL}deviceManage/updateDeviceSub.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    deleteDeviceSub: {
        url: `${GCGL_URL}deviceManage/deleteDeviceSub.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    /*********************************公厕设备监测*********************************/
    loadSensorManage: {
        url: `${GCGL_URL}sensorManage/pageList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    historySensorManage: {
        url: `${GCGL_URL}sensorManage/getHistoryData.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    /*********************************公厕gis*********************************/
    loadGisListAndStatistics: {
        url: `${GCGL_URL}gis/getListAndStatistics.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadGisList: {
        url: `${GCGL_URL}gis/getList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getLineChart: {
        url: `${GCGL_URL}gis/getLineChart.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getIndexData: {
        url: `${GCGL_URL}gis/getIndexData.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getRealTimeData: {
        url: `${GCGL_URL}gis/getRealTimeData.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    getBindVideoList: {
        url: `${GCGL_URL}gis/getBindVideoList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    startVideoInfo: {
        url: `${GCGL_URL}gis/startVideoInfo.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    /*********************************公厕总表*********************************/
    loadSummaryTablePage: {
        url: `${GCGL_URL}equipmentManage/statsInfoPageList.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: false,
        packDataFun: 'getParam'
    },
    exportSummaryTable: {
        url: `${GCGL_URL}equipmentManage/statsInfoExport.smvc`,
        method: 'GET',
        fun: 'downFile',
        cancelAjax: false,
        packDataFun: 'getParam'
    }
};
