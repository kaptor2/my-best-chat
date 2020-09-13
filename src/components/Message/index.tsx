import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { Status, MyDate, SubDocuments, AudioMessage } from '..';
import { Avatar } from '../Avatar';
import { TMessage } from '../../redux/messages/typesMessage';


export const Message: React.FC<TMessage> = (props) => {

    const {
        isMe,
        date,
        notReed,
        user: {
            fullName,
            ava
        },
        audio,
        text,
        documents
    } = props;

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
                {audio && <AudioMessage _id={audio._id} audio={audio} />}
                {text && <p className='message--befor'>{text}</p>}
                {documents && <SubDocuments docs={documents} />}
                <MyDate myDate={date} />
            </div>
            <Status notReed={notReed} className='message--status' />

        </div>
    )
}