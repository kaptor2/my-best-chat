import React from 'react';
import classNames from 'classnames';
import './Home.scss';
import { Dialogs, Messages } from '../../components';
import { IDialogItem } from '../../components/DialogItem';
import dialogsJSON from './dialog_items.json';
import messagesJSON from './messages.json';
import { TMessage } from '../../components/Message';

const dialogs: Array<IDialogItem> = dialogsJSON;
const messages: Array<TMessage> = messagesJSON;

export const Home: React.FC<null> = () => {
    const classes = classNames([
        'home'
    ]);

    return (
        <div className={classes}>
            <Dialogs items={dialogs} />
            <Messages items={messages} />
        </div>
    )
}