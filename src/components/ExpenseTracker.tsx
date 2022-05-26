import React, { useState, useEffect } from 'react';
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import { Typography, Space, Button, Modal } from 'antd';
import { uniqueID } from '../utils';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function ExpenseTracker(ledgerEntry) {

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState(ledgerEntry);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
    }, [transactions]);
    return (
        <div>
            <div className='marginBottom1'>
                <Button size='large' type="primary" onClick={showModal}>
                    ADD +
                </Button>
            </div>
            <Modal title="Transaction Form" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <TransactionForm />
            </Modal>
            <TransactionHistory />
        </div>

    )
}

export default ExpenseTracker;