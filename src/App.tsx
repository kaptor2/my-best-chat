import React from 'react';
import { Auth, Regis, Home } from './pages';
import { Route } from 'react-router-dom';

export const App: React.FC<any> = () => {

    return (
        <div className='app'>
            <Route exact
                component={Auth}
                path={`/authorization`} />
            <Route exact
                component={Regis}
                path={`/registration`} />
            <Route exact
                component={Home}
                path={`/`} />
        </div>
    )
}