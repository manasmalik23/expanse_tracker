import { ThunkDispatch } from "redux-thunk";

export interface User {
    message: string;
}
interface WELCOME{
    type: "WELCOME",
}
interface WELCOME_SUCCESS{
    type: "WELCOME_SUCCESS",
    payload: User;
}
interface LOAD_ERROR{
    type: "LOAD_ERROR"
}

export interface UserState{
    data: User;
    loading: boolean;
    error: string
}

export type UserAction= WELCOME | WELCOME_SUCCESS | LOAD_ERROR;
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>