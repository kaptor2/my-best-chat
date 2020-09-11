import React from 'react';
import { SendOutlined, SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import classnames from 'classnames'

import './index.scss';

type TinputMessage = {
    className?: string
}

export const InputMessage: React.FC<TinputMessage> = ({ className }) => {
    return (
        <div className= {classnames('input-message', className)}>
            <form className='input-message__form'>
                <input placeholder='Введите сообщение' className='input-message__input'/>
                <SendOutlined className='input-message__text-send'/>
            </form>
            <SmileOutlined className='input-message__emoji'/>
            <PaperClipOutlined className='input-message__document'/>
            <AudioOutlined className='input-message__audiosend'/>
        </div>
    )
}