import React from 'react';
import classNames from 'classnames';

import './CardBlock.scss';

type TCardBlock = {
    children?: any
}

export const CardBlock = ({ children }: TCardBlock) => {
    const classes = classNames([
        'card-block'
    ]);

    return (
    <div className={classes}>{children}</div>
    )
}