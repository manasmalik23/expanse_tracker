import { CloseOutlined } from '@ant-design/icons';
import { Button, Table, Tag } from 'antd';
import React from 'react';
import { Typography, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';

const { Text, Link } = Typography;

function TransactionHistory({ transactions, onDeleteTransaction }) {
    return (
        <div className="div-layout">
            <Title>Transaction History</Title>
            <ul>
                {
                    transactions.map((data) =>
                        <li key={data.id}> <Text code>{data.name} Rs{data.amount}</Text><CloseOutlined onClick={(e) => onDeleteTransaction(data.id)}></CloseOutlined></li>
                    )
                }
            </ul>
        </div>
    )
}
export default TransactionHistory;