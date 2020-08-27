import React from 'react';

import { Button, CardBlock } from '../../components';

import './index.scss';

export const Auth = () => {

    return (
        <section className='auth'>
            <div className='auth__container'>
                <CardBlock>
                    <Button type='primary' size="large" textTransform="uppercase">Войти в аккаунт</Button>
                </CardBlock>
            </div>
        </section>
    )
}