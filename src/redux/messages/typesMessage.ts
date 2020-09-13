export type TMessage = {

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

export type TMessageAction = {
    type: 'MESSAGE:SET_ITEMS',
    payload?: {
        items?: Array<TMessage>
    }
}

export type TMessageState = {
    items: Array<TMessage> | []
}