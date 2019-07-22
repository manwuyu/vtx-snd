import React from 'react';

import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Table from 'antd/lib/table';
import 'antd/lib/table/style/css';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import Popconfirm from 'antd/lib/popconfirm';
import 'antd/lib/popconfirm/style/css';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';
import Popover from 'antd/lib/popover';
import 'antd/lib/popover/style/css';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';
const confirm = Modal.confirm;

import './VortexDatagrid.css';

import _isEqual from 'lodash/isEqual';

const styles = {
    autoHeightcontainer: 'vtx-ui-grid-data-table-autoheightcontainer',
    ct: 'vtx-ui-grid-data-table-ct',
    nowrapOverflow: 'vtx-ui-grid-data-table-nowrapoverflow',
    titleSelectionContainer: 'vtx-ui-grid-data-table-titleselectioncontainer',
    columnBt: 'vtx-ui-grid-data-table-columnbt',
    indexColumn: 'vtx-ui-grid-data-table-indexcolumn',
    data_tb:'vtx-ui-grid-data-table-datagrid'
};
class VortexDatagrid extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'vtxdg' + new Date().getTime();
        // 表头和分页组件的高度，用来计算表格body的高度
        // this.headFootHeight = props.headFootHeight || (66 + props.num - 62);

        this.headFootHeight = props.headFootHeight || 130;
        this.state = {
            autoFit: props.autoFit,
            bodyHeight: null,
            // columnConfig: this.columnHandler(),
            columnsVisibility: props.columns.map((item) => ({
                title: item.title,
                key: item.key,
                visible: Array.isArray(props.defaultVisibleCols)
                    ? props.defaultVisibleCols.indexOf(item.key) > -1
                    : true
            }))
        };
        this.resetHeight = this.resetHeight.bind(this);
    }
    resetHeight() {
        let bodyHeight = this.props.style.height - this.headFootHeight;
        this.setState({
            bodyHeight
        });
        let divs = document.getElementById(this.id).getElementsByTagName('div');
        let bodyDiv = Array.prototype.filter.call(divs, (dom) => dom.className == 'ant-table-body')[0];
    }
    componentDidMount() {
        let t = this;
        // 自适应高度
        if (t.state.autoFit) {
            setTimeout(function() {
                t.resetHeight();
            }, 1);
            window.addEventListener('resize', t.resetHeight, false);
        }
    }
    componentWillUnmount() {
        let t = this;
        if (t.state.autoFit) {
            window.removeEventListener('resize', t.resetHeight, false);
        }
    }
    componentWillReceiveProps({ changeColumn }) {
        this.changeColumnVisibility(changeColumn.key, changeColumn.visible);
    }
    componentDidUpdate(prevProps, prevState) {
        //重新渲染结束
        let t = this;
        if (t.state.bodyHeight != this.props.style.height - this.headFootHeight) {
            if (t.state.autoFit) {
                setTimeout(function() {
                    t.resetHeight();
                }, 10);
            }
        }
    }
    // 表格column配置项修改
    columnHandler(props) {
        let t = this;
        props = props || this.props;

        let deletedColKeys = t.state.columnsVisibility.filter((item) => !item.visible).map((item) => item.key);

        let columnConfig = props.columns
            .filter((item) => {
                return deletedColKeys.indexOf(item.key) == -1;
            })
            .map((col, index) => {
                let newCol = { ...col };
                // let title = newCol.title;
                // newCol.preTitle = title;
                // newCol.title = <span onContextMenu={()=>{alert(title)}}>{title}</span>
                // 配置按钮操作列
                if (col.renderButtons) {
                    delete newCol.renderButtons;
                    newCol.render = function(text, record, index) {
                        return t.generateButtons(col.renderButtons, record, text, index);
                    };
                }
                // 不允许换行列的处理
                if (col.nowrap) {
                    delete newCol.nowrap;
                    newCol.className = styles.nowrapOverflow;
                    if (typeof newCol.render == 'function') {
                        let oldRender = newCol.render;
                        newCol.render = function(text, record) {
                            if (text === null || text === undefined) text = '';
                            return (
                                <Tooltip title={oldRender(text, record)} placement="topLeft">
                                    {oldRender(text, record)}
                                </Tooltip>
                            );
                        };
                    } else {
                        newCol.render = function(text, record) {
                            if (text === null || text === undefined) text = '';
                            return (
                                <Tooltip title={<span>{text}</span>} placement="topLeft">
                                    {text}
                                </Tooltip>
                            );
                        };
                    }
                }
                return newCol;
            });

        // 序列号处理
        if (props.indexColumn) {
            columnConfig.unshift({
                title: props.indexTitle || ' ',
                dataIndex: 'rIndex',
                key: 'rIndex',
                width: 50,
                className: styles.indexColumn
            });
        }

        return columnConfig;
    }
    // 隐藏/显示列
    changeColumnVisibility(key, visible) {
        const columnsVisibility = this.state.columnsVisibility.map((item) => {
            if (item.key == key) {
                return {
                    ...item,
                    visible
                };
            }
            return item;
        });
        this.setState({
            columnsVisibility
        });
        if (typeof this.props.colsVisibilityChange == 'function') {
            this.props.colsVisibilityChange(columnsVisibility);
        }
    }
    // 快捷生成表格按钮列
    generateButtons(btList, rowData, text, index) {
        function onClick ({key}){
            // console.log(key)
        }
        let btnList = typeof btList === 'function' ? btList(text, rowData, index) : btList;
        if(btnList.length<=2){
            return (
                <span>
                    {btnList.length<=2&&btnList.map((bt, bt_index) => {
                        switch (bt.name) {
                            /*case '编辑': return (
                                    <span key={bt_index}>
                                        {bt_index==0?null: <span className="ant-divider" />}
                                        <a onClick={()=>{
                                            if(typeof(bt.onClick)=='function'){
                                                bt.onClick(rowData);
                                            }
                                        }}>{bt.name}</a>
                                    </span>
                                );*/
                            case '删除':
                                return (
                                    <span key={bt_index}>
                                        {bt_index == 0 ? null : <span className="ant-divider" />}
                                        <a
                                            onClick={() =>
                                                confirm({
                                                    className: 'delMessage',
                                                    title: '确定删除吗?',
                                                    okText: '确定',
                                                    okType: 'primary',
                                                    cancelText: '取消',
                                                    onOk() {
                                                        if (typeof bt.onClick == 'function') {
                                                            bt.onClick(rowData);
                                                        }
                                                    },
                                                    ...bt.modal
                                                })
                                            }
                                        >
                                            {bt.name}
                                        </a>
                                    </span>
                                );
                            default:
                                return (
                                    <span key={bt_index}>
                                        {bt_index == 0 ? null : <span className="ant-divider" />}
                                        <a
                                            onClick={() => {
                                                if (typeof bt.onClick == 'function') {
                                                    bt.onClick(rowData);
                                                }
                                            }}
                                        >
                                            {bt.name}
                                        </a>
                                    </span>
                                );
                        }
                    })}
                 </span>
            );
        } else {
            let result = [];
                {btnList.map((bt, bt_index) => {
                    if(bt_index>0){
                        switch (bt.name) {
                            case '删除':
                                result.push(
                                    <Menu.Item key={bt_index}>
                                        <a
                                            onClick={() =>
                                                confirm({
                                                    className: 'delMessage',
                                                    title: '确定删除吗?',
                                                    okText: '确定',
                                                    okType: 'primary',
                                                    cancelText: '取消',
                                                    onOk() {
                                                        if (typeof bt.onClick == 'function') {
                                                            bt.onClick(rowData);
                                                        }
                                                    },
                                                    ...bt.modal
                                                })
                                            }
                                            style={{width: 80}}
                                        >
                                            {bt.name}
                                        </a>
                                    </Menu.Item>
                                );
                                break;
                            default:
                                result.push (
                                    <Menu.Item key={bt_index}>
                                        <a
                                            onClick={() => {
                                                if (typeof bt.onClick == 'function') {
                                                    bt.onClick(rowData);
                                                }
                                            }}
                                            style={{width: 80}}
                                        >
                                            {bt.name}
                                        </a>
                                    </Menu.Item>
                                );
                                break;
                        }
                    }
                })}
            return (
                <span>
                    <span>
                        <a
                            onClick={() => {
                                if (typeof btnList[0].onClick == 'function') {
                                    btnList[0].onClick(rowData);
                                }
                            }}
                        >
                            {btnList[0].name}
                        </a>
                    </span>
                    <span>
                        <span className="ant-divider" />
                        <Dropdown overlay={<Menu onClick={onClick}>{result}</Menu>}>
                            <a>
                            更多 <Icon type="down" />
                            </a>
                        </Dropdown>
                    </span>
                </span>
            );
        }

    }
    // 获取经过处理的表格最新props
    getNewProps() {
        let t = this;

        let newProps = {
            ...t.props,
            columns: t.columnHandler()
        };
        // 自适应处理
        if (newProps.autoFit) {
            delete newProps.autoFit;
            if (newProps.scroll) {
                newProps.scroll = {
                    ...newProps.scroll,
                    y: t.state.bodyHeight
                };
            } else {
                newProps.scroll = {
                    y: t.state.bodyHeight
                };
            }
        }
        // 序列号处理
        if (newProps.indexColumn) {
            delete newProps.indexColumn;
            let startIndex = typeof newProps.startIndex == 'number' ? newProps.startIndex : 1;
            delete newProps.startIndex;
            newProps.dataSource = newProps.dataSource.map((item, index) => {
                return {
                    ...item,
                    rIndex: index + startIndex
                };
            });
        }

        return newProps;
    }

    render() {
        let t = this;
        let containerClasses = [styles.ct];
        if (t.state.autoFit) {
            containerClasses.push(styles.autoHeightcontainer);
        }

        return (
            <div id={t.id} className={containerClasses.join(' ')}>
                <Table {...t.getNewProps()} className={t.dataSource?styles.data_tb:''} />
            </div>
        );
    }
}
export default VortexDatagrid;
