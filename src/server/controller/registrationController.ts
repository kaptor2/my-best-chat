import { createToken } from '../utils';
import { userModel } from '../model';
import { Router } from 'express';
import { encode } from 'js-base64'

export const registrationController = Router();

registrationController.post('/set/user', async (req, res) => {
    try {
        if (await userModel.getCheckUser(req.body.email) )
            throw 'user is already registered'

        if (!req.headers["user-agent"])
            throw 'insufficient data in the header'
        
        const hash = await createToken(req.ip, req.headers["user-agent"]);
        const newToken = hash && encode(hash)

        await userModel.setUser(
            req.body.fullName,
            req.body.email,
            req.body.password,
            newToken
        )
        
        res.cookie('ThisIsNotToken', newToken, {httpOnly: true}).send({
            message: 'user created'
        })

    } catch (error) {
        res.status(208).send({
            message: error
        });
    }
});