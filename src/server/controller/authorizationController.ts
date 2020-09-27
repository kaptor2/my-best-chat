import { createToken } from '../utils';
import { userModel } from '../model';
import { Router } from 'express';
import { encode } from 'js-base64'

export const authorizationController = Router();

authorizationController.post('/set/authorization', async (req, res) => {
    try {
        const aut = await userModel.checkUserPassword(req.body.email, req.body.password);

        if (!aut) {
            throw 'invalid username or password'
        }
            
        if (!req.headers["user-agent"])
            throw 'insufficient data in the header'
        
        const hash = await createToken(req.ip, req.headers["user-agent"]);
        const newToken = hash && encode(hash)

        await userModel.setUserToken(req.body.email, req.body.password, newToken);
        
        res.cookie('ThisIsNotToken', newToken, {httpOnly: true}).send({
            message: 'user authorized'
        })

    } catch (error) {
        res.status(208).send({
            message: error
        });
    }
});