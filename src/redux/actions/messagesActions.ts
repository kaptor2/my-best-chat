import { Dispatch } from 'redux';

import { messagesApi } from 'api/messagesApi';

    const getMessages = (data: Array<reduxTypes.TMessage>): reduxTypes.TMessageAction => ({
        type: 'MESSAGE:SET_ITEMS',
        payload: {
            items: data
        }
    })

    const isLoading = (status: boolean): reduxTypes.TMessageAction => ({
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
