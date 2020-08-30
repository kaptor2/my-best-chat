import React from 'react';
import classNames from 'classnames';

import './index.scss';

type TButton = {
    className?: string,
    children: string,
    size?: "large" | undefined,
    textTransform?: "uppercase",
    type?: "submit",
    onClick?: () => {}
}

export const Button = ({ children, className, type, size, textTransform }: TButton) => {
    const classes = classNames([
        'button', 
        'btn btn-primary',
        className, 
        {"button--large": size === 'large'},
        {"button--uppercase": textTransform === 'uppercase'}
    ]);

    return (
        <button type={type} className={classes}>{children}</button>
    )
}
