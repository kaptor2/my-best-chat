import React from 'react';
import './Home.scss';
import { Dialogs, Messages } from '../../containers/index'
import { 
    NewDialog, 
    HeaderStatus, 
    InputMessage } from '../../components';

export const Home: React.FC = () => {
    return (
        <div className='home'>
            <NewDialog className = 'home--new-dialog-grid-position home--background-header '/>
            <HeaderStatus className = 'home--status-companion-grid-position home--background-header' />
            <Dialogs className='home--dialogs-grid-position home--background'/>
            <Messages className='home--messages-grid-position home--background'/>
            <InputMessage className='home--new-message-grid-position home--background' />
        </div>
    )
}