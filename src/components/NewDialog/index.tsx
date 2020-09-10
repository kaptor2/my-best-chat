import React from 'react';
import classeNames from 'classnames';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';
import './index.scss';

type TNewDialog = {
    className?: string
}

export const NewDialog: React.FC<TNewDialog> = ({ className }) => {
    return (
        <div className={classeNames('new-dialog', className)}>
            <div className = 'new-dialog__container'>
                <TeamOutlined className='new-dialog--size'/>
                <span className='new-dialog__container--span new-dialog--size'>Список диалогов</span>
            </div>
            <FormOutlined className='new-dialog__show_users'/>
        </div>
    )
}