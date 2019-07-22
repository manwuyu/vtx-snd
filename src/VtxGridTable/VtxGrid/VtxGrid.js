import React, { Component, PropTypes } from 'react';
import VtxRow from './VtxRow.js';
import VtxCol from './VtxCol.js';

import './VtxGrid.css';

const styles = {
  normal: 'vtx-ui-grid-grid-normal',
  min: 'vtx-ui-grid-grid-min',
  max: 'vtx-ui-grid-grid-max',
  moreBtn: 'vtx-ui-grid-grid-moreBtn',
  arrow: 'vtx-ui-grid-grid-arrow',
  arrowOn: 'vtx-ui-grid-grid-arrow-on',
  action: 'vtx-ui-grid-grid-action',
  hidden: 'vtx-ui-grid-grid-hidden',
  normalBox: 'vtx-ui-grid-grid-normalBox',
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

class VtxGrid extends React.Component {
  constructor(props) {
    super(props);
    this.isResize = null; //resize定时
    this.weightiness = 0;
    this.resetWidth = this.resetWidth.bind(this);

    props.gridweight.map((item, index) => {
      this.weightiness += item;
    });
    let height = 38,
      style = {};
    if (props.showAll || props.showMore ) {
      height = this.weightiness > 3 ? this.getHeight(this.weightiness) : 38;
    }
    
    this.state = {
      height: height,
      style: style,
      width: window.innerWidth
    };
  }
  getHeight(w, h) {
    if(w == 3 && h>38)
    return  38;
    if(w == 3 && h==38)
    return  76;
    return (Math.ceil(w / 3)+1) * 38;
  }
  isShowMore(weightiness) {
    let t = this;
    let h = t.state.height;
    if (h > 38) {
      t.setState(
        {
          height: 38
        },
        () => t.props.setGridHeight(this.state.height - 38, h)
      );
    } else {
      t.setState(
        {
          height: t.getHeight(weightiness, h)
        },
        () => t.props.setGridHeight(this.state.height - 38)
      );
    }
  }
  resetWidth() {
    let t = this;
    if (this.isResize) {
      clearTimeout(this.isResize);
    }
    this.isResize = setTimeout(() => {
      t.setState({
        width: window.innerWidth
      });
    }, 50);
  }
  render() {
    let t = this;
    let props = t.props;
    let { buttons } = props;
    let w = t.state.width > 1000 ? t.state.width : 1000,
      ar = Math.ceil((210 / w) * 24),
      al = 24 - ar;
    let render = (d, i) => {
      // let b = 4, c = 20,gwt = props.gridweight[i];
      let xs = Math.ceil(62 / ((w * al) / 24 / 24 / 3)),
        b = xs % 3 === 0 ? xs : xs - (xs % 3) + 3,
        c = 24 - b,
        gwt = props.gridweight[i];
      if (gwt === 2) {
        // b = 2;
        b = b / 2;
        c = 24 - b;
      }
      if (gwt === 3) {
        // b = 1;
        b = b / 3;
        c = 24 - b;
      }
      if(i<t.weightiness){
      return (
        <VtxCol key={i} span={8 * gwt} className={this.state.height <= 38 && i > 1  ? styles.hidden : ''}>
          <VtxRow gutter={2} attr="row">
            <VtxCol span={b}>
              <span data-type="fieldName">{props.titles[i]}</span>
            </VtxCol>
            <VtxCol span={c}>
              <span data-type="colon">：{d}</span>
            </VtxCol>
          </VtxRow>
        </VtxCol>
      );
    } else {
      return ''
    }
    };
    let analyzeChildern = (data) => {
      if (!data) return '';
      if (!data.length) {
        return render(data, 0);
      } else {
        return data.map((item, index) => {
          return render(item, index);
        });
      }
    };
    return (
      <div className={`${styles.normalBox}`}>
      <div
        className={`${styles.normal} ${t.props.className ? t.props.className : ''}`}
        style={{ height: `${t.state.height}px`, ...t.state.style }}
      >
        <VtxRow gutter={10} attr="row">
          <VtxCol span={24} xl={{ span: 24 }}>
            <VtxRow gutter={10} attr="row">
              {analyzeChildern(props.children)}
            </VtxRow>
          </VtxCol>
          <VtxCol span={4} xl={{ span: 3 }} className={`${styles.action}`} style={{ top: t.state.height - 38 }}>
            <VtxRow gutter={10} attr="row">
              {// t.state.hiddenconfrimButtion?"":
              t.props.hiddenconfrimButtion ? (
                ''
              ) : (
                <VtxCol span={8}>
                  <span data-type={'bt'}>
                    <Button style={{ width: '100%' }} type="plus" onClick={props.confirm}>
                      {props.confirmText || '查询'}
                    </Button>
                  </span>
                </VtxCol>
              )}
              {// t.state.hiddenclearButtion?"":
              t.props.hiddenclearButtion ? (
                ''
              ) : (
                <VtxCol span={8}>
                  <span data-type={'bt'}>
                    <Button style={{ width: '100%' }} onClick={props.clear}>
                      {props.clearText || '重置'}
                    </Button>
                  </span>
                </VtxCol>
              )}
              <VtxCol span={8}>
                {this.weightiness > 2 && !t.props.hiddenMoreButtion ? (
                  <span data-type={'bt'} onClick={() => t.isShowMore(this.weightiness)} className={`${styles.moreBtn}`}>
                    {t.state.height <= 38 ? <span>展开</span> : <span>收起 </span>}
                    <i className={`vtx-ui-iconfont ${styles.arrow} ${t.state.height <= 38 ? '' : styles.arrowOn}`}>
                      &#xe60a;
                    </i>
                  </span>
                ) : (
                  ''
                )}
              </VtxCol>
            </VtxRow>
          </VtxCol>
        </VtxRow>
      </div>
      </div>
    );
  }
  componentDidMount() {
    let t = this;
    // 自适应宽度
    window.addEventListener('resize', t.resetWidth, false);
  }
  componentWillUnmount() {
    let t = this;
    window.removeEventListener('resize', t.resetWidth, false);
  }
  componentWillReceiveProps(nextProps) {
    let t = this;
    this.weightiness = 0;
    nextProps.gridweight.map((item, index) => {
      this.weightiness += item;
    });
  }
}

VtxGrid.VtxRow = VtxRow;
VtxGrid.VtxCol = VtxCol;

export default VtxGrid;
