import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import { AudioWave } from 'components';
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

export const AudioMessage: React.FC<TAudioMessage> = ({ _id, audio: { tones, url, duration } }) => {

    const waveRef = useRef<SVGSVGElement>(null);
    const timeRef = useRef<HTMLSpanElement>(null);
    const audioObj = useRef<HTMLAudioElement>(new Audio());
    const [play, setPlay] = useState<boolean>(false);

    const onPlayMessage = () => {
        setPlay(!play);
    }

    useEffect(() => {
        if (play) {
            audioObj.current.play();
            audioObj.current &&
                loop({
                    audioObj,
                    waveRef,
                    timeRef,
                    duration,
                    setPlay
                });
        } else {
            audioObj.current.pause();
        }
    }, [play, duration])

    useEffect(() => {
        const removeAudioObj = audioObj.current;
        removeAudioObj.preload = 'none';
        removeAudioObj.src = url;
        return () => {
            removeAudioObj.pause();
            removeAudioObj.src = '';
        }
    }, [url])

    const onRewind = (e: React.MouseEvent) => {
        audioObj.current.readyState && rewind(e, waveRef, audioObj, timeRef);
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