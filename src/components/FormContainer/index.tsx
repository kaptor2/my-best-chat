import React from 'react';

import './index.scss';
import { PopapHeader } from '..';

type TForm = {
    children: any[] | any,
    title?: string,
    text?: string,
    onSubmit: any
}

export const FormContainer: React.FC<TForm> = ({ children, title, text, onSubmit }) => (
    <>
        {title && text && <PopapHeader title={title} text={text} />}
        <form onSubmit={onSubmit} className='form'>
            {children}
        </form>
    </>
)
