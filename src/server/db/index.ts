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
    all: (id: number) => new Promise((resolve, reject) => {
        pool.query(
            `SELECT dialogs._id, 
                message.text,
                message.date AS created_at, 
                message.notReed,
                JSON_OBJECT('_id', users._id,'fullname',users.fullname,'avatar',users.avatar) user
            FROM message 
            LEFT JOIN dialogs ON message.dialog = dialogs._id
            LEFT JOIN users ON message.user = users._id
            WHERE dialogs.user LIKE '%,?,%'`, [id],
            (err, dialogs: Array<any>) => {
                if (err) reject(err);
                resolve(dialogs);
            })
    })
};
