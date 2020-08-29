import React from 'react';

import './index.scss';
import { Button, Input } from '../../components/index';
import { Form } from '../Form';
import { NavLink } from 'react-router-dom';
import { routing } from '../../constants';

export const FormAuth = () => {

    return (
        <Form title='Войти в аккаунт' text='Пожалуйста, войдите в аккаунт'>
            <Input placeholder='Логин' type='text' />
            <Input placeholder='Пароль' type='password' />
            <Button type='primary' size="large" textTransform='uppercase'>Войти в аккаунт</Button>
            <NavLink to={ `/${routing[routing.registration]}` }>Зарегистрироваться</NavLink>
        </Form>
    )
}