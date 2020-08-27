import React from 'react';
import classNames from 'classnames';

import './{{pascalCase name}}.scss';

type T{{pascalCase name}} = {

}

export const {{pascalCase name}} = ({}: T{{pascalCase name}}) => {
    const classes = classNames([
        '{{kebabCase name}}'
    ]);

    return (
        <div className={classes}></div>
    )
}