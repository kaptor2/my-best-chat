import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';
import { DialogItem } from '../../components/DialogItem';
import { TDialogState } from '../../redux/reducers/dialogs';
import { IDialog } from '../../types/IDialog';
import { dialogsActions } from '../../redux/actions';

type TDialogs = {
    className: string
}

export const Dialogs: React.FC<TDialogs>  = ({ className }) => {

    const items = useSelector<TDialogState, IDialog[]>(state => state.dialogs);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('');
    
    useEffect(()=>{
        dialogsActions.fetchDialogs(dispatch);
    },[dispatch])

    const dialogs = items.length && items
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
            <div className='dialogs__input-items'>
                {dialogs && dialogs.map(item => <DialogItem key={item._id} {...item} />)}
            </div>
        </div>
    )
}