import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { ru } from 'date-fns/locale';

import './index.scss';

type TMyDate = {
    myDate: string,
    classes?: string,
    formatDate?: string
}

export const MyDate = ({ myDate, classes, formatDate }: TMyDate) => {

    if (!myDate) return null

    return (
        <span className={classes}>{
            myDate && formatDate 
                ? format(Date.parse(myDate),formatDate)
                : formatDistanceToNow(Date.parse(myDate), { addSuffix: true, locale: ru })
        }</span>
    )
}