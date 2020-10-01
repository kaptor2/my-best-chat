import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import './index.scss';
import { Button, Input } from 'components/index';
import { FormContainer } from 'components/FormContainer';
import { useForm } from 'react-hook-form';
import { validators } from 'forms/validators';
import { useDispatch } from 'react-redux';
import { fetchRegis } from 'redux/actions/authRegActions';

type TFormState = {
    email: string,
    password: string,
    fullName: string
}

export const FormReg: React.FC = () => {

    const { register, handleSubmit, errors, watch } = useForm({ mode: 'all' });
    const [state, setState] = useState<TFormState>();
    const dispatch = useDispatch();

    useEffect(() => {
        state?.fullName && state.email && state.password && fetchRegis(dispatch, state);

    }, [state, dispatch])

    const onSubmit = (data: any) => {
        setState({
            email: data.email,
            password: data.password,
            fullName: data.name
        })
    }

    if (state?.fullName && state.email && state.password)
        return <Redirect to='/authorization' />

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
            <NavLink to={`/authorization`}>Воти в аккаунт</NavLink>
        </FormContainer>
    )
}