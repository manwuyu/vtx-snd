export default {
    // 获取枚举类
    loadEnumValue:{
        url: '/cloud/khgl/web/common/loadEnumValue.smvc',
        cancelAjax: false,
    },
    // 获取考核内容分页
    loadExamineDimensionPage: {
        url: '/cloud/khgl/web/examineDimension/loadPage.smvc',
    },
    // 获取考核内容列表
    loadExamineDimensionList: {
        url: '/cloud/khgl/web/examineDimension/loadList.smvc',
    },
    // 新建、修改考核内容
    addUpdateExamineDimension: {
        url: '/cloud/khgl/web/examineDimension/addUpdate.smvc',
    },
    // 删除考核内容
    removeExamineDimension: {
        url: '/cloud/khgl/web/examineDimension/remove.smvc',
    },
    // 导出考核内容
    exportExamineDimension: {
        url: '/cloud/khgl/web/examineDimension/export.smvc',
        fun: 'downFile',
    },
    // 获取考核分项分页
    loadExamineSubjectPage: {
        url: '/cloud/khgl/web/examineSubject/loadPage.smvc',
    },
    // 获取考核分项列表
    loadExamineSubjectList: {
        url: '/cloud/khgl/web/examineSubject/loadList.smvc',
    },
    // 新建、修改考核分项
    addUpdateExamineSubject: {
        url: '/cloud/khgl/web/examineSubject/addUpdate.smvc',
    },
    // 删除考核分项
    removeExamineSubject: {
        url: '/cloud/khgl/web/examineSubject/remove.smvc',
    },
    // 获取考核细则分页
    loadExamineRulePage: {
        url: '/cloud/khgl/web/examineRule/loadPage.smvc',
    },
    // 获取考核细则列表
    loadExamineRuleList: {
        url: '/cloud/khgl/web/examineRule/loadList.smvc',
    },
    // 新建、修改考核细则
    addUpdateExamineRule: {
        url: '/cloud/khgl/web/examineRule/addUpdate.smvc',
    },
    // 删除考核细则
    removExamineRule: {
        url: '/cloud/khgl/web/examineRule/remove.smvc',
    },
     // 获取考核记录分页
    loadExamineRecordPage: {
        url: '/cloud/khgl/web/examineRecord/loadPage.smvc',
    },
    // 新建、修改考核记录
    addUpdateExamineRecord: {
        url: '/cloud/khgl/web/examineRecord/addUpdate.smvc',
    },
    // 删除考核记录
    removExamineRecord: {
        url: '/cloud/khgl/web/examineRecord/remove.smvc',
    },
    // 获取考核记录详情
    loadExamineRecordInfo: {
        url: '/cloud/khgl/web/examineRecord/loadInfo.smvc',
    },
    // 新建修改考核分数
    addUpdateScore: {
        url: '/cloud/khgl/web/examineRecord/addUpdateScore.smvc',
        method: 'POST',
    },
};
