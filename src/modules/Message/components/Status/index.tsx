import React from 'react';
import reed from '../../../../styles/isReed.svg'
import './index.scss';

type TStatus = { isReed?: boolean }

export const Status = ({ isReed }: TStatus) => {

    if (isReed) return null;

    return (
        <div className='message--status'>
            <img alt='статус' src={reed}></img>
        </div>
    )
}