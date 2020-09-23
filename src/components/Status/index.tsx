import React from 'react';
import reed from '../../assets/isReed.svg';
import './index.scss';
import classNames from 'classnames';

type TStatus = { 
    notReed?: boolean, 
    className?: string, 
    count_unread?: number 
}

export const Status: React.FC<TStatus> = ({ notReed, className, count_unread }: TStatus) => (
    <div className={classNames(['status', className])}>
        { notReed ? <img alt='статус' src={reed}></img> : null}
        {count_unread ? <span>{count_unread > 9 ? `9+` : count_unread}</span>: null}
    </div>
)
