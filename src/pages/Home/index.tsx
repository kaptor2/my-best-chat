import React from 'react';
import './Home.scss';
import { Dialogs, Messages, NewDialog } from '../../components';
import { IDialogItem } from '../../components/DialogItem';
import dialogsJSON from './dialog_items.json';
import messagesJSON from './messages.json';
import { TMessage } from '../../components/Message';

const dialogs: Array<IDialogItem> = dialogsJSON;
const messages: Array<TMessage> = messagesJSON;

export const Home: React.FC<null> = () => {
    return (
        <div className='home'>
            <NewDialog className = 'home--new-dialog-grid-position home--background-header '/>
            <div className = 'home--status-companion-grid-position home--background-header'></div>
            <Dialogs className='home--dialogs-grid-position home--background' items={dialogs}/>
            <Messages className='home--messages-grid-position home--background' items={messages}/>
            <div className='home--new-message-grid-position home--background'></div>
        </div>
    )
}