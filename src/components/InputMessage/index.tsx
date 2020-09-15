import React, { useState } from 'react';
import { SendOutlined, SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { EmojiData, Emoji, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import './index.scss';

type TinputMessage = {
    className?: string
}

export const InputMessage: React.FC<TinputMessage> = ({ className }) => {

    const [input, setInput] = useState({ __html: '<span>hello</span>' });

    const toggleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ __html: e.target.value })
    }

    const selectEmoji = (emoji: any) => {
        
        const emojiString = Emoji({
            html: true,
            set: 'twitter',
            emoji: emoji.id,
            size: 21
        })
        setInput({ __html: input.__html + (''+emojiString) })
    }

    return (
        <div className={classnames('input-message', className)}>
            <form className='input-message__form'>
                <div className="input-message__input-container">
                    <div contentEditable={true} onChange={toggleInput} placeholder='Введите сообщение' className='input-message__input'
                        dangerouslySetInnerHTML={input}/>
                </div>
                <SendOutlined className='input-message__text-send' />
            </form>
            <SmileOutlined className='input-message__emoji' />
            <div className='input-message__emoji-picker'>
                <Picker onSelect={selectEmoji} set='twitter' showPreview={true} />
            </div>
            <PaperClipOutlined className='input-message__document' />
            <AudioOutlined className='input-message__audiosend' />
        </div>
    )
}