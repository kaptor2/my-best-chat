import { statusIs418 } from './../Auth/authActions';
import { TDialogAction, TDialog } from './typesDialog';
import { dialogsApi } from './dialogsApi';
import { Dispatch } from 'redux';

const setDialogs = (data: Array<TDialog>): TDialogAction => ({
    type: 'DIALOGS:SET_ITEMS',
    payload: {
        items: data
    }
})

export const selectDialog = (id: string, fullName: string): TDialogAction => ({
    type: "DIALOGS:SELECT_ITEM",
    payload: {
        currentDialog: id,
        fullName
    }
})

const isLoading = (status: boolean): TDialogAction => ({
    type: 'DIALOGS:IS_LOADING',
    payload: {
        isLoading: status
    }
})

export const fetchDialogs = async (dispatch: Dispatch<any>, ) => {
    try {
        dispatch(isLoading(true));
        const resultsDialogs = await dialogsApi.getAll();
        const resultActions = setDialogs(resultsDialogs.data);
        dispatch(resultActions);
    } catch (error) {
        if(error.response.status === 418)
            dispatch(statusIs418(false, error.response.data.message))
    }
}
