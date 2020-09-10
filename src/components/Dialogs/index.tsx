import React, { useState } from 'react';
import classNames from 'classnames';

import './index.scss';
import { IDialogItem, DialogItem } from '../DialogItem';
import { SearchOutlined } from '@ant-design/icons';

type TDialogs = {
    items: Array<IDialogItem>
    className: string
}

export const Dialogs: React.FC<TDialogs> = ({ items, className }) => {

    const [filter, setFilter] = useState<string>('');

    const dialogs = items
        .filter((item) => {
            return filter
                ? item.user.fullname.toUpperCase().indexOf(filter) + 1
                : item
        }).sort((d1, d2) => {
            return Date.parse(d2.created_at) - Date.parse(d1.created_at);
        });

    const onFilter = (e: React.FormEvent<HTMLInputElement>) =>
        setFilter(e.currentTarget.value.toUpperCase())

    return (
        <div className={classNames('dialogs', className)}>
            <div className='dialogs__input-container'>
                <input placeholder='Поиск среди контактов' onChange={onFilter} />
                <SearchOutlined className='dialogs__icon' />
            </div>
            {dialogs.map(item => <DialogItem key={item.user._id} {...item} />)}
        </div>
    )
}