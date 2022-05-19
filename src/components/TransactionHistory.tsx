import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

function TransactionHistory({transactions, onDeleteTransaction}) {
    return(
        <div>
            
        <h2>Transaction History</h2>
        <ul>
            {
                transactions.map((data)=>
                <li key= {data.id}> <Text code>{data.name} Rs{data.amount}</Text><CloseOutlined onClick={(e)=> onDeleteTransaction(data.id)}></CloseOutlined></li>
                )
            }
        </ul>
        </div>
    )
}
export default TransactionHistory;