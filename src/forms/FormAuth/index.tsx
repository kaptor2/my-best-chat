import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'components/index';
import { FormContainer } from 'components/FormContainer';
import { NavLink } from 'react-router-dom';
import { validators } from 'forms/validators';
import { fetchAuth } from 'redux/actions/authRegActions'
import { useDispatch } from 'react-redux';
import './index.scss';

type TFormState = {
    email: string,
    password: string
}

type TFormAuth = {
    message: string
}

export const FormAuth: React.FC<TFormAuth> = ({ message }) => {

    const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
    const [state, setState] = useState<TFormState>();
    const dispatch = useDispatch();

    useEffect(() => {
        state && state.email && state.password && fetchAuth(dispatch, state);
    }, [state, dispatch])

    const onSubmit = (data: any) => {
        setState({
            email: data.email,
            password: data.password
        })
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}
            title='Войти в аккаунт'
            text='Для входа, Вам необходимо заполнить email и пароль'>

            <div className='error-text'>{message}</div>
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
            <NavLink to={`/registration`}>Зарегистрироваться</NavLink>
        </FormContainer>
    )
}
