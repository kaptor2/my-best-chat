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
    all: () => new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE _id = ?`,[3], (err, users) => {
            if (err) reject(err);
            resolve(users);
        })
    })
};

