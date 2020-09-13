export type TDialog = {
    _id: string,
    text: string,
    created_at: string,
    notReed: boolean,
    count_unread: number,
    user: {
        _id: string,
        fullname: string,
        avatar: string
        online: boolean
    }
}

export type TDialogAction = {
    type: 'DIALOGS:SET_ITEMS' | 'DIALOGS:SELECT_ITEM',
    payload?: {
        items?: Array<TDialog>
        currentDialog?: string
    }
}

export type TDialogState = {
    items: Array<TDialog> | []
    currentDialog: string
}