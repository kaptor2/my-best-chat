import { TDialogAction, TDialog } from './typesDialog';
import { dialogsApi } from './dialogsApi';
import { Dispatch } from 'redux';

const getDialogs = (data: Array<TDialog>): TDialogAction => ({
    type: 'DIALOGS:SET_ITEMS',
    payload: {
        items: data
    }
})

export const selectDialog = (id: string): TDialogAction => ({
    type: "DIALOGS:SELECT_ITEM",
    payload: {
        currentDialog: id
    }
})

const isLoading = (status: boolean): TDialogAction => ({
    type: 'DIALOGS:IS_LOADING',
    payload: {
        isLoading: status
    }
})

export const fetchDialogs = async (dispatch: Dispatch<any>) => {
    dispatch(isLoading(true));
    const resultsDialogs = await dialogsApi.getAll();
    const resultActions = getDialogs(resultsDialogs.data);
    dispatch(resultActions);
}
