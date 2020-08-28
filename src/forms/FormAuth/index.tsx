import React from 'react';

import './index.scss';
import { Button, Input } from '../../components/index';

export const FormAuth = () => {

    return (
        <form className='form-auth'>
            <Input placeholder='Логин' type='text' />
            <Input placeholder='Пароль' type='password' />
            <Button type='primary' size="large" textTransform='uppercase'>Войти в аккаунт</Button>
            <a>Зарегистрироваться</a>
        </form>
    )
}