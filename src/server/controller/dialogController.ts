import { userModel } from './../model/userModel';
import { Router } from 'express';
import { dialogModel } from '../model';
import { populate } from '../utils';

export const dialogController = Router();

dialogController.get('/get/dialogs/', async (req, res) => {
    try {
        const id = await userModel.getIdByHash(req.cookies['ThisIsNotToken'])
        const dialogs: any = await dialogModel.getDialogs(id);
        
        res.send(populate(["user"], dialogs));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
