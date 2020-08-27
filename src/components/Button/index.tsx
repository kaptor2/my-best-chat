import React from 'react';
import classNames from 'classnames';

import { Button as AntdButton } from 'antd';

import './Button.scss';

type TButton = {
    className?: string,
    children: string,
    type?: "text" | "link" | "ghost" | "default" | "primary" | "dashed" | undefined,
    size?: "large" | undefined
}

export const Button = ({ children, className, type, size }: TButton) => {
    const classes = classNames([
        'button', 
        className, 
        {"button--large": size === 'large'}
    ]);

    return (
        <AntdButton type={type} className={classes}>{children}</AntdButton>
    )
}
