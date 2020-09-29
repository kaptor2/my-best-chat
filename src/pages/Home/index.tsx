import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Home.scss';
import { Dialogs, Messages } from 'containers/index'
import { NewDialog, HeaderStatus } from 'components';
import { TState } from 'redux/TState';

export const Home: React.FC = () => {

    const stateAth = useSelector((store: TState) => store.authReducer.status)
    if (!stateAth)
        return <Redirect to={`authorization`} />

    return (
        <div className='home'>
            <NewDialog className = 'home--new-dialog-grid-position home--background-header '/>
            <HeaderStatus className = 'home--status-companion-grid-position home--background-header' />
            <Dialogs className='home--dialogs-grid-position home--background'/>
            <Messages className='home--messages-grid-position home--background'/>
        </div>
    )
}