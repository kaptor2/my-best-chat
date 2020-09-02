import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { Status, MyDate, SubDocuments } from '..';
import { Avatar } from '../Avatar';

type TMessage = {
    ava?: string,
    fullName: string,
    text: string,
    date: string,
    isMe?: boolean,
    notReed?: boolean,
    docs?: string[]
}

export const Message = ({ 
    fullName,
    ava,
    text,
    date,
    isMe,
    notReed,
    docs = [] }: TMessage) => {

    const classes = classNames([
        'message',
        { 'message--isMe': isMe }])

    return (
        <div className={classes}>
            <div className='message__avatar'>
                <div>
                    <Avatar fullName={fullName} src={ava}/>
                </div>
            </div>
            <div className="message__content">
                {text && <p className='message--befor'>{text}</p>}
                <SubDocuments docs={docs} />
                <MyDate myDate={date} />
            </div>
            <Status notReed={notReed} className='message--status' />

        </div>
    )
}