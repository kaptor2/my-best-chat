import React, { useRef, useEffect } from 'react';
import { format } from 'date-fns';

import './index.scss';
import { AudioWave } from '..';
import { CaretRightOutlined } from '@ant-design/icons';

type TAudioMessage = {
    _id: string,
    audio: {
        tones: number[],
        url: string
    }
}

export const AudioMessage = ({ _id, audio: { tones, url } }: TAudioMessage) => {

    const waveRef = useRef<SVGLinearGradientElement>(null);

    let audioObj: HTMLAudioElement;
    let context: AudioContext;
    let analyser: AnalyserNode;
    let mediaElement: MediaElementAudioSourceNode;

    const onPlayMessage = async () => {
        audioObj || inicializationAudio();
        if (audioObj.paused) {
            audioObj.play();
            loop();
        } else {
            audioObj.pause()
        }
    }

    // Time animation (useRef)
    const loop = () => {
        !audioObj.paused &&
            window.requestAnimationFrame(loop);
        const tones = new Uint8Array(1);
        analyser.getByteFrequencyData(tones);
        console.log(tones[0]);
    }

    // connect WEB Audio API
    const inicializationAudio = () => {
        audioObj = new Audio(url);
        audioObj.crossOrigin = "anonymous";
        context = new AudioContext();
        analyser = context.createAnalyser();
        mediaElement = context.createMediaElementSource(audioObj);
        mediaElement.connect(analyser);
        analyser.getByteFrequencyData(new Uint8Array(1))
        analyser.connect(context.destination);
    }

    return (
        <div className='audio-message' onClick={onPlayMessage}>
            <div className="audio-message__container">
                <CaretRightOutlined style={{ fontSize: "1.5rem" }} className='audio-message__button' />
                <AudioWave _id={_id} animRef={waveRef} tones={tones} />
                <span>{format(new Date(), 'HH:mm')}</span>
            </div>
        </div>
    )
}

/* TODO: tests
const arr: number[] = [0
    , 0
    , 0
    , 0
    , 0
    , 0
    , 0
    , 50
    , 46
    , 41
    , 36
    , 32
    , 27
    , 32
    , 38
    , 33
    , 34
    , 28
    , 26
    , 61
    , 72
    , 85
    , 84
    , 77
    , 88
    , 85
    , 60
    , 79
    , 36
    , 20
    , 0
    , 0
    , 0
    , 0]*/