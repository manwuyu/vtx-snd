import React, { Component, PropTypes } from 'react';
import { VtxGrid } from './VtxGrid';
import { VtxDatagrid } from './VtxDatagrid';
import { VtxBtnGroup } from './VtxBtnGroup';

import '../../static/font/iconfont.css';
import './VtxGridTable.css';
const styles = {
  commonbg: 'vtx-ui-gridtable-commonbg',
  noData: 'vtx-ui-gridtable-noData',
  normal: 'vtx-ui-gridtable-normal'
};

class VtxGridTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnsVisibility: props.datagrid
        ? props.datagrid.columns.map((item) => ({
            title: item.title,
            key: item.key,
            visible: Array.isArray(props.defaultVisibleCols) ? props.defaultVisibleCols.indexOf(item.key) > -1 : true
          }))
        : undefined,
      changeColumn: {
        key: undefined,
        visible: undefined
      },
      gridHeight: this.initHeight(props.grid),
      height: window.innerHeight
    };
    this.isResize = null;
    this.resetWidth = this.resetWidth.bind(this);
  }

  setGridHeight = (gridHeight) => {
    this.setState({
      gridHeight
    });
  };
  initHeight = (grid)=>{
    let weightiness = 0;
    let gridHeight = 0;
    if(grid){
        grid.gridweight.map((item, index) => {
            weightiness += item;
        });
        if (grid.showAll || grid.showMore) {
          gridHeight = weightiness > 3 ? this.getHeight(weightiness) : 38;
        }
    }
    return gridHeight;
  }
  getHeight(w) {
    return Math.ceil(w / 3) * 38;
  }

  changeColumnVisibility = (key, visible) => {
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
      columnsVisibility,
      changeColumn: {
        key,
        visible
      }
    });
  };

  initDatagrid = (datagrid) => {
    const intParam = {
      indexTitle: '序号',
      indexColumn: true,
      hideColumn: true,
      rowKey: 'id',
      autoFit: false,
      locale: {
        emptyText: (
          <div>
            <i className={styles.noData} />
          </div>
        )
      }
    };
    const intPaginationParam = {
      showSizeChanger: true,
      showQuickJumper: true
    };
    if (datagrid.pagination instanceof Object) {
      datagrid.pagination = { ...intPaginationParam, ...datagrid.pagination };
    }

    return { ...intParam, ...datagrid };
  };
  render() {
    const { grid, datagrid, btngroup } = this.props;
    const { columnsVisibility, changeColumn, gridHeight, height } = this.state;
    let tableHeight = height - 177 - gridHeight;
    if(!grid && !btngroup){
      tableHeight = height - 40 - 55;
    } else if(!grid){
      tableHeight = height - 40 - 55 - 16 - 63;
    }else if(!btngroup){
      tableHeight = height - 40 - 55 - 16 - gridHeight-58;
    } else {
      tableHeight = height - 40 - 55 - 16 - 63 - gridHeight- 58;
    }
    return (
      <div className={styles.commonbg}>
        <div className={styles.normal} style={{ marginTop: (grid || btngroup)? 16: 0}}>
          {grid ? (
            <VtxGrid {...grid} setGridHeight={this.setGridHeight}>
              {this.props.children}
            </VtxGrid>
          ) : null}
          {btngroup ? (
            <VtxBtnGroup
              {...btngroup}
              columnsVisibility={columnsVisibility}
              changeColumnVisibility={this.changeColumnVisibility}
            />
          ) : null}
          {
            datagrid&&datagrid.rowSelection&&datagrid.rowSelection.showTotal?(
                <div className="vtx-ui-gridtable-infobox">
                    {datagrid.rowSelection.showTotal instanceof Object?
                      <div className="vtx-ui-gridtable-info">{datagrid.rowSelection.showTotal}</div>
                      : 
                      <div className="vtx-ui-gridtable-info">
                        <i className="vtx-ui-gridtable-icon"><svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>
                        已选择 <span className="vtx-ui-gridtable-num">{datagrid.rowSelection.selectedRowKeys.length}</span> 项
                        <span className="vtx-ui-gridtable-clear" onClick={datagrid.rowSelection.onClear}>清空</span>
                      </div>
                    }
                    
                </div>
            )
            :null
          }
        </div>
        {datagrid ? (
          <VtxDatagrid
            {...this.initDatagrid(datagrid)}
            gridHeight={gridHeight}
            style={{
              height: datagrid.autoFit?(datagrid.height || tableHeight): 'auto'
            }}
            changeColumn={changeColumn}
          />
        ) : null}
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
  resetWidth() {
    let t = this;
    if (this.isResize) {
      clearTimeout(this.isResize);
    }
    this.isResize = setTimeout(() => {
      t.setState({
        height: window.innerHeight
      });
    }, 50);
  }
}

export default VtxGridTable;
