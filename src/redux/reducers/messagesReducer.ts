const initialState = {
    items: [],
    isLoading: false
}

export const messages = (
    state: reduxTypes.TMessageState = initialState,
    { type, payload }: reduxTypes.TMessageAction)
    : reduxTypes.TMessageState => {
    switch (type) {

        case 'MESSAGE:SET_ITEMS':
            if (payload?.items)
                return {
                    ...state,
                    items: payload.items,
                    isLoading: false
                }
            return state;

        case 'MESSAGE:IS_LOADING':
            if (payload?.isLoading !== undefined)
                return {
                    ...state,
                    isLoading: payload?.isLoading
                }
            return state;

        default:
            return state;
    }
}