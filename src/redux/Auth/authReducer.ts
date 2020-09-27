export type TActionAuth = {
    type: 'AUTHORIZATION:SET',
    payload: TAuthState
}

export type TAuthState = {
    status: boolean,
    message: string
}

const initialState: TAuthState  = {
    status: true,
    message: ""
}

export const authReducer = (state: TAuthState = initialState, { type, payload }: TActionAuth): TAuthState => {
    switch (type) {
        case 'AUTHORIZATION:SET':
           return { ...payload }
        default:
            return state;
    }
}