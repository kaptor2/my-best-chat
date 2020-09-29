import React from 'react';

import './index.scss';
import { MyDate, Status } from '..';
import classNames from 'classnames';
import { Avatar } from 'components/Avatar';
import { TDialog } from 'redux/dialogs/typesDialog'

interface IDialogItem extends TDialog {
    onClick?: (idDialog: string, fullName: string ) => void,
    className?: string
}

export const DialogItem: React.FC<IDialogItem> = (props) => {
    const {
        onClick,
        className,
        _id,
        text,
        created_at,
        notReed,
        count_unread,
        user: {
            fullname,
            avatar,
            online
        } } = props;

    return (
        <div className={classNames(['dialogs__item', className])} onClick={() => onClick && onClick(_id, fullname)}>
            <div className={classNames([
                "dialogs__item-avatar", {
                    'dialogs--online': online,
                    'dialogs__item-avatar--not-read': count_unread
                }
            ])}>
                <Avatar src={avatar} fullName={fullname} />
            </div>
            <div className="dialogs__item-info">
                <div className={classNames([
                    'dialogs__item-info-top',
                    { 'dialogs--not-read': count_unread }
                ])}>
                    <b>{fullname}</b>
                    <MyDate
                        classes='dialogs--date'
                        myDate={created_at} />
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p dangerouslySetInnerHTML={{__html:text}}></p>
                    <Status
                        notReed={notReed}
                        count_unread={count_unread}
                        className='dialogs--status' />
                </div>
            </div>
        </div>
    )
}