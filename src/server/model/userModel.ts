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
        password: string ) => new Promise((resolve, reject) => {
            pool.query(querys.setUser, [fullName, email, password], (error, message) => {
                error ? reject('an error occurred while creating the user') : resolve(message)
            });
    }),

    checkUserPassword: (
        email: string, 
        password: string) => new Promise((resolve, reject) => {
        pool.query(querys.checkUserPassword, [email, password], (error, messages: Array<any> ) => {
            error ? reject(error) : resolve(messages[0].count)  
        })
    }),

    setUserToken: (
        email: string, 
        password: string, 
        hash: string = "" ) => new Promise((resolve, reject) => {
            pool.query(querys.setUserToken, [hash, email, password], (error, message) => {
                error ? reject('token writing error') : resolve(message)
            });
    }),

    getIdByHash: (hash: string) => new Promise<string>((resolve, reject) => {
        pool.query(querys.getIdByHash, [hash], (error, messages: Array<any> ) => {
            error ? reject(error) : resolve(messages[0]._id)  
        })
    }), 

    clearToken: (hash: string) => new Promise((resolve, reject) => {
        pool.query(querys.cleaToken, [hash, hash], (error) => {
            console.log(error)
            error ? reject(error) : resolve()  
        })
    }), 
};
