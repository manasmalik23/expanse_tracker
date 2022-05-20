import React from 'react';
let transactions = JSON.parse(localStorage.getItem('expenseTrackerState')!);
const calculateExpenses = (): { income: number, expense: number } => {
    var localIncome = 0, localExpense = 0;
    if (transactions) {
        transactions.forEach((data) => {
            if (data['type'] === 'income') {
                localIncome += data['amount'];
            }
            else if (data['type'] === 'expense') {
                localExpense += data['amount'];
            }
        }
        );
    }
    return { income: localIncome, expense: localExpense }
}

function Expense() {
    return (
        <div>
            <div>
                <h2> Your Balance</h2>
                <div>Rs{calculateExpenses().income - calculateExpenses().expense}</div>
            </div>
            <div>
                <div>
                    <h2>Income</h2>
                    <div>Rs{calculateExpenses().income}</div>
                </div>
                <div>
                    <h2>Expense</h2>
                    <div>Rs{calculateExpenses().expense}</div>
                </div>
            </div>
        </div>
    )
}
export default Expense;