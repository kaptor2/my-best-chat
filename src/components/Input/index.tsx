import React from 'react';
import classNames from 'classnames';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

import './index.scss';

type TInput = {
    ok?: boolean,
    placeholder?: string,
    type: 'password' | 'text' | 'email'
}

export const Input = ({ ok = false, placeholder = "placeholder", type }: TInput) => {
    const classes = classNames([
        'input__view',
        { 'input--ok': ok === true },
        { 'input--error': ok !== true },
    ]);

    return (
        <div className="input">
            <div>
                <div className='input__container'>
                    <input
                        className={classes}
                        placeholder={placeholder}
                        type={type}>
                    </input>
                    {
                        ok ? <CheckCircleTwoTone twoToneColor='#13e937' />
                            : <CloseCircleTwoTone twoToneColor='#F44336' />
                    }
                </div>
            </div>
            <p>{!ok && 'Какая-то ошибка'}</p>
        </div>
    )
}