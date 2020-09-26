import argon2 from 'argon2';

export const createToken = () => 
    process.env.API_PASSWORD && argon2.hash(process.env.API_PASSWORD, {
       hashLength: 15 
    })