import React, {useState} from 'react';
import { uniqueID } from '../utils';
import { Button, Menu } from "antd";
import 'antd/dist/antd.css';
import '../index.css';
import { Typography, Space } from 'antd';

import { Checkbox, Row, Col } from 'antd';
const { Text, Link } = Typography;
function onChange(checkedValues) {
  }

function TransactionForm({onNewTransaction}){
    const [nameValue, setNameValue]= useState('');
    const [amountValue, setAmountValue]=useState('');
    const addTransaction= (type, evt)=> {
        evt.preventDefault();
        const data= { id: uniqueID(), name:nameValue, 
        amount:parseInt(amountValue), type: type };

        onNewTransaction(data);
        setNameValue('');
        setAmountValue('');
    }
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
                        onChange={(e)=>setNameValue(e.target.value)}/>
                    </div>
                </label>
                <label>
                    Amount (In Rupees)
                    <div>
                        <input type="number" value={amountValue}
                        onChange={(e)=>setAmountValue(e.target.value)}
                        />
                    </div>
                </label>
                <div>
                    <Checkbox defaultChecked={false} onClick={(e)=>addTransaction('income',e)}>Add Income</Checkbox>;
                    <Checkbox defaultChecked={false} onClick={(e)=>addTransaction('expense',e)}>Add Expense</Checkbox>;
                    {/* <Button type="primary" onClick={(e)=>addTransaction('income',e)}>Add Income</Button>
                    <Button onClick={(e)=>addTransaction('expense',e)}>Add Expense</Button> */}
                </div>
            </form>
        </div>
    )
}
export default TransactionForm;