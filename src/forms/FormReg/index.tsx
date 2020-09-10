import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';
import { Button, Input } from '../../components/index';
import { FormContainer } from '../../components/FormContainer';
import { routing } from '../../constants';
import { useForm } from 'react-hook-form';
import { validators } from '../validators';

export const FormReg: React.FC<any> = () => {

    const { register, handleSubmit, errors, watch } = useForm({ mode: 'all' });
    const onSubmit = (data: any) => alert(data);

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} 
            title='Регистрация' 
            text='Для входа в чат, вам нужно зарегистрироваться'>
            <Input ok={errors.email}
                type="email"
                placeholder="Введите email"
                name="email"
                myRef={register(validators('email'))} />
            <Input
                ok={errors.name}
                type="text"
                placeholder="Введите имя"
                name="name"
                myRef={register(validators('name'))} />
            <Input
                ok={errors.password}
                type="password"
                placeholder="Введите пароль"
                name="password"
                myRef={register(validators('password'))} />
            <Input
                ok={errors.stillpassword}
                type="password"
                placeholder="Повторите пароль"
                name="stillpassword"
                myRef={register({ validate: (value) => value === watch('password') })} />
            <Button>Зарегистрироваться</Button>
            <NavLink to={`/${routing[routing.authorization]}`}>Воти в аккаунт</NavLink>
        </FormContainer>
        
    )
}