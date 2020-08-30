import React from 'react';
import classNames from 'classnames';

import './index.scss';

type TButton = {
    children: string,
    type?: "submit",
    onClick?: () => {}
}

export const Button = ({ children, onClick, type }: TButton) => {
    const classes = classNames([
        'button', 
        'btn btn-primary'
    ]);

    return (
        <button type={type} onClick={onClick} className={classes}>{children}</button>
    )
}