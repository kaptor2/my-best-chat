import React, { useRef, useState, useEffect } from 'react';
import { format, addSeconds } from 'date-fns';
import classNames from 'classnames';

import './index.scss';
import { AudioWave } from '..';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

type TAudioMessage = {
    _id: string,
    audio: {
        tones: number[],
        url: string,
        duration: number
    }
}

export const AudioMessage = ({ _id, audio: { tones, url, duration } }: TAudioMessage) => {

    const waveRef = useRef<SVGLinearGradientElement>(null);
    const timeRef = useRef<HTMLSpanElement>(null);
    const [audioObj, setAudioObj] = useState<HTMLAudioElement>();
    const [play, setPlay] = useState(false);

    const onPlayMessage = () => {
        audioObj || setAudioObj(new Audio(url));
        setPlay(!play);
    }

    useEffect(() => {
        const loop = () => {
            !audioObj?.paused &&
                window.requestAnimationFrame(loop);
            const anim = audioObj && (audioObj.currentTime / audioObj.duration) * 100;
    
            switch (anim) {
                case 100: {
                    waveRef.current?.setAttribute("x2", `0%`);
                    setPlay(false);
                    timeRef.current && (timeRef.current.innerText = formattedTime(duration).toString());
                    break
                }
                default: {
                    waveRef.current?.setAttribute("x2", `${isNaN(Number(anim)) ? 0 : anim}%`);
                    if (audioObj && timeRef.current?.innerText !== formattedTime(audioObj.currentTime).toString())
                        timeRef.current && (timeRef.current.innerText = formattedTime(audioObj.currentTime).toString());
                }
            }
        }

        if (play) {
            audioObj?.play();
            loop();
        } else {
            audioObj?.pause()
            audioObj && (audioObj.currentTime = 0);
            waveRef.current?.setAttribute("x2", `0%`);
            timeRef.current && (timeRef.current.innerText = formattedTime(duration).toString());
        }
    }, [play, audioObj, duration])

    // Time animation (useRef)
    const formattedTime = (seconds: number) => {
        var helperDate = addSeconds(new Date(0), seconds);
        return format(helperDate, 'mm:ss');
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
                <AudioWave _id={_id} animRef={waveRef} tones={tones} />
                <span ref={timeRef}>{formattedTime(duration)}</span>
            </div>
        </div>
    )
}