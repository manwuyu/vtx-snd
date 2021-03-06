export const GCADD_URL = '/cloud/gcadd/';
export default {
    /*********************************旧公厕*********************************/
    getAllCleanRecord: {
        url: `${GCADD_URL}cleanDailyReport/getAllCleanRecord.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParameter'
    },
    getTimeCleanRecord: {
        url: `${GCADD_URL}cleanDailyReport/getTimeCleanRecord.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParameter'
    },
    getPositionCount: {
        url: `${GCADD_URL}cleanDailyReport/getPositionCount.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParameter'
    },
    getByParamTypeCodeNew: {
        url: `${GCADD_URL}cleanDailyReport/getByParamTypeCodeNew.smvc`,
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParameter'
    }
}
