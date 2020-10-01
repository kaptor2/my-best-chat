import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { CardBlock } from 'components';
import { FormAuth } from 'forms';
import './index.scss';

export const Auth: React.FC = () => {

    const stateAth = useSelector<reduxTypes.TStore,
        reduxTypes.TAuthState>((store) => store.authReducer)
    if (stateAth.status === 200)
        return <Redirect to={`/`} />

    return (
        <section className='auth'>
            <div className='auth__container'>
                <CardBlock>
                    <FormAuth message={stateAth.message} />
                </CardBlock>
            </div>
        </section>
    )
}