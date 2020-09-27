import { querys } from './querys';
import { pool } from './core'

export const messageModel = {
    getMessages: (userId: string, dialogId: string ) => new Promise((resolve, reject) => {
        pool.query(
            querys.getMessages, [userId, userId, dialogId, userId],
            (err, messages: Array<any>) => {
                if (err) reject(err);
                resolve(messages);
            })
    }), 
};
