import axios from '../../api/index';

export const authApi = {
    onAuth: (email: string, password: string) =>
        axios.post('http://localhost:3004/api/set/authorization',
            { email, password }),

    onRegis: (email: string, fullName: string, password: string) =>
        axios.post('http://localhost:3004/api/set/registration',
            { email, password, fullName })
}
