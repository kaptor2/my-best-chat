import React from 'react';

import { CardBlock } from '../../components';

import './index.scss';
import { FormAuth } from '../../forms';

export const Auth: React.FC<null> = () => {

    return (
        <section className='auth'>
            <div className='auth__container'>
                <CardBlock>
                    <FormAuth />
                </CardBlock>
            </div>
        </section>
    )
}