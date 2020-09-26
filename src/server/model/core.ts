import { createPool } from 'mysql';

export const pool = createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'mychat',
    host: 'localhost',
    port: 3306
});