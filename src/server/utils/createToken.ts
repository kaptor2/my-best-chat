import argon2 from 'argon2';

export const createToken = (ip: string, userAgent: string) =>
    process.env.API_PASSWORD && argon2.hash(process.env.API_PASSWORD.concat(ip, userAgent), {
        hashLength: 5
    })