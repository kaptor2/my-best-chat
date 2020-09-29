import React from 'react';
import { format, isToday, isDate } from 'date-fns';

type TMyDate = {
    myDate: string,
    classes?: string
}

export const MyDate: React.FC<TMyDate> = ({ myDate, classes }) => {

    if (!myDate && !isDate(myDate)) return null;
    const date = Date.parse(myDate);

    return (
        <span className={classes}>{
            myDate && isToday(date)
                ? format(date, 'HH:mm')
                : format(date, 'dd.MM.yyyy')
        }</span>
    )
}