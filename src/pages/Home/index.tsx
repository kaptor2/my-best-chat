import React from 'react';
import classNames from 'classnames';

import './Home.scss';
import { Message } from '../../components';
import { ImagesFullScreen } from '../../modules/Message/components';

export const Home = () => {
    const classes = classNames([
        'home'
    ]);

    return (
        <div className={classes}>
            
            <Message
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как рабоанице'
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
                isMe isReed 
                docs={['https://picsum.photos/id/102/200/200', 'https://picsum.photos/id/12/200/200', 'https://picsum.photos/id/500/200/200','https://picsum.photos/id/102/200/200', 'https://picsum.photos/id/12/200/200', 'https://picsum.photos/id/500/200/200']}
                />
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
                date='Sat Aug 30 2020 17:35:00' />
        </div>
    )
}