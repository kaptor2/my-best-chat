import React from 'react';
import classNames from 'classnames';

import './index.scss';
import {
    Status,
    MyDate,
    SubDocuments,
    AudioMessage,
    Avatar
} from 'components';

export const Message: React.FC<reduxTypes.TMessage> = ({
    isMe, date, notReed,
    user: {
        fullName,
        ava },
    audio, text, documents}) => {


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
                {text && <p className='message--befor' dangerouslySetInnerHTML={{ __html: text }}></p>}
                {documents && <SubDocuments docs={documents} />}
                <MyDate myDate={date} />
            </div>
            <Status notReed={notReed} className='message--status' />

        </div>
    )
}