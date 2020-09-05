import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import { AudioWave } from '..';
import { formattedTime, loop, rewind } from './animation-logic';
import './index.scss';

type TAudioMessage = {
    _id: string,
    audio: {
        tones: number[],
        url: string,
        duration: number
    }
}

export const AudioMessage = ({ _id, audio: { tones, url, duration } }: TAudioMessage) => {

    const waveRef = useRef<SVGSVGElement>(null);
    const timeRef = useRef<HTMLSpanElement>(null);
    const [audioObj, setAudioObj] = useState<HTMLAudioElement>();
    const [play, setPlay] = useState(false);

    const onPlayMessage = () => {
        audioObj || setAudioObj(new Audio(url));
        setPlay(!play);
    }

    useEffect(() => {
        if (play) {
            audioObj?.play();
            audioObj &&
            loop({
                audioObj,
                waveRef,
                timeRef,
                duration,
                setPlay
            });
        } else {
            audioObj?.pause()
        }
    }, [play, audioObj, duration])

    const onRewind = (e: React.MouseEvent) => {
        if (audioObj) rewind(e, waveRef, audioObj, timeRef);
    }

    const classes = classNames(['audio-message', {
        'audio-message--play': play
    }]);

    return (
        <div className={classes} onClick={onPlayMessage}>
            <div className="audio-message__container">
                {!play
                    ? <PlayCircleFilled style={{ fontSize: "1.5rem" }} className='audio-message__button' />
                    : <PauseCircleFilled style={{ fontSize: "1.5rem" }} className='audio-message__button' />}
                <AudioWave onClick={onRewind} _id={_id} animRef={waveRef} tones={tones} />
                <span ref={timeRef}>{formattedTime(duration)}</span>
            </div>
        </div>
    )
}