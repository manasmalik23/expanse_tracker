import React, { useState, useEffect } from 'react';
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import { Typography, Space, Button, Modal } from 'antd';
import { uniqueID } from '../utils';
//Container component
// const transactionData = [];

function ExpenseTracker() {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    // const [transactions, setTransactions] = useState(transactionData);
    // const saveState = () => {
    //     localStorage.setItem('expenseTrackerState',
    //         JSON.stringify(transactions));

    // }

    // const calculateExpenses = () => {
    //     let income = 0, expense = 0;
    //     transactions.forEach((data) => {
    //         if (data['type'] === 'income') {
    //             income += data['amount'];
    //         }
    //         else if (data['type'] === 'expense') {
    //             expense += data['amount'];
    //         }
    //     });
    //     saveState();
    //     setIncome(income);
    //     setExpense(expense);
    // }
    // const handleAddNewTransaction = item => {
    //     let newTransactions: any = [...transactions, item];
    //     setTransactions(newTransactions);
    //     //calculateExpenses();
    // }
    // const handleDeleteTransaction = id => {
    //     let newTransactions = transactions.filter((item) => item['id'] !== id);
    //     setTransactions(newTransactions);

    // }

    // useEffect(() => {

    //     let localState = JSON.parse(localStorage.getItem('expenseTrackerState')!);
    //     if (localState && localState.length > 0) {
    //         setTransactions(localState);
    //     }
    //     else {
    //         calculateExpenses();
    //     }
    // }, []);

    // useEffect(() => {
    //     calculateExpenses();
    // }, [transactions]);


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
    return (
        <div>
            <div className='marginBottom1'>
                <Button size='large' type="primary" onClick={showModal}>
                    ADD +
                </Button>
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <TransactionForm />
            </Modal>
            <TransactionHistory />

        </div>

    )
}

export default ExpenseTracker;