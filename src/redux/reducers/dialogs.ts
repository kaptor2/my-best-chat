import { IDialog } from '../../types/IDialog';

export type TDialogAction = {
    type: 'DIALOGS:SET_ITEMS',
    payload: {
        dialogs?: TDialogState
    }
}

export type TDialogState = {
    dialogs: Array<IDialog> | []
}

const initialState = {
    dialogs: []
}

export const dialogs = (
    state: TDialogState = initialState,
    { type, payload }: TDialogAction)
    : TDialogState => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS': if (payload.dialogs)
            return payload.dialogs;
            return state;
        default:
            return state;
    }
}