import React, { useRef } from 'react';
import { SendOutlined, SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import './index.scss';

type TinputMessage = {
    className?: string,
    scrollContainer: () => void
}

export const InputMessage: React.FC<TinputMessage> = ({ className, scrollContainer }) => {

    const redDivInput = useRef<HTMLDivElement>(null);

    const selectEmoji = (emoji: any) => {
        const emojiString = ` <img 
            alt=${emoji.native} 
            src='https://abs-0.twimg.com/emoji/v2/svg/${('' + emoji.unified).replace(/-.*/, '')}.svg' 
            width='20px' />`;
            const str = redDivInput.current && redDivInput.current.innerHTML.replace(/<br>$/,'');
        
        redDivInput.current && (redDivInput.current.innerHTML = str + ('' + emojiString));
        scrollContainer();
    }

    const onSubmit = () => {
        redDivInput.current?.innerHTML.replace(/<br>/gm, '') &&
            alert(redDivInput.current?.innerHTML);
    }

    const onFixShiftEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        scrollContainer();

        if (redDivInput.current?.innerHTML === '<br>') {
            redDivInput.current && (redDivInput.current.innerHTML = '');
        }

        if (e.key === 'Enter' && !e.shiftKey) {
            e?.preventDefault();
            onSubmit();
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
            <SendOutlined className='input-message__text-send' onClick={onSubmit} />
            <div className='input-message__form'>
                <div className="input-message__input-container">
                    <div
                        ref={redDivInput}
                        contentEditable
                        placeholder='Введите сообщение'
                        className='input-message__input'
                        onKeyDown = {onFixShiftEnterPress} />
                </div>
            </div>
        </div>
    )
}