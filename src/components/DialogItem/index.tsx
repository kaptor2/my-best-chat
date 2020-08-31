import React from 'react';

import './index.scss';
import { MyDate, Status } from '..';
import classNames from 'classnames';

type TDialogItem = {
    item: {
        user: {
            fullname: string,
            avatar?: string
            online?: boolean
        },
        message: {
            text: string,
            created_at: string,
            is_readed?: boolean,
            count_unread?: number
        }
    }
}

export const DialogItem = ({ item: {
    user: { fullname, avatar, online },
    message: { text, created_at, is_readed, count_unread } }
}: TDialogItem) => {

    return (
        <div className='dialog__item'>
            <div className={classNames([
                "dialog__item-avatar", {
                    'dialog--online': online
                }
            ])}>
                <img src={avatar} alt={``} />
            </div>
            <div className="dialog__item-info">
                <div className="dialog__item-info-top">
                    <b>{fullname}</b>
                    <MyDate
                        formatDate='HH:mm'
                        classes='dialog--date'
                        myDate={created_at} />
                </div>
                <div className='dialog__item-info-bottom'>
                    <p>{text}</p>
                    <Status
                        isReed={is_readed}
                        count_unread={count_unread}
                        className='dialog--status' />
                </div>
            </div>
        </div>
    )
}