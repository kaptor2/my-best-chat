import { authRegApi } from 'api/authRegApi';
import { SET } from 'reduxToolkit/slices/sliceAuthAndReg';

type TAuth = {
    email: string;
    password: string;
}
export const fetchAuth = async ({ email, password }: TAuth) => {
    try {
        if ((await authRegApi.onAuth(email, password)).status !== 418)
            SET({
                status: 200,
                message: ""
            })
    } catch (error) {
        if (error.response.status === 418)
            SET({
                status: error.response.status,
                message: error.response.data.message
            })
    }
}

type TRegis = {
    email: string;
    fullName: string;
    password: string;
}

export const fetchRegis = async ({ email, password, fullName }: TRegis) => {
    try {
        if ((await authRegApi.onAuth(email, password)).status !== 418)
            SET({
                status: 200,
                message: "Регистрация прошла успешно. Авторизуйтесь"
            })
    } catch (error) {
        if (error.response.status === 418)
            SET({
                status: error.response.status,
                message: error.response.data.message
            })
    }
}