import React from 'react';
import reed from '../../styles/isReed.svg';
import './index.scss';
import classNames from 'classnames';

type TStatus = { notReed?: boolean, className?: string, count_unread?: number }

export const Status = ({ notReed, className, count_unread }: TStatus) => {

    const classes = classNames(['status', className])

    return (
        <div className={classes}>
            {notReed && <img alt='статус' src={reed}></img>}
            {count_unread && <span>{count_unread > 9 ? `9+` : count_unread}</span>}
        </div>
    )
}