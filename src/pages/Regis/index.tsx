import React from 'react';

import { CardBlock } from 'components';

import { FormReg } from 'forms';

export const Regis: React.FC = () => {

    return (
        <section className='auth'>
            <div className='auth__container'>
                <CardBlock>
                    <FormReg />
                </CardBlock>
            </div>
        </section>
    )
}