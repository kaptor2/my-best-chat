import React from 'react';
import classNames from 'classnames';

import { Button as AntdButton } from 'antd';

import './index.scss';

type TButton = {
    className?: string,
    children: string,
    type?: "text" | "link" | "ghost" | "default" | "primary" | "dashed",
    size?: "large" | undefined,
    textTransform?: "uppercase"
}

export const Button = ({ children, className, type, size, textTransform }: TButton) => {
    const classes = classNames([
        'button', 
        className, 
        {"button--large": size === 'large'},
        {"button--uppercase": textTransform === 'uppercase'}
    ]);

    return (
        <AntdButton type={type} className={classes}>{children}</AntdButton>
    )
}
