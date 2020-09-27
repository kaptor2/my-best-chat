import { userModel } from '../model';
import { Router } from 'express';

export const registrationController = Router();

registrationController.post('/set/registration', async (req, res) => {
    try {
        if (await userModel.getCheckUser(req.body.email) )
            throw 'Пользователь с этим email уже зарегистрирован'

        await userModel.setUser(
            req.body.fullName,
            req.body.email,
            req.body.password,
        )
        
        res.send({
            message: 'Пользователь успешно создан, авторизуйтесь'
        })

    } catch (error) {
        res.status(418).send({
            message: error
        });
    }
});