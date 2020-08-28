import React from 'react';

import { CardBlock, PopapHeader } from '../../components';

import './index.scss';
import { FormAuth } from '../../forms';

export const Auth = () => {

    return (
        <section className='auth'>
            <div className='auth__container'>
                <PopapHeader title='Войти в аккаунт' text='Пожалуста, войдите в аккаунт' />
                <CardBlock>
                    <FormAuth />
                </CardBlock>
            </div>
        </section>
    )
}