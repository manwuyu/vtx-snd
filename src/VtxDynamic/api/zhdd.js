export default{
    loadCarNum: {
        url: '/cloud/zhdd/web/resourceMode/loadCarNum.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
    loadAllAreas: {
        url: '/cloud/zhdd/web/subjectManage/loadAllAreas.smvc',
        method: 'GET',
        fun: 'request',
        cancelAjax: true,
        packDataFun: 'getParam'
    },
}
