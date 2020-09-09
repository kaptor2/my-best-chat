import React from 'react';
import './CardBlock.scss';

type TCardBlock = {
    children?: any
}

export const CardBlock: React.FC<TCardBlock> = ({children}) => (
    <div className='card-block'>{children}</div>
)