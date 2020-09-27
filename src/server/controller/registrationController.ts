import { userModel } from '../model';
import { Router } from 'express';

export const registrationController = Router();

registrationController.post('/set/registration', async (req, res) => {
    try {
        if (await userModel.getCheckUser(req.body.email) )
            throw 'user is already registered'

        await userModel.setUser(
            req.body.fullName,
            req.body.email,
            req.body.password,
        )
        
        res.send({
            message: 'user created'
        })

    } catch (error) {
        res.status(208).send({
            message: error
        });
    }
});