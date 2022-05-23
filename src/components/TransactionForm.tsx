import React, { useState } from 'react';
import { uniqueID } from '../utils';
import { Button, Menu, notification, Radio } from "antd";
import 'antd/dist/antd.css';
import '../index.css';
import { Typography, Space } from 'antd';
import '../style.css';
import { connect } from "react-redux"
import * as actionTypes from "../store/actionTypes"

import { Checkbox, Row, Col } from 'antd';
const { Text, Link } = Typography;

function TransactionForm({ onNewTransaction, ledger, saveTransaction }) {


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
    const addTransaction = (type, evt) => {
        evt.preventDefault();
        const data = {
            id: uniqueID(), name: nameValue,
            amount: parseInt(amountValue), type: type
        };

        onNewTransaction(data);
        setNameValue('');
        setAmountValue('');
    }
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
            <div className="form-layout">
                <h1>
                    Add New Transaction
                </h1>
                <form>
                    <div>
                        <span> Name</span>
                        <div className="marginBottom1">
                            <input type="text" value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <span>Amount (In Rupees)</span>
                        <div className="marginBottom1_5">
                            <input type="number" value={amountValue}
                                onChange={(e) => setAmountValue(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="marginBottom1">

                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Add Income</Radio>
                            <Radio value={2}>Add Expense</Radio>
                        </Radio.Group>
                    </div>
                    <div>
                        <Button type="primary" onClick={(e) => { save() }}>Save</Button>
                    </div>
                </form>
            </div>
        </div>
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