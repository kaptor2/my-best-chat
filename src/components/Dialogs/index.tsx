import React from 'react';

import './index.scss';
import { IDialogItem, DialogItem } from '../DialogItem';

type TDialogs = {
    items: Array<IDialogItem>
}

export const Dialogs: React.FC<TDialogs> = ({ items }) => {

    const dialogs = [...items].sort((d1, d2) => {
        return Date.parse(d2.created_at) - Date.parse(d1.created_at);
    });

    return (
        <div className='dialogs'>
            { dialogs.map(item => <DialogItem key={item.user._id} {...item} />) }
        </div>
    )
}