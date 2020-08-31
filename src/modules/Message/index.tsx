import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { Status, MyDate, SubDocuments } from './components';

type TMessage = {
    ava?: string,
    text: string,
    date: string,
    isMe?: boolean,
    isReed?: boolean,
    docs?: string[]
}

export const Message = ({ ava, text, date, isMe, isReed, docs=[] }: TMessage) => {

    const classes = classNames([
        'message',
        { 'message--isMe': isMe }])

    return (
        <div className={classes}>
            <div className='message__avatar'>
                <div>
                    <img alt='Аватарка' src={ava}></img>
                </div>
            </div>
            <div className="message__content">
                {text && <p className='message--befor'>{text}</p>}
                <SubDocuments docs={docs} />
                <MyDate myDate={date} />
            </div>
            <Status isReed={isReed} />
            
        </div>
    )
}