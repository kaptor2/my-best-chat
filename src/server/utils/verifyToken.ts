import argon2 from 'argon2';

export const verifyToken = async (hash: string, ip:string, userAgent:string = "") => process.env.API_PASSWORD && 
    await argon2.verify(hash, process.env.API_PASSWORD.concat(ip, userAgent))
