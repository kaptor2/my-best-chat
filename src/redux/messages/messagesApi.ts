import axios from '../../api/index';

export const messagesApi = {
    getAll: (idDialogs: string) => axios.get(`/get/messages/NDA0MDE4NTA0MTA2NjY=/${idDialogs}`)
}