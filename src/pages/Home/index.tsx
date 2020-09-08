import React from 'react';
import classNames from 'classnames';
import './Home.scss';
import { Dialogs, Message } from '../../components';
import { IDialogItem } from '../../components/DialogItem';

const arr: Array<IDialogItem> = [{

    text: "Я написал статью и ты взял мои данные для тестов - не хорошо это",
    created_at: "Aug 31 2020 20:25:44",
    count_unread: 5,
    user: {
        _id: '1',
        fullname: "Stas Bagretsov",
        avatar: "https://miro.medium.com/fit/c/96/96/1*PZq5KugR9DJaBDi_AunPaQ.png"
    }
},
{
    text: "Я написал статью и ты взял мои данные для тестов - не хорошо это",
    created_at: "Sep 01 2020 19:28:44",
    user: {
        _id: '2',
        fullname: "Петя Баранов",
    }
},
{
    text: "Я написал статью и ты взял мои данные для тестов - не хорошо это",
    created_at: "Sep 01 2020 19:28:44",
    user: {
        _id: '3',
        fullname: "Константин Безпалов",
    }
},
{
    text: "Я написал статью и ты взял мои данные для тестов - не хорошо это",
    created_at: "Sep 01 2020 19:28:44",
    user: {
        _id: '4',
        fullname: "Элина",
    }
},
{
    text: "Я написал статью и ты взял мои данные для тестов - не хорошо это",
    created_at: "Sep 01 2020 19:28:44",
    user: {
        _id: '5',
        fullname: "Виталий Понкратов",
    }
}];

export const Home = () => {
    const classes = classNames([
        'home'
    ]);

    return (
        <div className={classes}>
            <Dialogs items={arr} />

            <Message
                _id="1"
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                audio={{ tones: tones, url: 'https://raw.githubusercontent.com/kaptor2/my-best-chat/frontend/src/assets/receive_sms.mp3', duration:26000 }}
                date='Sat Aug 29 2020 15:22:36'
                key={1}
                fullName='Константин Безпалов'
                notReed />
            <Message
                _id="2"
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36'
                fullName='Константин Безпалов'
                key={2}
                isMe />
            <Message
                _id="3"
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36'
                fullName='Константин Безпалов'
                isMe
                notReed
                key={3}
                docs={['https://picsum.photos/id/102/200/200', 'https://picsum.photos/id/12/200/200', 'https://picsum.photos/id/500/200/200', 'https://picsum.photos/id/102/200/200', 'https://picsum.photos/id/12/200/200', 'https://picsum.photos/id/500/200/200']}
            />
            <Message
                _id="4"
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                audio={{ tones: tones,duration:26000, url: 'https://raw.githubusercontent.com/kaptor2/my-best-chat/frontend/src/assets/iphone_6-30.mp3' }}
                date='Sat Aug 29 2020 15:22:36'
                fullName='Константин Безпалов'
                key={4}
                isMe />
            <Message
                _id="5"
                key={5}
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                text='Как работает CSS Flexbox: наглядное введение в систему компоновки элементов на веб-странице'
                date='Sat Aug 29 2020 15:22:36'
                fullName='Константин Безпалов'
                notReed />
            <Message
                _id="6"
                key={6}
                ava='https://cdn.tproger.ru/wp-images/tproger-square-192.png'
                audio={{ tones: tones,duration:26000, url: 'https://raw.githubusercontent.com/kaptor2/my-best-chat/frontend/src/assets/iphone_6-30.mp3' }}
                fullName='Константин Безпалов'
                date='Sep 01 2020 19:28:44' />
        </div>
    )
}


const tones: number[] = [0
    , 0
    , 0
    , 0
    , 0
    , 0
    , 0
    , 50
    , 46
    , 41
    , 36
    , 32
    , 27
    , 32
    , 38
    , 33
    , 34
    , 28
    , 26
    , 61
    , 72
    , 85
    , 84
    , 77
    , 88
    , 85
    , 60
    , 79
    , 36
    , 20
    , 0
    , 0
    , 0
    , 0]