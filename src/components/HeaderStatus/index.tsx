import React from 'react';
import classeNames from 'classnames';
import './index.scss';
import { useSelector } from 'react-redux';
import { TState } from '../../redux/TState';
import { Loader } from '../Loader';

type THeaderStatus = {
    className?: string
}

export const HeaderStatus: React.FC<THeaderStatus> = ({ className }) => {

    type TStateToProp = { name: string, isLoading: boolean };
    const { name, isLoading } = useSelector<TState, TStateToProp>((state) => {
        return {
            name: state.messages.items[0] ? state.messages.items[0].user.fullName : "",
            isLoading: state.dialogs.isLoading
        }
    })

    if (isLoading) return <Loader />
    if (!name) return null

    return (
        <div className={classeNames('header-status', className)}>
            <div className='header-status__container'>
                <p className='header-status__full-name'> {name} </p>
                <p className={classeNames('header-status__marker', {
                    "header-status--online": false,
                    "header-status--offline": true,
                })}> онлайн </p>
            </div>
            <div className="header-status__buttons">

            </div>
        </div>
    )
}