import React, { useEffect, useState } from 'react';
import { uniqueID } from '../utils';
import { Button, Dropdown, Form, Input, Menu, message, notification, Radio, Select, TreeSelect } from "antd";
import 'antd/dist/antd.css';
import '../index.css';
import { Typography, Space } from 'antd';
import '../style.css';
import { connect, useDispatch } from "react-redux"
import * as actionTypes from "../store/actionTypes"

import { Checkbox, Row, Col } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import ExpenseTracker from './ExpenseTracker';
import TransactionHistory from './TransactionHistory';
import menu from 'antd/lib/menu';
import { act } from 'react-dom/test-utils';
const { Text, Link } = Typography;
const { Option } = Select;
const onClick = ({ key }) => {
    <Form.Item>{key.label}</Form.Item>
};

function TransactionForm({ ledger, saveTransaction }) {
    const menu = (
        <Menu
            onClick={onClick}
            items={[
                {
                    label: 'Food',
                    key: '1',
                },
                {
                    label: 'Bills',
                    key: '2',
                },
                {
                    label: 'Travel',
                    key: '3',
                },
            ]}
        />
    );
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
                <Form.Item label="Category">
                    <Form.Item
                        name={['Education', 'Food', 'Bills', 'Travel', 'Entertainment']}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Category is required',
                            },
                        ]}
                    >
                        <Select placeholder="Select category">
                            <Option value="Education">Education</Option>
                            <Option value="Travel">Travel</Option>
                            <Option value="Food">Food</Option>
                            <Option value="Bills">Bills</Option>
                            <Option value="Entertainment">Entertainment</Option>
                        </Select>
                    </Form.Item>
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