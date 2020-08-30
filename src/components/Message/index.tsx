import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import classNames from 'classnames';
import { CheckOutlined } from '@ant-design/icons'

import reed from '../../styles/isReed.svg'

import './index.scss';

type TMessage = {
    ava?: string,
    text: string,
    date: string,
    isMe?: boolean,
    isReed?: boolean
}

export const Message = ({ ava, text, date, isMe, isReed }: TMessage) => {

    const classes = classNames([
        'message',
        { 'message--isMe': isMe }])

    return (
        <div className={classes}>
            <div className='message__avatar'>
                <div>
                    <img src={ava}></img>
                </div>
            </div>
            <div className="message__bubble">
                <p>{text}</p>
                <span>{formatDistanceToNow(Date.parse(date), { addSuffix: true, locale: ru })}</span>
            </div>
            <div className='message__status'>
                {isReed && <img src={reed}></img>}
            </div>    
        </div>
    )
}