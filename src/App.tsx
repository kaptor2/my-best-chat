import React from 'react';
import { Auth, Regis, Home } from './pages';
import { routing } from './constants';
import { Route } from 'react-router-dom';

export const App: React.FC<any> = () => {

    return (
        <div className='app'>
            <Route exact
                component={Auth}
                path={`/${routing[routing.authorization]}`} />
            <Route exact
                component={Regis}
                path={`/${routing[routing.registration]}`} />
            <Route exact
                component={Home}
                path={`/`} />
        </div>
    )
}