import React from 'react';
import { TMessage, Message } from '../../components/Message';
import classNames from 'classnames';
import './index.scss'

type TMessages = {
    items: Array<TMessage>,
    className: string
}

export const Messages: React.FC<TMessages> = ({ items, className }) => {

    const messages = [...items].sort((d1, d2) => {
        return Date.parse(d2.date) - Date.parse(d1.date);
    });

    return (
        <div className={classNames('messages', className)}>
            { messages.map(item => <Message key={item._id} {...item} />) }
        </div>
    )
}