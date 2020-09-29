import axios from 'api/index';

export const dialogsApi = {
    getAll: () => axios.get('/get/dialogs')
}
