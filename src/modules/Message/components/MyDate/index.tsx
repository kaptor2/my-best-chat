import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

import './index.scss';

type TMyDate = {
    myDate: string
}

export const MyDate = ({ myDate }: TMyDate) => {

    if (!myDate) return null

    return (
        <span className='message--date'>{
            myDate && formatDistanceToNow(Date.parse(myDate), { addSuffix: true, locale: ru })
        }</span>
    )
}