vtx-snd

### vtx-snd VtxItemModal 配置项

---

| **参数**                          | **说明**                            | **类型** | **默认值**         |
| --------------------------------- | ---------------------------------- | -------- | ------------------ |
| [modalProps](#modalProps)         | 弹窗属性                            | Object   | 默认 {} 必填 |
| [contentProps](#contentProps)     | 包含的字段    | Object   | 默认 {} ，不显示 |
| [itemArrs](#itemArrs) | 表单的条目                             | Array     | 默认 []  |
| [wrappedComponentRef](#wrappedComponentRef) | 引用Form表单封装的组件                             | Function   | 默认 {(form) => this.form = form} |
---

#### <span id='modalProps'>modalProps</span> 参考antd的Modal参数配置

| **参数**         | **说明**                                                    | **类型**      | **默认值** |
| ---------------- | -----------------------------------------------------------|---------------| --------------- |
| title           |                                                             |   Boolean  |   false     |
| visible         |                                                             |   Function |   null      |
| onCancel        |                                                             |   Boolean  |   false     |
| maskClosable    |                                                             | Boolean    |   false     |
| footer          |                                                             |            |   null      |

---

#### <span id='contentProps'>contentProps</span>  Array[Object]
表单初始化的数据

---

#### <span id='itemArrs'>itemArrs</span>表单条目 [目前需要无限扩展中]
| **参数**                                    | **说明**                         | **类型**      | **默认值** |
| ------------------------------------------- | -------------------------------- | ------------- | ---------- |
| [label]          | 标题 | String | 必填       |
| [contType]       | 类型（目前封装了input,inputnumber, select(单选),treeSelect(单选),textArea ）     |String | 必填       |
| [placeholder]       |   placeholder   |String |        |
| [selectDataKey]       |   配合contentProps，下拉列表数据   |String |        |
| [validated]       |  验证setFieldsValue，用来改变其他条目  |Array[Object] |        |
| [onSelect]       |   预留   |Function |        |
| [contName]       |   显示的名字   |String |        |
| [disabled]       |   是否禁用   |Boolean |        |
| [contName]       |   值   |String |        |
| [selectOptionValue]       |   select option value   |String |        |
| [selectOptionName]       |   select option 展示的东西   |String |        |
| [onChange]       |      |String |        |



```javascript
[
    {
        label: '考核纬度',
        contType: 'select',
        contValue: 'dimensionId',
        placeholder:'请选择考核纬度',
        selectDataKey: 'dimensionList',
        validated: [{
            required:true,
            message: '请选择考核纬度'
        }],
        onSelect: (value,option ,setFieldsValue)=>{
            dispatch({
                type: 'DimensionM/getDeptIdByDimensionId',
                payload:{
                    id: value
                }
            }).then((data)=>{
                setFieldsValue({
                    deptId: data
                });
            });
        },
    },
    {
        label: '所属部门',
        contType: 'treeSelect',
        contValue: 'deptId',
        contName: 'deptName',
        treeDataKey: 'orgTree',
        placeholder:'请选择所属部门',
        disabled: true
    },
    {
        label: '考核分组',
        contType: 'select',
        contValue: 'checkGroupId',
        placeholder:'请选择考核分组',
        selectDataKey: 'groupList',
        onSelect: (value,option, setFieldsValue)=>{
            dispatch({
                type: 'DimensionM/updateState',
                payload:{
                    record:{
                        obj: {
                            checkGroupName: option.props.children,
                            checkSubjectId: null,
                            checkSubjectName: ''
                        }
                    }
                }
            });
            DimensionFun.loadSubjectList(dispatch,{groupId:value});
            setFieldsValue({
                checkSubjectId: null
            });

        },
        validated: [{
            required:true,
            message: '请选择考核分组'
        }]
    },
    {
        label: '考核主体',
        contType: 'select',
        contValue: 'checkSubjectId',
        placeholder:'请选择考核主体',
        selectDataKey: 'subjectList',
        onSelect: (value,option)=>{
            dispatch({
                type: 'DimensionM/updateState',
                payload:{
                    record:{
                        obj: {
                            checkSubjectName: option.props.children
                        }
                    }
                }
            });
        },
        validated: [{
            required:true,
            message: '请选择考核主体'
        }]
    },
    {
        label: '考核类型',
        contType: 'select',
        contValue: 'type',
        placeholder:'请选择考核类型',
        selectDataKey: 'ExamineTypeEnum',
        selectOptionValue: 'value',
        selectOptionName: 'name',
        validated: [{
            required:true,
            message: '请选择考核类型'
        }]
    },
    {
        label: '考核时段',
        contType: 'input',
        contValue: 'timeInterval',
        placeholder:'请选择考核时段',
    }
]
```
---

#### <span id='onchange'>wrappedComponentRef</span>


```javascript
// 表单重置
this.form.reset();
// 获取表单数据
this.form.submit((value)=>{

});
```
