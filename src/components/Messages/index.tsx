import React from 'react';
import { TMessage, Message } from '../Message';

type TMessages = {
    items: Array<TMessage>
}

export const Messages = ({ items }: TMessages) => {

    const messages = [...items].sort((d1, d2) => {
        return Date.parse(d2.date) - Date.parse(d1.date);
    });

    return (
        <div className='messages'>
            { messages.map(item => <Message key={item._id} {...item} />) }
        </div>
    )
}