import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Home.scss';
import { Dialogs, Messages } from 'containers/index'
import { NewDialog, HeaderStatus, Loader } from 'components';
import { checkAuth } from 'redux/actions/authRegActions';

export const Home: React.FC = () => {

    const stateAth = useSelector<reduxTypes.TStore, number>((store) => store.authReducer.status)

    const dispatch = useDispatch();

    useEffect(()=>{
        stateAth ||
            checkAuth(dispatch)
    })

    if (!stateAth)
        return <Loader/>
    
    if (stateAth !== 200)
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