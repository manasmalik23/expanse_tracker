import React, { useState } from 'react';
import { uniqueID } from '../utils';
import { Button, Menu } from "antd";
import 'antd/dist/antd.css';
import '../index.css';
import { useDispatch } from "react-redux";
import { addTransaction } from '../store/actionCreators';
import { Typography, Space } from 'antd';

import { Checkbox, Row, Col } from 'antd';
const dispatch = useDispatch();
const { Text, Link } = Typography;
function onChange(checkedValues) {
}

function TransactionForm({ onNewTransaction }) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const handleTransaction = (type, evt) => {
        evt.preventDefault();
        const data = {
            id: uniqueID(), name: nameValue,
            amount: parseInt(amountValue), type: type
        };

        onNewTransaction(data);
        setNameValue('');
        setAmountValue('');
    }
    const data = {
        uniqueID,
        nameValue,
        amountValue,
    };
    dispatch(addTransaction(data));
    return (
        <div>
            <h2>
                Add New Transaction
            </h2>
            <form>
                <label>
                    Name
                    <div>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                </label>
                <label>
                    Amount (In Rupees)
                    <div>
                        <input type="number" value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)}
                        />
                    </div>
                </label>
                <div>
                    <Checkbox defaultChecked={false} onClick={(e) => handleTransaction('income', e)}>Add Income</Checkbox>;
                    <Checkbox defaultChecked={false} onClick={(e) => handleTransaction('expense', e)}>Add Expense</Checkbox>;
                    {/* <Button type="primary" onClick={(e)=>addTransaction('income',e)}>Add Income</Button>
                    <Button onClick={(e)=>addTransaction('expense',e)}>Add Expense</Button> */}
                </div>
            </form>
        </div>
    )
}
export default TransactionForm;