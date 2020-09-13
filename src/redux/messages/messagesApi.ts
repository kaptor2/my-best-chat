import axios from '../../api/index';

export const messagesApi = {
    getAll: (idDialogs: string) => axios.get(`/messages?dialog=${idDialogs}`)
}