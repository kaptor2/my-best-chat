import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { IDialogItem, DialogItem } from '../DialogItem';

type TDialogs = {
    items: Array<IDialogItem>
    className: string
}

export const Dialogs: React.FC<TDialogs> = ({ items, className }) => {

    const dialogs = [...items].sort((d1, d2) => {
        return Date.parse(d2.created_at) - Date.parse(d1.created_at);
    });

    return (
        <div className={classNames('dialogs', className)}>
            { dialogs.map(item => <DialogItem key={item.user._id} {...item} />) }
        </div>
    )
}