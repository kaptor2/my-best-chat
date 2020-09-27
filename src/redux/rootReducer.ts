import { authReducer } from './AuthReg/authReducer';
import { dialogs } from './dialogs/dialogsReducer';
import { messages } from './messages/messagesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    dialogs,
    messages,
    authReducer
});