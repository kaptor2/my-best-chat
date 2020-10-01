import { authReducer } from './reducers/authReducer';
import { messages } from './reducers/messagesReducer';
import { dialogs } from './reducers/dialogsReducer';
import { createStore, combineReducers } from 'redux';

export const store = createStore(
    combineReducers({
        dialogs,
        messages,
        authReducer
    }),
    (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']()
);