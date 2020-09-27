import { verifyToken } from '../utils';
import { NextFunction, Request, Response } from 'express';
import { decode } from 'js-base64'
import { userModel } from '../model';

export const checkToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.cookies['ThisIsNotToken']) 
            throw 'verification of the token is not passed';

        const token = decode(req.cookies['ThisIsNotToken']);

        const checkToken = await verifyToken(token,req.ip, req.headers["user-agent"]);
        
        if (!checkToken) {
            await userModel.clearToken(token);
            throw 'verification of the token is not passed';
        }

        next()
    } catch(error) {
        res.status(418).send(error);
    }
}