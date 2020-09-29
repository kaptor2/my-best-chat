import React from 'react';

import { CardBlock } from 'components';

import './index.scss';
import { FormAuth } from 'forms';
import { useSelector } from 'react-redux';
import { TState } from 'redux/TState';
import { Redirect } from 'react-router-dom';

export const Auth: React.FC<null> = () => {

    const stateAth = useSelector((store: TState) => store.authReducer)
    if (stateAth.status)
        return <Redirect to={`/`} />

    return (
        <section className='auth'>
            <div className='auth__container'>
                <CardBlock>
                    <FormAuth message={stateAth.message}/>
                </CardBlock>
            </div>
        </section>
    )
}