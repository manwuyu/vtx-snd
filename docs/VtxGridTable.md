vtx-snd

### vtx-snd VtxGridTable 配置项

---

| **参数**              | **说明**                           | **类型** | **默认值**         |
| --------------------- | ---------------------------------- | -------- | ------------------ |
| [grid](#grid)         | 查询条件                           | Object   | 默认 null ，不显示 |
| [btngroup](#btns)     | 按钮组(新增，删除，更多，以及导出) | Object   | 默认 null ，不显示 |
| [datagrid](#datagrid) | 类表项                             | Object   | 默认 null ，不显示 |

---

#### <span id='grid'>查询条件 grid</span>

| **参数**         | **说明**                                                                                    | **类型**      | **默认值** |
| ---------------- | ------------------------------------------------------------------------------------------- | ------------- | ---------- |
| titles           | 和 vtxGrid 一致,**title**和**查询条件组件**顺序一致,</br>例：titles:['日期选择','部门选择'] | Array[String] | null       |
| gridweight       | 和 vtxGrid 一致,搜索条件占位格数(推荐：只使用 1)</br>例：gridweight:[1,1]                   | Array[Number] | null       |
| confirm          | 和 vtxGrid 一致,点击查询时的回调                                                            | Function      | null       |
| clear            | 和 vtxGrid 一致,点击清空时的回调                                                            | Function      | null       |
| showAll/showMore | 和 vtxGrid 一致,是否默认展开全部                                                            | Boolean       | false      |

---

#### <span id='btns'>按钮组 btngroup</span>

| **参数**                                    | **说明**                         | **类型**      | **默认值** |
| ------------------------------------------- | -------------------------------- | ------------- | ---------- |
| [buttons](#eg_btns)                         | 左侧大按钮，包括新建、删除、更多 | Array[Object] | null       |
| [extraButtons](#eg_extrabtns)**_(必填项)_** | 右侧小按钮，目前有 bug           | Array[Object] | null       |

---

#### <span id='datagrid'>列表项 datagrid</span>

| **参数**                                 | **说明**                                        | **类型**      | **默认值**        |
| ---------------------------------------- | ----------------------------------------------- | ------------- | ----------------- |
| columns **_(必填项)_**                   | 表格列的配置项                                  | Array[Object] | null              |
| dataSource **_(必填项)_**                | 表格数据                                        | Array[Object] | null              |
| [onChange](#onchange) **_(必填项)_**     | 和 vtxDatagrid 一致, 分页、排序、筛选变化时触发 | Function      | null              |
| [pagination](#pagination) **_(必填项)_** | 表格分页                                        | Object        | null              |
| [rowSelection](#rowselection)            | 行选择配置项                                    | Object        | 默认 null ,不显示 |

---

#### <span id='onchange'>onChange</span>配置项

```javascript
const onChange = (pagination, filters, sorter) => {
  const { current, pageSize } = pagination;
  this.setState(
    {
      current,
      pageSize
    },
    () => this.onSearch()
  );
  /* 
    current: 1  -> *改变后的页码值
    pageSize: 30  -> *改变后的每页显示数量
    -------------------------------------
    以下不要管
    showQuickJumper: true 
    showSizeChanger: true
    showTotal: ƒ showTotal(total)
    total
 */
};
```

#### <span id='pagination'>pagination</span>配置项

| **参数**                 | **说明**                                    | **类型** | **默认值** |
| ------------------------ | ------------------------------------------- | -------- | ---------- |
| current **_(必填项)_**   | 和 vtxDatagrid 一致, 当前页数               | Number   | null       |
| total **_(必填项)_**     | 和 vtxDatagrid 一致, 数据总数               | Number   | null       |
| pageSize **_(必填项)_**  | 和 vtxDatagrid 一致, 每页条数               | Numver   | null       |
| showTotal **_(必填项)_** | 和 vtxDatagrid 一致, 显示数据总量和当前数据 | Function | null       |

```javascript
const pagination = {
  current: currentPage,
  total: totalItems,
  pageSize: 10,
  showTotal: (total) => `总共${total}条记录`
};
```

#### <span id='rowselection'>rowSelection</span> 配置项

| **参数**                  | **说明**                                                            | **类型**      | **默认值**        |
| ------------------------- | ------------------------------------------------------------------- | ------------- | ----------------- |
| type 只有[checkbox,radio] | 和 vtxDatagrid 一致，推荐使用'checkbox'                             | String        | checkbox          |
| selectedRowKeys           | 和 vtxDatagrid 一致,指定选中项的 key 数组，需要和 onChange 进行配合 | Array[String] | null              |
| onChange                  | 和 vtxDatagrid 一致 ,选中项发生变化时的回调                         | Function      | null              |
| showTotal                 | 显示已选择数量                                                      | Boolean       | false             |
| children                  | 更多中的按钮(children 中的 icon 若不指定，默认为导入按钮样式)       | Array[Object] | 默认 null ,不显示 |
| onClear                   | 点击清空时的回调                                                    | Function      | null              |

```javascript
const rowSelection = {
  type: 'checkbox',
  selectedRowKeys: selectedRowKeys,
  onChange(keys) {
    selectedRowKeys = keys;
  },
  onClear() {
    alert('clear');
  },
  showTotal: true
};
```

#### <span id='eg_btns'>buttons 示例代码</span>

| **参数**                          | **说明**                                                      | **类型**      | **默认值**                |
| --------------------------------- | ------------------------------------------------------------- | ------------- | ------------------------- |
| type **_(必填项)_** 只有[new,del] | 按钮性质，根据此值显示按钮样式                                | Array[String] | null,默认显示更多按钮样式 |
| text                              | 按钮文字                                                      | String        | null                      |
| className                         | 按钮类名                                                      | String        | null                      |
| onClick                           | 按钮点击回调                                                  | Function      | null                      |
| icon                              | 按钮图标样式                                                  | String        | null                      |
| children                          | 更多中的按钮(children 中的 icon 若不指定，默认为导入按钮样式) | Array[Object] | 默认 null ,不显示         |

```javascript
const buttons = [
  {
    text: '新建',
    // type 为必传
    type: 'new',
    className: 'testBtn',
    onClick: () => {
      // 将显示弹窗modal的方法放在这里
    }
  },
  {
    text: '删除',
    // type 为必传
    type: 'del',
    modal: {
      onOk() {
        // 点击确定的回调
        alert('ok');
      },
      onCancel() {
        // 点击取消的回调
        alert('cancel');
      }
    }
  },
  {
    text: '更多',
    children: [
      {
        text: '导入',
        onClick() {
          alert('导入');
        },
        // icon 默认为导入样式
        icon: 'plus'
      }
    ]
  }
];
```

#### <span id='eg_extrabtns'>extraButtons 示例代码</span>

| **参数**                               | **说明**         | **类型** | **默认值**      |
| -------------------------------------- | ---------------- | -------- | --------------- |
| key **_(必填项)_** 只有[rows,page,all] | 三种导出方式     | String   | null,默认不显示 |
| onClick                                | 按钮点击回调事件 | Function | null            |

```javascript
// 如果少了key那么，将不会显示
const extraButtons = [
  {
    key: 'rows',
    onClick() {
      alert('导出选中行');
    }
  },
  {
    key: 'page',
    onClick() {
      alert('导出当前页');
    }
  },
  {
    key: 'all',
    onClick() {
      alert('导出全部');
    }
  }
];
```
