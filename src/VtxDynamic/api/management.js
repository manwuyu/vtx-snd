export default {
  loadOrgTreeByPermission: {
    url: `/cloud/management/rest/np/tenant/dept/loadOrgTreeByPermission.read`,
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParameter'
  },
  getFunctionsByUsreIdAndSystem: {
    url: `/cloud/management/rest/np/function/getFunctionsByUsreIdAndSystem.read`,
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParameter'
  },
  loadStaffTreeWithPermission: {
    url: `/cloud/management/rest/np/function/staff/loadStaffTreeWithPermission.read`,
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParameter'
  },
  loadWorkElementTree: {
    url: `/cloud/management/rest/np/workElement/loadWorkElementTree.smvc`,
    method: 'GET',
    fun: 'requestNew',
    cancelAjax: false,
    packDataFun: 'getParameter'
  },
  getStaffInfoByUserId: {
    url: `/cloud/management/rest/np/staff/getStaffInfoByUserIds.read`,
    method: 'GET',
    fun: 'requestNew',
    cancelAjax: false,
    packDataFun: 'getParameter'
  },
  getParamStaffPosition: {
      url: `/cloud/management/rest/np/param/getByParamTypeCode.smvc`,
      method: 'GET',
      fun: 'request',
      packDataFun: 'getParameter'
  },
  cloudOperationHistory: {
    url: '/cloud/management/rest/np/cloudOperationHistory/pageList.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  loadEnumByName: {
    url: '/cloud/management/rest/np/common/loadEnumByName.smvc',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  loadDivisionTree: {
      url: `/cloud/management/rest/np/tenant/division/loadDivisionTree.read`,
      method: 'GET',
      fun: 'request',
      cancelAjax: true,
      packDataFun: 'getParameter'
  },
  getMenuJson: {
    url: '/cloud/management/util/getMenuJson.sa',
    method: 'GET',
    fun: 'request',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
  getUser: {
    url: '/casServer/user',
    method: 'POST'
  },
  logout: {
    url: '/cas/logout',
    method: 'POST'
  },
  changePassword: {
    url: '/cloud/management/util/changePassword.sa',
    method: 'POST'
  }
};
