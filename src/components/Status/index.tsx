import React from 'react';
import reed from '../../styles/isReed.svg';
import './index.scss';
import classNames from 'classnames';

type TStatus = { isReed?: boolean, className?: string, count_unread?: number }

export const Status = ({ isReed, className, count_unread }: TStatus) => {

    const classes = classNames(['status', className])

    return (
        <div className={classes}>
            {isReed && <img alt='статус' src={reed}></img>}
            {count_unread && <span>{count_unread}</span>}
        </div>
    )
}