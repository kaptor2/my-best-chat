import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DropboxOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';
import { DialogItem } from '../../components/DialogItem';
import { TState } from '../../redux/TState';
import { TDialogState } from '../../redux/dialogs/typesDialog'; 
import { dialogsActions } from '../../redux/dialogs/dialogsActions';

type TDialogs = {
    className: string
}

export const Dialogs: React.FC<TDialogs>  = ({ className }) => {

    const stateDialogs = useSelector<TState, TDialogState>(store =>  store.dialogs);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('');

    useEffect(()=>{
        dialogsActions.fetchDialogs(dispatch);
    },[dispatch])

    const dialogs = stateDialogs.items.length && stateDialogs.items
        .filter((item) => {
            return filter
                ? item.user.fullname.toUpperCase().indexOf(filter) + 1
                : item
            }).sort((d1, d2) => {
                return Date.parse(d2.created_at) - Date.parse(d1.created_at);
            });
    const onFilter = (e: React.FormEvent<HTMLInputElement>) =>
        setFilter(e.currentTarget.value.toUpperCase());
    
    const onSelectDialog = (id: string) => {
        dispatch(dialogsActions.selectDialog(id));
    }

    const ElementNotResult: React.FC = () => (
        <div className='dialogs__not-result'>
            <DropboxOutlined />
            <span>Диалоги не найдены</span>
        </div>
    )

    return (
        <div className={classNames('dialogs', className)}>
            <div className='dialogs__input-container'>
                <input placeholder='Поиск среди контактов' onChange={onFilter} />
                <SearchOutlined className='dialogs__icon' />
            </div>
            <div className='dialogs__input-items'>
                {dialogs && dialogs.length 
                    ? dialogs.map(item => 
                    <DialogItem 
                        onClick = {onSelectDialog} 
                        key={item._id} 
                        className = {classNames({
                            "dialogs--active": item._id === stateDialogs.currentDialog
                        })}
                        {...item} />)
                    : <ElementNotResult /> }
            </div>
        </div>
    )
}