import { TMessageAction, TMessageState } from './typesMessage';

const initialState = {
    items: [],
}

export const messages = (
    state: TMessageState = initialState,
    { type, payload }: TMessageAction)
    : TMessageState => {
    switch (type) {

        case 'MESSAGE:SET_ITEMS':
            if (payload?.items)
                return {
                    ...state,
                    items: payload.items
                }
            return state;
            
        default:
            return state;
    }
}