export default {
    // 获取车牌号绑定分页信息
    garbageCarBindingList: {
        url: '/cloud/ljcz/garbageCarBinding/pageList.smvc'
    },
    // 新增/修改 车牌号绑定
    garbageCarBindingUpdate: {
        url: '/cloud/ljcz/garbageCarBinding/update.smvc'
    },
    // 删除 车牌号绑定
    garbageCarBindingDelete: {
        url: '/cloud/ljcz/garbageCarBinding/delete.smvc'
    },
    // 类型&区域数据统计
    statsByGarbageType: {
        url: '/cloud/ljcz/kanban/garbage/statsByGarbageType.smvc'
    },
    // 终端统计
    statsByEquipment: {
        url: '/cloud/ljcz/kanban/garbage/statsByEquipment.smvc'
    },
    // 获取枚举类
    loadEnumValue: {
        url: '/cloud/ljcz/common/loadEnumValue.smvc',
        cancelAjax: false
    },
    // 折线图-根据月份统计
    statsChartsByYear: {
        url: '/cloud/ljcz/kanban/garbage/statsChartsByYear.smvc'
    },
    // 折线图-根据每日统计
    statsChartsByDay: {
        url: '/cloud/ljcz/kanban/garbage/statsChartsByDay.smvc'
    },
    // 折线图-根据主体统计
    statsChartsBySubject: {
        url: '/cloud/ljcz/kanban/garbage/statsChartsBySubject.smvc'
    },
    // 获取终端信息
    getEquipmentsBySubject: {
        url: '/cloud/ljcz/kanban/garbage/getEquipmentsBySubject.smvc'
    },
    getMapInfo: {
        url: '/cloud/ljcz/kanban/garbage/getMapInfo.smvc'
    },

    // -------------------------------------------------
    //  设施进站记录
    // 获取列表
    getStationInfoList: {
        url: `/cloud/ljcz/stationInfo/pageList.smvc`
    },
    // 更新修改
    updateStationInfoList: {
        url: `/cloud/ljcz/stationInfo/update.smvc`
    },
    // 导出列表
    exportStationInfoList: {
        url: `/cloud/ljcz/stationInfo/export.smvc`,
        fun: 'downFile'
    },
    // 删除
    deleteStationInfoList: {
        url: `/cloud/ljcz/stationInfo/delete.smvc`
    },
    // 获取设施类型
    loadPlatformAccountPage: {
        url: `/cloud/ljcz/facilityManage/pageList.smvc`
    }
};
