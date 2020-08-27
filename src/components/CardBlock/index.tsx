import React from 'react';
import classNames from 'classnames';

import './CardBlock.scss';

type TCardBlock = {

}

export const CardBlock = ({}: TCardBlock) => {
    const classes = classNames([
        'card-block'
    ]);

    return (
        <div className={classes}></div>
    )
}