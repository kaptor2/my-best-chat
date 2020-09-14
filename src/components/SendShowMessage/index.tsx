import React from 'react';
import { CommentOutlined } from '@ant-design/icons';
import './index.scss';

export const SendShowMessage: React.FC = () => (
    <div className='send-show-message'>
        <CommentOutlined />
        <span>Выберите собеседника</span>
    </div>
) 
