import { checkConnect } from 'api/checkConnect';
import { authRegApi } from 'api/authRegApi';
import { Dispatch } from 'redux';

export const statusIs418 = (status: number, message: string): reduxTypes.TActionAuth => ({
    type: "AUTHORIZATION:SET",
    payload: { status, message}
})

export const checkAuth = async (dispatch: Dispatch<any>) => {
    try {
        await checkConnect()
        dispatch(statusIs418(200, ""));
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(error.response.status, error.response.data.message))
    }
}

export const fetchAuth = async (dispatch: Dispatch<any>, {email, password}: reduxTypes.TAuth) => {
    try {
        if((await authRegApi.onAuth(email, password)).status !== 418)
        dispatch(statusIs418(200, ""));
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(error.response.status, error.response.data.message))
    }
}

export const fetchRegis = async (dispatch: Dispatch<any>, {email, password, fullName}: reduxTypes.TRegis) => {
    try {
        if((await authRegApi.onRegis(email, fullName , password)).status !== 208)
            dispatch(statusIs418(200, "Регистрация прошла успешно. Авторизуйтесь"));
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(error.response.status, error.response.data.message))
    }
}
