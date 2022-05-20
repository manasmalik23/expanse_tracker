import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actionTypes";
const initialList = () => {
    let localState = JSON.parse(localStorage.getItem('expenseTrackerState')!);
    if (localState && localState.length > 0) {
        return localState;
    }
};
const initialState = {
    transactionList: initialList()
};
export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION: {
            localStorage.setItem(
                "transaction-list",
                JSON.stringify([...state.transactionList, action.data])
            );
            return {
                ...state,
                transactionList: [...state.transactionList, action.data],
            };
        }
        case DELETE_TRANSACTION: {
            const { data } = action;
            const updatedList = state.transactionList.filter(
                (item) => item.createdAt !== data.createdAt
            );
            localStorage.setItem("transaction-list", JSON.stringify(updatedList));
            return {
                ...state,
                transactionList: updatedList,
            };
        }
        default:
            return {
                ...state,
            };
    }
};