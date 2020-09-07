import React from 'react';
import { Auth, Regis, Home } from './pages';
import { Route } from 'react-router-dom';
import { routing } from './constants';

export const App = () => {
    return (
        <div className='app'>
            <Route exact
                component={Auth}
                path={['/',
                    `/${routing[routing.authorization]}`
                ]} />
            <Route exact
                component={Regis}
                path={`/${routing[routing.registration]}`} />
            <Route exact
                component={Home}
                path={`/im`} />
        </div>
    )
}