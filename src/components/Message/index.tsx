import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { Status, MyDate, SubDocuments, AudioMessage } from '..';
import { Avatar } from '../Avatar';

type TMessage = {
    _id: string
    ava?: string,
    fullName: string,
    text?: string,
    date: string,
    isMe?: boolean,
    notReed?: boolean,
    docs?: string[],
    audio?: {
        tones: number[],
        url: string,
        duration: number
    }
}

export const Message = ({
    _id,
    fullName,
    ava,
    text,
    date,
    isMe,
    audio,
    notReed,
    docs = [] }: TMessage) => {

    const classes = classNames([
        'message',
        { 'message--isMe': isMe }])

    return (
        <div className={classes}>
            <div className='message__avatar'>
                <div>
                    <Avatar fullName={fullName} src={ava} />
                </div>
            </div>
            <div className="message__content">
                {audio && <AudioMessage _id={_id} audio={audio} />}
                {text && <p className='message--befor'>{text}</p>}
                <SubDocuments docs={docs} />
                <MyDate myDate={date} />
            </div>
            <Status notReed={notReed} className='message--status' />

        </div>
    )
}
