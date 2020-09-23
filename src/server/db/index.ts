import { querys } from './querys';
import { createPool } from 'mysql';

const pool = createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'mychat',
    host: 'localhost',
    port: 3306
});

export const db = {
    getDialogs: (id: number) => new Promise((resolve, reject) => {
        pool.query(
            querys.getAllDialogsByIdUser, Array(5).fill(id),
            (err, dialogs: Array<any>) => {
                if (err) reject(err);
                resolve(dialogs);
            })
    }),

    getMessages: (userId: number, dialogId: string ) => new Promise((resolve, reject) => {
        pool.query(
            querys.getMessages, [userId, userId, dialogId],
            (err, messages: Array<any>) => {
                if (err) reject(err);
                console.log(messages)
                resolve(messages);
            })
    }), 
};
