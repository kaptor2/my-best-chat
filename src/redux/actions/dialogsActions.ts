import { statusIs418 } from 'redux/actions/authRegActions';
import { dialogsApi } from 'api/dialogsApi';
import { ActionCreator, Dispatch } from 'redux';

const setDialogs: ActionCreator<reduxTypes.TDialogAction> =
    (data: Array<reduxTypes.TDialog>) => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: {
            items: data
        }
    })

export const selectDialog = (id: string, fullName: string): reduxTypes.TDialogAction => ({
    type: "DIALOGS:SELECT_ITEM",
    payload: {
        currentDialog: id,
        fullName
    }
})

const isLoading = (status: boolean): reduxTypes.TDialogAction => ({
    type: 'DIALOGS:IS_LOADING',
    payload: {
        isLoading: status
    }
})

export const fetchDialogs = async (dispatch: Dispatch<any>,) => {
    try {
        dispatch(isLoading(true));
        const resultsDialogs = await dialogsApi.getAll();
        const resultActions = setDialogs(resultsDialogs.data);
        dispatch(resultActions);
    } catch (error) {
        error.response && error.response.status === 418 &&
            dispatch(statusIs418(error.response.status, error.response.data.message))
    }
}
