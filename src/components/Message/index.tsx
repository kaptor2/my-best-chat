import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import './index.scss';

type TMessage = {
    ava?: string,
    text: string,
    date: string
}

export const Message = ({ ava, text, date }: TMessage) => {

    return (
        <div className='message'>
            <div className='message__avatar'>
                <div>
                    <img src={ava}></img>
                </div>
            </div>
            <div className="message__bubble">
                <p>{text}</p>
                <span>{formatDistanceToNow(Date.parse(date), {addSuffix: true, locale: ru})}</span>
            </div>
        </div>
    )
}