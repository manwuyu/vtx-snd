import React from 'react';

import styles from './VtxItemModal.css';

import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';

import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import TreeSelect from 'antd/lib/tree-select';
import 'antd/lib/tree-select/style/css';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';


const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

function getContentJsx (item, contentProps, setFieldsValue) {

    switch (item.contType.toLowerCase()) {
        case 'input':
            let InputProps ={
                style:{width: '100%'},
                onBlur:(e) => {},
                onChange:()=>{},
                ...item.options
            }
            return (
                <Input
                    {...InputProps}
                />
            )
            break;
        case 'select':
            let SelectProps ={
                showSearch:true,
                style:{width: '100%'},
                onChange:()=>{},
                onSelect:()=>{},
                ...item.options
            }
            let SelectOtherProps = {
                selectOptionValue: 'id',
                selectOptionName: 'name',
                ...item
            }
            let SelectOptionProps = {
                ...item.optionOptions?item.optionOptions:{}
            }
            return (
                <Select
                    {...SelectProps}
                    onSelect={(value,option )=>{
                        SelectProps.onSelect(value,option, setFieldsValue)
                    }}
                >
                {contentProps[SelectOtherProps.selectDataKey] instanceof Array && contentProps[SelectOtherProps.selectDataKey].map((sitem, index)=>{
                    return (
                        <Option value={`${sitem[SelectOtherProps.selectOptionValue]}`} key={index} {...SelectOptionProps}>{sitem[SelectOtherProps.selectOptionName]}</Option>
                    )
                })}
                </Select>
            )
            break;
        case 'inputnumber':
            let InputNumberProps ={
                style:{width: '100%'},
                onChange:()=>{},
                ...item.options
            }
            return (
                <InputNumber
                    {...InputNumberProps}
                />
            )
            break;
        case 'treeselect':
            let TreeSelectProps ={
                style:{},
                dropdownStyle:{
                    maxHeight:400
                },
                showSearch: true,
                disabled: false,
                treeDefaultExpandedKeys: ['-1'],
                treeData: contentProps[item.treeDataKey],
                onChange:()=>{},
                ...item.options
            }
            return (
                <TreeSelect
                    {...TreeSelectProps}
                />
            )
            break;
        case 'textarea':
            let TextAreaProps ={
                style:{},
                autosize:{ minRows: 3},
                onBlur: (e) => {},
                onChange:()=>{},
                 ...item.options
            }
            return (
                <TextArea
                    {...TextAreaProps}
               />
            )
    }
}

function getinitialValue (contentProps, item){
    switch (item.contType.toLowerCase()) {
        case 'select':
            let selectResult  = contentProps[item.contValue]? `${contentProps[item.contValue]}`: contentProps[item.contValue];
            if(typeof contentProps[item.contValue] == 'number'){
                selectResult = contentProps[item.contValue].toString();
            }
            return selectResult
            break;
        default:
            return contentProps[item.contValue];
            break;
    }

}
interface Props {
    modalProps: any;
    contentProps: any;
    itemArrs: any;
    form: any;
    wrappedComponentRef: any;
}
interface State {
}

class NewItem extends React.Component<Props, State>  {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        const {
            modalProps,
            contentProps,
            itemArrs,
            form
        } = this.props;
        const {
            getFieldDecorator,
            getFieldProps,
            getFieldValue,
            setFieldsValue
        } = form;
        const initModalProps={
            width: 900,
            title: '',
            maskClosable: false,
            ...modalProps

        }
        return (
            <Modal
                {...initModalProps}
            >
                {modalProps.visible?
                <Form>
                    <Row>
                    {itemArrs instanceof Array && itemArrs.map((item, key)=>{
                        return (
                            <Col span={12} key={key}>
                                <FormItem
                                    label={item.label}
                                    labelCol={{span: 6}}
                                    wrapperCol={{span: 16}}
                                >
                                    {getFieldDecorator([item.contValue], {
                                        rules: item.rules?item.rules: [],
                                        initialValue: getinitialValue(contentProps, item)
                                    })(
                                        getContentJsx(item, contentProps, setFieldsValue)
                                    )}
                                </FormItem>
                            </Col>
                        )
                    })
                    }
                    </Row>
                </Form>
                :
                null
                }
            </Modal>
        )
    }
    reset=()=>{
        this.props.form.resetFields();
    }
    submit = (callBack)=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                callBack(values);
            }
        });
    }
}

const NewItemForm = Form.create()(NewItem);
export default NewItemForm;
