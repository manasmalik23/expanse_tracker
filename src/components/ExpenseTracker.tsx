import React, { useState, useEffect } from 'react';
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import { Typography, Space } from 'antd';
import { uniqueID } from '../utils';
//Container component
const transactionData=[
];
function ExpenseTracker(){
    const [income, setIncome]=useState(0);
    const [expense, setExpense]= useState(0);
    const [transactions, setTransactions]= useState(transactionData);
    const saveState=()=>{
        localStorage.setItem('expenseTrackerState', 
        JSON.stringify(transactions));
    }

    const calculateExpenses=()=>{
        let income=0,  expense=0;
        transactions.forEach((data)=> {
            if(data['type'] === 'income')
            {
                income+=data['amount'];
            }
            else if(data['type'] === 'expense')
            {
                expense+=data['amount'];
            }
        });
       saveState();
       setIncome(income);
       setExpense(expense);
    }
    const handleAddNewTransaction = item=> {
        let newTransactions:any=[...transactions, item];
        setTransactions(newTransactions);
        //calculateExpenses();
    }
    const handleDeleteTransaction=id=>{
        let newTransactions=transactions.filter((item)=> item['id']!==id);
        setTransactions(newTransactions);

    }

    useEffect(()=>{
        let tempState=localStorage.getItem('expenseTrackerState');
        let localState=tempState !==null ? JSON.parse(tempState): 'Error';
        if(localState){
            setTransactions(localState);
        }
        else{
            calculateExpenses();
        }
    }, []);

    useEffect(()=>{
        calculateExpenses();
    }, [transactions]);

    return (
        <div>
            <Expense income={income} expense={expense}/>
            <TransactionHistory transactions={transactions} 
                onDeleteTransaction={handleDeleteTransaction}/>
            <TransactionForm onNewTransaction={handleAddNewTransaction}/>
        </div>

    )
}

export default ExpenseTracker;