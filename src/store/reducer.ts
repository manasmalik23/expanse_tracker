import * as actionTypes from "./actionTypes";

const initialState = {
    ledger: { income: 0, expense: 0 }
};

const reducer = (state = initialState, action) => {

    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_INCOME:
            state.ledger.income += action.ledgerEntry.amount
            return state
        case actionTypes.ADD_EXPENSE:
            state.ledger.expense += action.ledgerEntry.amount
            return state
    }
    return state;
};

export default reducer;