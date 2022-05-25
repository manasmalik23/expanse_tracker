import React, { useState } from 'react';
import { uniqueID } from '../utils';
import { Button, Form, Input, Menu, message, notification, Radio } from "antd";
import 'antd/dist/antd.css';
import '../index.css';
import { Typography, Space } from 'antd';
import '../style.css';
import { connect, useDispatch } from "react-redux"
import * as actionTypes from "../store/actionTypes"

import { Checkbox, Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};

function TransactionForm({ ledger, saveTransaction }) {
    const [value, setValue] = React.useState(1);
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const save = () => {
        let transactionType = actionTypes.ADD_INCOME
        if (value === 2) {
            transactionType = actionTypes.ADD_EXPENSE
        }
        const data = {
            id: uniqueID(), name: nameValue,
            amount: parseInt(amountValue), type: transactionType
        };
        saveTransaction(data);
        openNotification();
    };
    const openNotification = () => {
        notification.open({
            message: 'Success',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    return (
        <div className="div-layout">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[{ required: true, message: 'Add the type' }]}
                >
                    <Input type="text" value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Amount"
                    name="Amount"
                    rules={[{ required: true, message: 'Enter the amount' }]}
                >
                    <Input type="number" value={amountValue}
                        onChange={(e) => setAmountValue(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Menu
                        onClick={onClick}
                        items={[
                            {
                                label: 'Food',
                                key: '1',
                            },
                            {
                                label: 'Education',
                                key: '2',
                            },
                            {
                                label: 'Entertainment',
                                key: '3',
                            },
                            {
                                label: 'Bills',
                                key: '4',
                            },
                            {
                                label: 'Travel',
                                key: '5',
                            },
                        ]}
                    />
                </Form.Item>
                <div className="marginBottom1">

                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Add Income</Radio>
                        <Radio value={2}>Add Expense</Radio>
                    </Radio.Group>
                </div>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={(e) => { save() }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        ledger: state.ledger,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveTransaction: (transactionData) => {
            console.log("before calling dispatch", transactionData);
            dispatch({
                type: transactionData.type, ledgerEntry: transactionData
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)