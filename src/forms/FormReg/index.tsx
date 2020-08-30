import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';
import { Button, Input } from '../../components/index';
import { Form } from '../Form';
import { routing } from '../../constants';
import { useForm } from 'react-hook-form';

export const FormReg = () => {

    const { register, handleSubmit, errors, watch } = useForm({ mode: "onBlur" });
    const onSubmit = (data: any) => alert(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} title='Регистрация' text='Для входа в чат, вам нужно зарегистрироваться'>
            <Input ok={errors.email}
                type="email"
                placeholder="email"
                name="email"
                myRef={register({ required: true, min: 5, pattern: /.*@.*\..+/i })} />
            <Input
                ok={errors.Name}
                type="text"
                placeholder="Name"
                name="Name"
                myRef={register({ required: true, min: 1, pattern: /^[a-zA-ZА-Яа-я]+$/i })} />
            <Input
                ok={errors.password}
                type="password"
                placeholder="password"
                name="password"
                myRef={register({
                    required: true, min: 9,
                    pattern: {
                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/i , 
                        message: "Пароль должен содержать не менее 8 символов, состоять из латинских букв и цифр"}
                })} />
            <Input
                ok={errors.stillpassword}
                type="password"
                placeholder="stillpassword"
                name="stillpassword"
                myRef={register({
                    validate: (value) => {
                      return value === watch('password'); // value is from password2 and watch will return value from password1
                    }
                  })} />
            <Button>Зарегистрироваться</Button>
            <NavLink to={`/${routing[routing.autorisation]}`}>Воти в аккаунт</NavLink>
        </Form>

    )
}