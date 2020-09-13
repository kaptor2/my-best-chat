import { TMessageAction, TMessage} from './typesMessage';
import { messagesApi } from './messagesApi';
import { Dispatch } from 'redux';

    const getMessages = (data: Array<TMessage>): TMessageAction => ({
        type: 'MESSAGE:SET_ITEMS',
        payload: {
            items: data
        }
    })

    const isLoading = (status: boolean): TMessageAction => ({
        type: 'MESSAGE:IS_LOADING',
        payload: {
            isLoading: status
        }
    })

    export const fetchMessages = async (dispatch: Dispatch<any>, idDialog: string) => {
        dispatch(isLoading(true))
        const resultsMessages = await messagesApi.getAll(idDialog);
        const resultActions = getMessages(resultsMessages.data);
        dispatch(resultActions);
    }
