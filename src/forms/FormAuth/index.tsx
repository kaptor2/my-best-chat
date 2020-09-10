import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../components/index';
import { FormContainer } from '../../components/FormContainer';
import { NavLink } from 'react-router-dom';
import { routing } from '../../constants';
import { validators } from '../validators';

export const FormAuth: React.FC<any> = () => {
    const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

    const onSubmit = (data: any) => alert(data);

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} title='Войти в аккаунт' text='Для входа, Вам необходимо заполнить email и пароль'>
            <Input
                placeholder='Почтовый адрес'
                name="email"
                type='email'
                ok={errors.email}
                myRef={register(validators('email'))} />
            <Input
                placeholder='Пароль'
                name="password"
                type='password'
                ok={errors.password}
                myRef={register(validators('password'))}
            />
            <Button>Войти в аккаунт</Button>
            <NavLink to={`/${routing[routing.registration]}`}>Зарегистрироваться</NavLink>
        </FormContainer>
    )
}
