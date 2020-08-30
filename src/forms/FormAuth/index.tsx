import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../components/index';
import { Form } from '../Form';
import { NavLink } from 'react-router-dom';
import { routing } from '../../constants';

export const FormAuth = () => {
    const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

    const onSubmit = (data: any) => alert(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} title='Войти в аккаунт' text='Для входа, Вам необходимо заполнить email и пароль'>
            <Input
                placeholder='Почтовый адрес'
                name="email"
                type='email'
                ok={errors.email}
                myRef={register({ required: true, min: 5, pattern: /.*@.*\..+/i })} />
            <Input
                placeholder='Пароль'
                name="password"
                type='password'
                ok={errors.password}
                myRef={register({
                    required: true, min: 9,
                    pattern: {
                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/i , 
                        message: "Пароль должен содержать не менее 8 символов, состоять из латинских букв и цифр"}
                })}
            />
            <Button>Войти в аккаунт</Button>
            <NavLink to={`/${routing[routing.registration]}`}>Зарегистрироваться</NavLink>
        </Form>
    )
}
