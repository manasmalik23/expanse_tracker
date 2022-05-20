import { transactionReducer } from './store/reducer';
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
    transactions: transactionReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;