import React from 'react';


function Expense({income, expense}){
    return(
        <div>
            <div>
                 <h2> Your Balance</h2>
                 <div>Rs{income-expense}</div>
            </div>
            <div>
                <div>
                    <h2>Income</h2>
                    <div>Rs{income}</div>
                </div>
                <div>
                    <h2>Expense</h2>
                    <div>Rs{expense}</div>
                </div>
            </div>
        </div>
    )
}
export default Expense;