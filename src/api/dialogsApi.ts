import { axios } from './index'

export const dialogsApi = {
    getAll: () => axios.get('/dialogs')
}