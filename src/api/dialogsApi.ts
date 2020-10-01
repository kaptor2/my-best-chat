import axios from 'api/core';

export const dialogsApi = {
    getAll: () => axios.get('/get/dialogs')
}
