import React from 'react';

import './index.scss';
import { PopapHeader } from '../../components';

type TForm = {
    children: any[] | any,
    title?: string,
    text?: string
}

export const Form = ({ children, title, text }: TForm) => {
    return (
        <>
            {title && text && <PopapHeader title={title} text={text} />}
            <form className='form'>
                {children}
            </form>
        </>
    )
}