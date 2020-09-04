import React, { useRef, useEffect } from 'react';
import { format } from 'date-fns';

import './index.scss';
import { AudioWave } from '..';
import { CaretRightOutlined } from '@ant-design/icons';

type TAudio = {
    _id: string
}

export const Audio = ({ _id }: TAudio) => {

    const waveRef = useRef<SVGLinearGradientElement>(null);

    const hanleClick = () => {
        waveRef.current && waveRef.current.setAttribute("x2","50%")
    }


    return (
        <div className='audio' onClick={ hanleClick }>
            <div className="audio__container">
                <CaretRightOutlined style={{ fontSize: "1.5rem" }} className='audio__button'/>
                <AudioWave animRef={waveRef} tones={arr} />
                <span>{format(new Date(), 'HH:mm')}</span>
            </div>
        </div>
    )
}

// TODO: tests
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
    , 0]