import { TDialogAction, TDialog } from './typesDialog';
import { dialogsApi } from './dialogsApi';
import { Dispatch } from 'redux';

export const dialogsActions = {
    getDialogs: (data: Array<TDialog>): TDialogAction => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: {
            items: data
        }
    }),

    selectDialog: (id: string): TDialogAction => ({
        type: "DIALOGS:SELECT_ITEM",
        payload: {
            currentDialog: id
        }
    }),

    fetchDialogs: async (dispatch: Dispatch<any>) => {
        const resultsDialogs = await dialogsApi.getAll();
        const resultActions = dialogsActions.getDialogs(resultsDialogs.data);
        dispatch(resultActions);
    }
}