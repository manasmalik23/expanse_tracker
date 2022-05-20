import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actionTypes";
export const addTransaction = (data) => {
    return {
        type: ADD_TRANSACTION,
        data,
    };
};

export const deleteExpense = (data) => {
    console.log(data, "Action");
    return {
        type: DELETE_TRANSACTION,
        data,
    };
};