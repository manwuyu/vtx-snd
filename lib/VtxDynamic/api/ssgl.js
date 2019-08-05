'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SSGL_URL = exports.SSGL_URL = '/cloud/ssgl/';
exports.default = {
  loadEnumValue: {
    url: SSGL_URL + 'common/loadEnumValue.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  loadEquipmentTree: {
    url: SSGL_URL + 'common/loadEquipmentTree.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************设施台账********************************/
  loadPlatformAccountPage: {
    url: SSGL_URL + 'facilityManage/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  exportPlatformAccount: {
    url: SSGL_URL + 'facilityManage/export.smvc',
    method: 'GET',
    fun: 'downFile',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updatePlatformAccount: {
    url: SSGL_URL + 'facilityManage/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deletePlatformAccount: {
    url: SSGL_URL + 'facilityManage/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************设备用水记录********************************/
  loadUseWaterRecordPage: {
    url: SSGL_URL + 'waterByPerson/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  exportUseWaterRecord: {
    url: SSGL_URL + 'waterByPerson/export.smvc',
    method: 'GET',
    fun: 'downFile',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateUseWaterRecord: {
    url: SSGL_URL + 'waterByPerson/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteUseWaterRecord: {
    url: SSGL_URL + 'waterByPerson/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },

  // 根据缴费号获取设施信息
  getListByNumberUseWaterRecord: {
    url: SSGL_URL + 'waterByPerson/getListByNumber.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },

  /********************************设备用电记录********************************/
  loadUseElectricityRecordPage: {
    url: SSGL_URL + 'electricityByPerson/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  exportUseElectricityRecord: {
    url: SSGL_URL + 'electricityByPerson/export.smvc',
    method: 'GET',
    fun: 'downFile',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateUseElectricityRecord: {
    url: SSGL_URL + 'electricityByPerson/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteUseElectricityRecord: {
    url: SSGL_URL + 'electricityByPerson/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  // 根据缴费号获取设施信息
  getListByNumberUseElectricityRecord: {
    url: SSGL_URL + 'electricityByPerson/getListByNumber.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************维保类型********************************/
  loadMaintenanceTypePage: {
    url: SSGL_URL + 'maintainFeeType/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  loadMaintenanceTypeList: {
    url: SSGL_URL + 'maintainFeeType/getAllList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateMaintenanceType: {
    url: SSGL_URL + 'maintainFeeType/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteMaintenanceType: {
    url: SSGL_URL + 'maintainFeeType/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************维保项目类型********************************/
  loadMaintenanceProjectTypePage: {
    url: SSGL_URL + 'typeOfAccessories/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  loadMaintenanceProjectTypeList: {
    url: SSGL_URL + 'typeOfAccessories/getAllList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateMaintenanceProjectType: {
    url: SSGL_URL + 'typeOfAccessories/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteMaintenanceProjectType: {
    url: SSGL_URL + 'typeOfAccessories/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************维保项目********************************/
  loadMaintenanceProjectPage: {
    url: SSGL_URL + 'nameOfAccessories/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  loadMaintenanceProjectList: {
    url: SSGL_URL + 'nameOfAccessories/getAllList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateMaintenanceProject: {
    url: SSGL_URL + 'nameOfAccessories/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteMaintenanceProject: {
    url: SSGL_URL + 'nameOfAccessories/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************维保记录********************************/
  loadMaintenanceRecordPage: {
    url: SSGL_URL + 'maintenanceRecord/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  exportMaintenanceRecord: {
    url: SSGL_URL + 'maintenanceRecord/export.smvc',
    method: 'GET',
    fun: 'downFile',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateMaintenanceRecord: {
    url: SSGL_URL + 'maintenanceRecord/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  detailMaintenanceRecord: {
    url: SSGL_URL + 'maintenanceRecord/detailList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteMaintenanceRecord: {
    url: SSGL_URL + 'maintenanceRecord/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************车辆站点管理********************************/
  loadVehicleSitePage: {
    url: SSGL_URL + 'site/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  exportVehicleSite: {
    url: SSGL_URL + 'site/export.smvc',
    method: 'GET',
    fun: 'downFile',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateVehicleSite: {
    url: SSGL_URL + 'site/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteVehicleSite: {
    url: SSGL_URL + 'site/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************地磅绑定********************************/
  getPoundBindingList: {
    url: SSGL_URL + 'stationPoundBinding/getList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updatePoundBindingList: {
    url: SSGL_URL + 'stationPoundBinding/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************地磅绑定********************************/
  getStationInfoList: {
    url: SSGL_URL + 'stationInfo/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  updateStationInfoList: {
    url: SSGL_URL + 'stationInfo/update.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  exportStationInfoList: {
    url: SSGL_URL + 'stationInfo/export.smvc',
    method: 'GET',
    fun: 'downFile',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  deleteStationInfoList: {
    url: SSGL_URL + 'stationInfo/delete.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },

  // 单设施单日进站
  getSingleDayStationInfo: {
    url: SSGL_URL + 'stationInfo/getSingleStationInfo.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },

  // 单设施进站统计分析
  getSingleStationStatsInfo: {
    url: SSGL_URL + 'stationInfo/getSingleStationStatsInfo.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  /********************************设施GIS********************************/
  // 获取设施及统计数据
  getListAndStatistics: {
    url: SSGL_URL + 'gis/getListAndStatistics.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  // 获取单个设施绑定的视频信息
  getBindVideoList: {
    url: SSGL_URL + 'gis/getBindVideoList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  // 获取视频流
  startVideoInfo: {
    url: SSGL_URL + 'gis/startVideoInfo.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: false,
    packDataFun: 'getParam'
  }
};