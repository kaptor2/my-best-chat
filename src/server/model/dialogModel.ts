import { pool } from "./core";
import { querys } from "./querys";

export const dialogModel = {
    getDialogs: (id: number) => new Promise((resolve, reject) => {
        pool.query(
            querys.getAllDialogsByIdUser, Array(5).fill(id),
            (err, dialogs: Array<any>) => {
                if (err) reject(err);
                resolve(dialogs);
            })
    }),
};