import { TDialogAction, TDialogState } from './../reducers/dialogs';
import { dialogsApi } from '../../api';
import { Dispatch } from 'redux';

export const dialogsActions = {
    getDialogs: (data: TDialogState): TDialogAction => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: {
            dialogs: data
        }
    }),

    fetchDialogs: async (dispatch: Dispatch<any>) => {
        const resultsDialogs = await dialogsApi.getAll();
        const resultActions = dialogsActions.getDialogs(resultsDialogs.data);
        dispatch(resultActions);
    }
}