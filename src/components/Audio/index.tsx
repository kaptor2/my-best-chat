import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { AudioWave } from '..';

type TAudio = {
    _id: string
}

export const Audio = ({ _id }: TAudio) => {
    const classes = classNames([
        'audio'
    ]);

    return (
        <div className={classes}>
            <AudioWave _id={_id} tones={arr} />
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