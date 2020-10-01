import React from 'react';
import classeNames from 'classnames';
import { useSelector } from 'react-redux';

import './index.scss';

type THeaderStatus = {
    className?: string
}

export const HeaderStatus: React.FC<THeaderStatus> = ({ className }) => {

    const fullName = useSelector<reduxTypes.TStore,
        string>((state) => state.dialogs.fullName)

    if (!fullName) return null

    return (
        <div className={classeNames('header-status', className)}>
            <div className='header-status__container'>
                <p className='header-status__full-name'> {fullName} </p>
                <p className={classeNames('header-status__marker', {
                    "header-status--online": false,
                    "header-status--offline": true,
                })}> онлайн </p>
            </div>
            <div className="header-status__buttons"></div>
        </div>
    )
}