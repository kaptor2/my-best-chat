import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { Message } from '../../components/Message';
import './index.scss';
import { TMessageState } from '../../redux/messages/typesMessage';
import { TState } from '../../redux/TState';
import { fetchMessages } from '../../redux/messages/messagesActions';
import { Loader, SendShowMessage } from '../../components';

interface IMessages {
    className: string
}

export const Messages: React.FC<IMessages> = ({ className }) => {

    const stateMessages = useSelector<TState, TMessageState>(store => store.messages);
    const currentDialog = useSelector<TState, string>(store => store.dialogs.currentDialog);
    const scrollRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentDialog) {
            fetchMessages(dispatch, currentDialog);
        }
    }, [currentDialog, dispatch])

    useEffect(() => {
        const scrollEffectElement = scrollRef.current;
        scrollEffectElement?.scrollTo(0,scrollEffectElement.offsetHeight);
    }, [stateMessages])

    const messages = [...stateMessages.items].sort((d1, d2) => {
        return Date.parse(d2.date) - Date.parse(d1.date);
    });

    return (
        <div ref={scrollRef} className={classNames('messages', className)}>
            {stateMessages.isLoading
                ? <Loader />
                : !currentDialog
                    ? <SendShowMessage />
                    : messages.map(item => <Message key={item._id} {...item} />)}
        </div>
    )
}