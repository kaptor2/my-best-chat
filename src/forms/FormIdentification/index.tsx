import React from 'react';
import classNames from 'classnames';
import { ExclamationCircleTwoTone } from '@ant-design/icons';

import './index.scss';
import { Input } from '../../components';

type TFormIdentification = {
    
}

export const FormIdentification = ({}: TFormIdentification) => {
    const classes = classNames([
        'form-identification'
    ]);

    return (
        <div className={classes}>
            <ExclamationCircleTwoTone style={{ fontSize: '50px' }} />
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с одноразовым кодом, введите его в это поле.</p>
            <Input type='text' placeholder='Введите код' ></Input>
        </div>
    )
}