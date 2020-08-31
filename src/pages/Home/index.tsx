import React from 'react';
import classNames from 'classnames';

import './Home.scss';
import { DialogItem } from '../../components';

const arr = [{
    user: {
        fullname: "Stas Bagretsov",
        avatar: "https://miro.medium.com/fit/c/96/96/1*PZq5KugR9DJaBDi_AunPaQ.png"
    },
    message: {
        text: "Я написал статью и ты взял мои данные для тестов - не хорошо это",
        created_at: "Aug 31 2020 20:25:44",
        is_readed: true
    }
}, {
    user: {
        fullname: "Безпалов Константин",
        avatar: "https://yt3.ggpht.com/a/AATXAJykHbyaVOiY43zcsaiLpiwD0BikTGaHhk8BVTHh6w=s88-c-k-c0xffffffff-no-rj-mo",
        online: true
    },
    message: {
        text: "В коммиты это не попадет ",
        created_at: "Aug 31 2020 20:25:44",
        count_unread: 5,
    }
}];

export const Home = () => {
    const classes = classNames([
        'home'
    ]);

    return (
        <div className={classes}>
            <div className="Dialogs" style={{width:'319px', gridColumnGap: '10em'}}>
                {arr.map(e => <DialogItem item={e} />)}
            </div>


            {/*<ImagesFullScreen />
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
                date='Sat Aug 30 2020 17:35:00' />*/}
        </div>
    )
}