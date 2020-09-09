import React from 'react';
import './index.scss';

type TPopapHeader = {
    title?: string,
    text?: string
}

export const PopapHeader: React.FC<TPopapHeader> = ({ title, text }) => (
    <div className='popap-header'>
        <h2>{title}</h2>
        <span>{text}</span>
    </div>
)