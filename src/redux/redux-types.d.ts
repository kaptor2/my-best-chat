declare namespace reduxTypes {

    type TMessage = {

        _id: string
        date: string,

        dialog: string,

        user: {
            _id: string,
            ava?: string,
            fullName: string
        },

        text?: string,
        isMe?: boolean,
        notReed?: boolean,

        audio?: {
            _id: string,
            tones: number[],
            url: string,
            duration: number
        },

        documents?: {
            _id: string,
            url: string
        }[]
    }

    type TDialog = {
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

    type TMessageAction = {
        type: 'MESSAGE:SET_ITEMS' | 'MESSAGE:IS_LOADING',
        payload?: {
            items?: Array<TMessage>,
            isLoading?: boolean
        }
    }

    type TMessageState = {
        items: Array<TMessage> | [],
        isLoading: boolean
    }

    type TStore = {
        dialogs: TDialogState
        messages: TMessageState
        authReducer: TAuthState
    }

     type TDialog = {
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
    
     type TDialogAction = {
        type: 'DIALOGS:SET_ITEMS' | 'DIALOGS:SELECT_ITEM' | 'DIALOGS:IS_LOADING',
        payload?: {
            items?: Array<TDialog>,
            currentDialog?: string,
            isLoading?: boolean,
            fullName?: string
        }
    }
    
     type TDialogState = {
        items: Array<TDialog> | []
        currentDialog: string,
        isLoading: boolean,
        fullName: string
    }

    type TAuth = {
        email: string, 
        password: string
    }
    
    type TRegis = {
        email: string, 
        fullName: string,
        password: string
    }

    type TActionAuth = {
        type: 'AUTHORIZATION:SET',
        payload: TAuthState
    }
    
    type TAuthState = {
        status: number,
        message: string
    }
    
}