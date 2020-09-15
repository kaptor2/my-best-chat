import React, { useRef } from 'react';
import { SendOutlined, SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import './index.scss';

type TinputMessage = {
    className?: string
}

export const InputMessage: React.FC<TinputMessage> = ({ className }) => {

    const redDivInput = useRef<HTMLDivElement>(null);

    const selectEmoji = (emoji: any) => {

        const emojiString = `<img 
            alt=${emoji.native} 
            src='https://abs-0.twimg.com/emoji/v2/svg/${(''+emoji.unified).replace(/-.*/, '')}.svg' 
            width='20px'/>`;
        redDivInput.current && (redDivInput.current.innerHTML += ('' + emojiString).replace(/span/g,'img'));
    }

    function press(e: React.KeyboardEvent<HTMLDivElement>) { 
        if (e.key === 'Enter' && !e.shiftKey) { 
            e?.preventDefault();
            alert ('submit')
        } 
    } 

    return (
        <div className={classnames('input-message', className)}>
            <SmileOutlined className='input-message__emoji' />
            <div className='input-message__emoji-picker'>
                <Picker onSelect={selectEmoji} set='twitter' showPreview={true} />
            </div>
            <PaperClipOutlined className='input-message__document' />
            <AudioOutlined className='input-message__audiosend' />
            <SendOutlined className='input-message__text-send' />
            <div className='input-message__form'>
                <div className="input-message__input-container">
                    <div 
                        ref={redDivInput}
                        contentEditable={true} 
                        placeholder='Введите сообщение' 
                        className='input-message__input' 
                        onKeyPress={press}/>
                </div>
            </div>
        </div>
    )
}