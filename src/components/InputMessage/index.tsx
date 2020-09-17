import React, { useRef } from 'react';
import { SendOutlined, SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { onKeyup, onPaste, cleanUp, emojiToHtml } from './test';

import './index.scss';

type TinputMessage = {
    className?: string,
    scrollContainer: () => void
}

export const InputMessage: React.FC<TinputMessage> = ({ className, scrollContainer }) => {

    const redDivInput = useRef<HTMLDivElement>(null);

    const selectEmoji = (emoji: any) => {
        scrollContainer();
        if (redDivInput.current) {
            const str = cleanUp(emoji.native)
            redDivInput.current && (redDivInput.current.innerHTML = redDivInput.current.innerHTML.concat(emojiToHtml(str)));
        }
    }

    const onSubmit = () => {
        redDivInput.current?.innerHTML.replace(/<br>/gm, '') &&
            alert(redDivInput.current?.innerHTML);
    }

    const onFixShiftEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        scrollContainer();
        redDivInput.current?.innerHTML === '<br>' &&
            redDivInput.current && (redDivInput.current.innerHTML = '');

        if (e.key === 'Enter' && !e.shiftKey) {
            e?.preventDefault();
            onSubmit();
        }
    }

    return (
        <div className={classnames('input-message', className)}>
            <SmileOutlined className='input-message__emoji' />
            <div className='input-message__emoji-picker'>
                <Picker onSelect={selectEmoji} set='apple' showPreview={true} />
            </div>
            <PaperClipOutlined className='input-message__document' />
            <AudioOutlined className='input-message__audiosend' />
            <SendOutlined className='input-message__text-send' onClick={onSubmit} />
            <div className='input-message__form'>
                <div className="input-message__input-container">
                    <div
                        ref={redDivInput}
                        contentEditable
                        onPaste={(e) => { scrollContainer(); return onPaste(e, redDivInput); }}
                        onKeyUp={() => { scrollContainer(); return onKeyup(redDivInput); }}
                        placeholder='Введите сообщение'
                        className='input-message__input'
                        onKeyDown={onFixShiftEnterPress} />
                </div>
            </div>
        </div>
    )
}