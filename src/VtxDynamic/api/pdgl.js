export const PDGL_URL = '/cloud/pdgl/api/v1/';
export default {
  loadshiftTimeList: {
    url: `${PDGL_URL}shiftTime`,
    method: 'GET',
    fun: 'requestNew',
    cancelAjax: true,
    packDataFun: 'getParam'
  },
}
