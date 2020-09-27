import { authApi } from './authRegApi';
import { TActionAuth } from './authReducer';
import { Dispatch } from 'redux';

type TAuth = {
    email: string, 
    password: string
}

type TRegis = {
    email: string, 
    fullName: string,
    password: string
}

export const statusIs418 = (status: boolean, message: string): TActionAuth => ({
    type: "AUTHORIZATION:SET",
    payload: { status, message}
})

export const fetchAuth = async (dispatch: Dispatch<any>, {email, password}: TAuth) => {
    try {
        if((await authApi.onAuth(email, password)).status !== 418)
        dispatch(statusIs418(true, ""));
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(false, error.response.data.message))
    }
}

export const fetchRegis = async (dispatch: Dispatch<any>, {email, password, fullName}: TRegis) => {
    try {
        if((await authApi.onRegis(email, fullName , password)).status !== 208)
            dispatch(statusIs418(false, "Регистрация прошла успешно. Авторизуйтесь"));
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(false, error.response.data.message))
    }
}
