import axios from '../../api/index';

export const messagesApi = {
    getAll: (idDialogs: string) => axios.get(`/get/messages/2/${idDialogs}`)
}