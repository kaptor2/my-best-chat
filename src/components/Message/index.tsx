import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { Status, MyDate, SubDocuments, AudioMessage } from '..';
import { Avatar } from '../Avatar';

type TMessage = {
    _id: string
    ava?: string,
    fullName: string,
    text: string,
    date: string,
    isMe?: boolean,
    notReed?: boolean,
    docs?: string[]
}

export const Message = ({ 
    _id,
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
                <AudioMessage _id={_id} audio={{tones: arr, url:'http://raw.githubusercontent.com/kaptor2/my-best-chat/frontend/src/assets/iphone_6-30.mp3'}}  />
                {text && <p className='message--befor'>{text}</p>}
                <SubDocuments docs={docs} />
                <MyDate myDate={date} />
            </div>
            <Status notReed={notReed} className='message--status' />

        </div>
    )
}

const arr: number[] = [0
    , 0
    , 0
    , 0
    , 0
    , 0
    , 0
    , 50
    , 46
    , 41
    , 36
    , 32
    , 27
    , 32
    , 38
    , 33
    , 34
    , 28
    , 26
    , 61
    , 72
    , 85
    , 84
    , 77
    , 88
    , 85
    , 60
    , 79
    , 36
    , 20
    , 0
    , 0
    , 0
    , 0]