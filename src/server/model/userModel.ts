import { querys } from './querys';
import { pool } from './core'

 export const userModel = {
    getCheckUser: (email: string) => new Promise((resolve, reject) => {
        pool.query(querys.checkUser, [email], (error, messages: Array<any> ) => {
            error ? reject(error) : resolve(messages[0].count)  
        })
    }), 

    setUser: (
        fullName: string, 
        email: string, 
        password: string, 
        hash: string = "") => new Promise((resolve, reject) => {
            pool.query(querys.setUser, [fullName, email, password, hash], (error, message) => {
                error ? reject('an error occurred while creating the user') : resolve(message)
            });
    })
};
