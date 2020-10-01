import { Reducer } from "react";

const initialState: reduxTypes.TAuthState  = {
    status: 0,
    message: ""
}

export const authReducer: Reducer<reduxTypes.TAuthState, 
reduxTypes.TActionAuth> = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'AUTHORIZATION:SET':
           return { ...payload }
        default:
            return state;
    }
}