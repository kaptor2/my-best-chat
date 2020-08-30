import React from 'react';
import classNames from 'classnames';

import './Home.scss';
import { Message } from '../../components';

export const Home = () => {
    const classes = classNames([
        'home'
    ]);

    return (
        <div className={classes}>
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36' 
                isReed/>
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36'
                isMe />
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36'
                isMe isReed />
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36'
                isMe />
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36' 
                isReed />
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36' />
        </div>
    )
}