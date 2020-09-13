import { TMessageAction, TMessage} from './typesMessage';
import { messagesApi } from './messagesApi';
import { Dispatch } from 'redux';

export const messagesActions = {
    getDialogs: (data: Array<TMessage>): TMessageAction => ({
        type: 'MESSAGE:SET_ITEMS',
        payload: {
            items: data
        }
    }),

    fetchDialogs: async (dispatch: Dispatch<any>, idDialog: string) => {
        const resultsMessages = await messagesApi.getAll(idDialog);
        const resultActions = messagesActions.getDialogs(resultsMessages.data);
        dispatch(resultActions);
    }
}