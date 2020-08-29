import React from 'react';
import classNames from 'classnames';

import './index.scss';

type TPopapHeader = {
    title?: string,
    text?: string
}

export const PopapHeader = ({ title, text }: TPopapHeader) => {
    const classes = classNames([
        'popap-header'
    ]);

    return (
        <div className={classes}>
            <h2>{title}</h2>
            <span>{text}</span>
        </div>
    )
}