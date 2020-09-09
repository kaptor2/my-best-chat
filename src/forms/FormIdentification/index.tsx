import React from 'react';
import classNames from 'classnames';
import { ExclamationCircleTwoTone } from '@ant-design/icons';

import './index.scss';

export const FormIdentification: React.FC<null> = () => {
    const classes = classNames([
        'form-identification'
    ]);

    return (
        <div className={classes}>
            <ExclamationCircleTwoTone style={{ fontSize: '50px' }} />
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с одноразовым кодом, введите его в это поле.</p>
        </div>
    )
}