import argon2 from 'argon2';

export const verifyToken = async (hash: string) => process.env.API_PASSWORD && 
    await argon2.verify(hash, process.env.API_PASSWORD)
