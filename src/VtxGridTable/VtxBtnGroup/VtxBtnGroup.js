import React, { Component, PropTypes } from 'react';
import VtxRow from '../VtxGrid/VtxRow.js';
import VtxCol from '../VtxGrid/VtxCol.js';

import './VtxBtnGroup.css';
const styles = {
    normal: 'vtx-ui-btnGroup-normal',
    extraBtns: 'vtx-ui-btnGroup-extraBtns',
    titleselectioncontainer: 'vtx-ui-btnGroup-titleselectioncontainer',
    item: 'vtx-ui-btnGroup-item',
    title: 'vtx-ui-btnGroup-titleselectioncontainer-title',
};
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
const SubMenu = Menu.SubMenu;
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';
import Popover from 'antd/lib/popover';
import 'antd/lib/popover/style/css';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';
const confirm = Modal.confirm;
const ButtonGroup = Button.Group;

class VtxGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    renderextraButtons = ()=>{
        let { extraButtons } = this.props;
        if (! (extraButtons instanceof  Array)) return <Menu></Menu>
        let menuItems = [];
        extraButtons.map((item, index) => {
            if(!item.key){
                console.error('缺少key');
                return false;
            }
            if(!item.onClick){
                item.onClick = ()=>{}
            }
            if(item.key == 'rows') {
                menuItems.push (
                    <Menu.Item key={item.key}>
                        <div
                            style={{
                                ...item.style
                            }}
                            className={`${styles.item} ${item.className?item.className: ''}`}
                            onClick={item.onClick}
                        >{item.text?item.text: '导出选中行'}
                        </div>
                    </Menu.Item>
                )
            }else if(item.key == 'page') {
                menuItems.push (
                    <Menu.Item key={item.key}>
                        <div
                            style={{
                                ...item.style
                            }}
                            className={`${styles.item} ${item.className?item.className: ''}`}
                            onClick={item.onClick}
                        >{item.text?item.text: '导出当前页'}
                        </div>
                    </Menu.Item>
                )
            }else if(item.key == 'all') {
                menuItems.push (
                    <Menu.Item key={item.key}>
                        <div
                            style={{
                                ...item.style
                            }}
                            className={`${styles.item} ${item.className?item.className: ''}`}
                            onClick={item.onClick}
                        >{item.text?item.text: '导出全部'}
                        </div>
                    </Menu.Item>
                )
            } else {
                menuItems.push (
                    <Menu.Item key={item.key}>
                        <div
                            style={{
                                ...item.style
                            }}
                            className={`${styles.item} ${item.className?item.className: ''}`}
                            onClick={item.onClick}
                        >{item.text?item.text: '未知按钮'}
                        </div>
                    </Menu.Item>
                )
            }
        });
        return (
            <Menu>
                {menuItems}
            </Menu>
        )
    }
    analyzeButtons = () => {
        let { buttons } = this.props;
        if (! (buttons instanceof  Array)) return null;
        let btns = [];
        let menuItems = [];
        buttons.map((item, index) => {
            if (item.type == 'new') {
                btns.push(
                    <Button
                        key={index}
                        icon="plus"
                        onClick={item.onClick}
                        type="plus"
                        className={item.className}
                        style={{
                            ...item.style
                        }}
                    >
                        {item.text}
                    </Button>
                );
            } else if (item.type == 'del') {
                btns.push(
                    <Button
                        key={index}
                        icon="delete"
                        type="delete"
                        onClick={() =>
                            confirm({
                                className: 'delModal',
                                title: '确定删除选中的数据吗?',
                                okText: '确定',
                                okType: 'primary',
                                cancelText: '取消',
                                onOk() {
                                    console.log('OK');
                                },
                                onCancel() {
                                    console.log('Cancel');
                                },
                                ...item.modal
                            })
                        }
                        className={item.className}
                        style={{
                            ...item.style
                        }}
                    >
                        {item.text}
                    </Button>
                );
            } else {
                const menu = (
                    <Menu>
                        {item.children &&
                            item.children.map((item, index) => {
                                return (
                                    <Menu.Item key={index}>
                                        <div
                                            style={{
                                                ...item.style
                                            }}
                                            onClick={item.onClick}
                                            className={`${styles.item} ${item.className?item.className: ''}`}
                                        >
                                            <Icon
                                                type={item.icon || 'menu-unfold'}
                                                style={{ marginRight: '5px' }}
                                            />
                                            {item.text}
                                        </div>
                                    </Menu.Item>
                                );
                            })}
                    </Menu>
                );
                btns.push(
                    <Dropdown overlay={menu} key={index}>
                        <Button
                            icon={item.icon || 'bars'}
                            className={item.className}
                            type="more"
                            style={{
                                ...item.style
                            }}
                        >
                            {item.text}
                        </Button>
                    </Dropdown>
                );
            }
        });
        return btns;
    };
    render() {
        let t = this;
        return (
            <div
                className={`${styles.normal} ${t.props.className?t.props.className: ''}`}
            >
                <VtxRow gutter={10} attr="row">
                    <VtxCol span={12} xl={{ span: 12 }}>
                        <VtxRow gutter={10} attr="row">
                            {this.analyzeButtons()}
                        </VtxRow>
                    </VtxCol>
                    {t.props.columnsVisibility && t.props.changeColumnVisibility ? (
                        <VtxCol span={12} xl={{ span: 12 }}>
                            <VtxRow gutter={3} attr="row">
                                <div className={styles.extraBtns}>
                                    <ButtonGroup>
                                    <Popover
                                        placement="bottomRight"
                                        title={'隐藏显示列'}
                                        content={
                                            <div className={styles.titleselectioncontainer}>
                                                {t.props.columnsVisibility.map((item, index) => {
                                                    return (
                                                        <Checkbox
                                                            key={index}
                                                            checked={item.visible}
                                                            onChange={(e) => {
                                                                t.props.changeColumnVisibility(item.key, e.target.checked);
                                                            }}
                                                        >
                                                            <div className={styles.title}>{item.title}</div>
                                                        </Checkbox>
                                                    )
                                                })}
                                            </div>
                                        }
                                        // trigger="click"
                                    >
                                        <Button>
                                            <Icon type="more" style={{ fontSize: '5px' }} />
                                            <Icon type="caret-down" style={{ fontSize: '5px' }} />
                                        </Button>
                                    </Popover>
                                    <Dropdown overlay={this.renderextraButtons()}>
                                        <Button >
                                            <Icon type="export" style={{ fontSize: '5px' }} />
                                            <Icon type="caret-down" style={{ fontSize: '5px' }} />
                                        </Button>
                                    </Dropdown>
                                    </ButtonGroup>
                                </div>
                            </VtxRow>
                        </VtxCol>
                    ) : null}
                </VtxRow>
            </div>
        );
    }
}

VtxGrid.VtxRow = VtxRow;
VtxGrid.VtxCol = VtxCol;

export default VtxGrid;
