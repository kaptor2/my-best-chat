import React from 'react';

import './index.scss';
import { PopapHeader } from '../../components';

type TForm = {
    children: any[] | any,
    title?: string,
    text?: string,
    onSubmit: any
}

export const Form = ({ children, title, text, onSubmit }: TForm) => {
    return (
        <>
            {title && text && <PopapHeader title={title} text={text} />}
            <form onSubmit={onSubmit}className='form'>
                {children}
            </form>
        </>
    )
}