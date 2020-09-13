import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { CommentOutlined, SyncOutlined } from '@ant-design/icons';

import { Message } from '../../components/Message';
import './index.scss';
import { TMessageState } from '../../redux/messages/typesMessage';
import { TState } from '../../redux/TState';
import { fetchMessages } from '../../redux/messages/messagesActions';


interface IMessages {
    className: string
}

export const Messages: React.FC<IMessages> = ({ className }) => {

    const stateMessages = useSelector<TState, TMessageState>(store => store.messages);
    const currentDialog = useSelector<TState, string>(store => store.dialogs.currentDialog);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentDialog) {
            fetchMessages(dispatch, currentDialog);
        }
    }, [currentDialog, dispatch])

    const messages = [...stateMessages.items].sort((d1, d2) => {
        return Date.parse(d2.date) - Date.parse(d1.date);
    });

    return (
        <div className={classNames('messages', className)}>
            {
                stateMessages.isLoading
                    ? <SyncOutlined spin className='messages--spinner' />
                    : !currentDialog
                        ? <div className='messages--send-show-message'>
                            <CommentOutlined />
                            <span>Выберите собеседника</span>
                        </div>
                        : messages.map(item => <Message key={item._id} {...item} />)
            }
        </div>
    )
}