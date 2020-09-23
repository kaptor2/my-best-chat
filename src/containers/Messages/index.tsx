import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { Message } from '../../components/Message';
import './index.scss';
import { TMessageState } from '../../redux/messages/typesMessage';
import { TState } from '../../redux/TState';
import { fetchMessages } from '../../redux/messages/messagesActions';
import { InputMessage, Loader, SendShowMessage } from '../../components';

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
        scrollContainer();
    })

    const scrollContainer = () => {
        scrollRef.current && (scrollRef.current.scrollTop = scrollRef.current.offsetHeight * 2);
    }
        

    const messages = [...stateMessages.items].sort((d1, d2) => {
        return  Date.parse(d1.date) - Date.parse(d2.date);
    });

    return (
        <div className={classNames('messages', className)}>
            <div ref={scrollRef} className='messages__scroll-block'>
                {currentDialog && !stateMessages.isLoading && 
                    <div className='messages--fix'></div>}
                <div className='messages__container' >
                    {stateMessages.isLoading
                        ? <Loader />
                        : !currentDialog
                            ? <SendShowMessage />
                            : messages.map(item => <Message key={item._id} {...item} />)}
                </div>
            </div>
            { !stateMessages.isLoading && currentDialog &&
                <InputMessage scrollContainer={scrollContainer} className='' />}
        </div>
    )
}