import { authApi } from './authApi';
import { TActionAuth } from './authReducer';
import { Dispatch } from 'redux';

export const statusIs418 = (status: boolean, message: string): TActionAuth => ({
    type: "AUTHORIZATION:SET",
    payload: { status, message}
})

type TAuth = {
    email: string, 
    password: string
}

export const fetchAuth = async (dispatch: Dispatch<any>, {email, password}: TAuth) => {
    try {
        if((await authApi.onAuth(email, password)).status !== 418)
        dispatch(statusIs418(true, ""));
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(false, error.response.data.message))
    }
}
