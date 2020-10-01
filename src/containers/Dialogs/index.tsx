import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DropboxOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';
import { DialogItem } from 'components/DialogItem';
import { fetchDialogs, selectDialog } from 'redux/actions/dialogsActions';
import { Loader } from 'components';

type TDialogs = {
    className: string
}

export const Dialogs: React.FC<TDialogs> = ({ className }) => {

    const stateDialogs = useSelector<reduxTypes.TStore, 
        reduxTypes.TDialogState>(store => store.dialogs);
        
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        fetchDialogs(dispatch);
    }, [dispatch])

    const dialogs = stateDialogs.items.length && stateDialogs.items
        .filter((item) => {
            return filter
                ? item.user.fullname.toUpperCase().indexOf(filter) + 1
                : item
        })
    const onFilter = (e: React.FormEvent<HTMLInputElement>) =>
        setFilter(e.currentTarget.value.toUpperCase());

    const onSelectDialog = (id: string, fullName: string) => {
        dispatch(selectDialog(id, fullName));
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
                {stateDialogs.isLoading
                    ? <Loader /> :
                    dialogs && dialogs.length
                        ? dialogs.map(item =>
                            <DialogItem
                                onClick={onSelectDialog}
                                key={item._id}
                                className={classNames({
                                    "dialogs--active": item._id === stateDialogs.currentDialog
                                })}
                                {...item} />)
                        : <ElementNotResult />}
            </div>
        </div>
    )
}