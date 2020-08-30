import React from 'react';
import classNames from 'classnames';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

import './index.scss';
import { FieldErrors } from 'react-hook-form';

type TInput = {
    ok: FieldErrors,
    placeholder?: string,
    type: 'password' | 'text' | 'email' | 'stillpassword',
    name: string,
    myRef: any
}

export const Input = ({ ok, placeholder, type, name, myRef }: TInput) => {
    const classes = classNames([
        'input__view',
        { 'input--ok': !ok},
        { 'input--error': ok},
    ]);
    console.log(ok);

    return (
        <div className="input">
            <div>
                <div className='input__container'>
                    <input
                        className={classes}
                        placeholder={placeholder}
                        type={type}
                        name={name}
                        ref={myRef}/>
                    {
                        !ok ? <CheckCircleTwoTone twoToneColor='#13e937' />
                            : <CloseCircleTwoTone twoToneColor='#F44336' />
                    }
                </div>
            </div>
            {ok && type === 'email' && <p> {ok.ref.validationMessage} </p>}
            {ok && type !== 'email' && type !== 'stillpassword' && <p> {ok.message} </p>}
            {ok && name === 'stillpassword' && <p> {'Пароли не совпадают'} </p>}
        </div>
    )
}