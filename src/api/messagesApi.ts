import axios from 'api/core';

export const messagesApi = {
    getAll: (idDialogs: string) => axios.get(`/get/messages/${idDialogs}`)
}