vtx-snd

### vtx-snd VtxItemModal 配置项

---

| **参数**                                    | **说明**                 | **类型** | **默认值**                        |
| ------------------------------------------- | ------------------------ | -------- | --------------------------------- |
| [modalProps](#modalProps)                   | 弹窗属性                 | Object   | 默认 {} 必填                      |
| [contentProps](#contentProps)               | 包含的字段               | Object   | 默认 {} ，不显示                  |
| [itemArrs](#itemArrs)                       | 表单的条目               | Array    | 默认 []                           |
| [wrappedComponentRef](#wrappedComponentRef) | 引用 Form 表单封装的组件 | Function | 默认 {(form) => this.form = form} |

---

#### <span id='modalProps'>modalProps</span> 参考 antd 的 Modal 参数配置（可以增加）

| **参数** | **说明**                       | **类型**        | **默认值** |
| -------- | ------------------------------ | --------------- | ---------- |
| title    | 弹窗标题（注意与按钮字段一样） | String          | ''         |
| visible  | 弹窗是否显示                   | Function        | null       |
| onCancel | 取消弹窗按钮                   | Function        | null       |
| footer   | 弹窗的底部                     | Array[ReactDoM] | null       |

---

#### <span id='contentProps'>contentProps</span> Array[Object]

表单初始化的数据

---

#### <span id='itemArrs'>itemArrs</span>表单条目 [目前需要无限扩展中]

| **参数**            | **说明**                                                                      | **类型**      | **默认值**    |
| ------------------- | ----------------------------------------------------------------------------- | ------------- | ------------- |
| [label]             | 标题                                                                          | String        | 必填          |  |
| [contValue]         | 表单的值                                                                      | String        |               |
| [contType]          | 类型（目前封装了 input,inputnumber, select(单选),treeSelect(单选),textArea ） | String        | 必填          |
| [options]            | 自定义属性具体参考 antd                                                       | Object        | 非必填        |
| [optionOptions]      | select 的 optipn 属性                                                         | Object        | 非必填        |
| [selectDataKey]     | 配合 contentProps，下拉列表数据                                               | String        |               |
| [rules]             | 验证 setFieldsValue，用来改变其他条目，详情件 antd form 的 rules              | Array[Object] | [] 非必填     |
| [selectOptionValue] | select option id                                                              | String        | 'id' 非必填   |
| [selectOptionName]  | select option 内容                                                            | String        | 'name' 非必填 |

|

```javascript
[
  {
    label: '考核纬度',
    contType: 'select',
    contValue: 'dimensionId',

    selectDataKey: 'dimensionList',
    rules: [
      {
        required: true,
        message: '请选择考核纬度'
      }
    ],
    options: {
      placeholder: '请选择考核纬度',
      onSelect: (value, option, setFieldsValue) => {
        // setFieldsValue 预留的setFieldsValue 用来改变表单里的其他元素
        dispatch({
          type: 'DimensionM/getDeptIdByDimensionId',
          payload: {
            id: value
          }
        }).then((data) => {
          setFieldsValue({
            deptId: data
          });
        });
      }
    }
  }
];
```

---

#### <span id='onchange'>wrappedComponentRef</span>配置项

```javascript
// 表单重置
this.form.reset();
// 获取表单数据
this.form.submit((value) => {});
```
