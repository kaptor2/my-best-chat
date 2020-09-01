import React from 'react';

import './index.scss';
import { MyDate, Status } from '..';
import classNames from 'classnames';
import { Avatar } from '../Avatar';

export interface IDialogItem {

    text: string,
    created_at: string,
    notReed?: boolean,
    count_unread?: number,
    user: {
        _id: string,
        fullname: string,
        avatar?: string
        online?: boolean
    }
}

export const DialogItem = (props: IDialogItem) => {
    const {
        text,
        created_at,
        notReed,
        count_unread,
        user: { fullname,
            avatar,
            online }
    } = props;

    return (
        <div className='dialogs__item'>
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
                    <p>{text}</p>
                    <Status
                        notReed={notReed}
                        count_unread={count_unread}
                        className='dialogs--status' />
                </div>
            </div>
        </div>
    )
}