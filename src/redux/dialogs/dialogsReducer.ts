import { TDialogAction, TDialogState } from './typesDialog';

const initialState = {
    items: [],
    currentDialog: ''
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
                    items: payload.items
                }
            return state;

        case 'DIALOGS:SELECT_ITEM':
            if (payload?.currentDialog)
                return {
                    ...state,
                    currentDialog: payload.currentDialog
                }
            return state;
            
        default:
            return state;
    }
}