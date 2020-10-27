import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TDialog = {
    _id: string;
    text: string;
    created_at: string;
    notReed: boolean;
    count_unread: number;
    user: {
        _id: string;
        fullname: string;
        avatar: string;
        online: boolean;
    };
}

type TDialogState = {
    items: reduxTypes.TDialog[] | [];
    currentDialog: string;
    isLoading: boolean;
    fullName: string;
}

const initialState: TDialogState = {
    items: [],
    currentDialog: '',
    isLoading: true,
    fullName: ''
}

const sliceDialogs = createSlice({
    name: 'DIALOGS',
    initialState,
    reducers: {
        SET_ITEMS(state, { payload }: PayloadAction<TDialog[] | []>) {
            state.items = payload;
        },
        IS_LOADING(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload;
        },
        SELECT_ITEM(state, { payload }: PayloadAction<{currentDialog: string, fullname: string}>) {
            state.currentDialog = payload.currentDialog;
            state.fullName = payload.fullname;
        }
    },
})

export const { SET_ITEMS, IS_LOADING, SELECT_ITEM } = sliceDialogs.actions;
export default sliceDialogs.reducer;