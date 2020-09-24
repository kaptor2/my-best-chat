import { TDialogAction, TDialogState } from './typesDialog';

const initialState = {
    items: [],
    currentDialog: '',
    isLoading: true,
    fullName: ''
}

export const dialogs = (
    state: TDialogState = initialState,
    { type, payload }: TDialogAction)
    : TDialogState => {
    switch (type) {

        case 'DIALOGS:SET_ITEMS':
            if (payload?.items)
                return {
                    ...state,
                    items: payload.items,
                    isLoading: false
                }
            return state;
        case 'DIALOGS:IS_LOADING':
            if (payload?.isLoading)
                return {
                    ...state,
                    isLoading: payload.isLoading
                }
            return state;

        case 'DIALOGS:SELECT_ITEM':
            if (payload?.currentDialog && payload?.fullName)
                return {
                    ...state,
                    currentDialog: payload.currentDialog,
                    fullName: payload.fullName
                }
            return state;

        default:
            return state;
    }
}