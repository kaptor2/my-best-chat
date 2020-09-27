import { Router } from 'express';
import { dialogModel } from '../model';
import { populate } from '../utils';

export const dialogController = Router();

dialogController.get('/get/dialogs/:id', async (req, res) => {
    try {
        let dialogs: any = await dialogModel.getDialogs(req.params.id);
        res/*.cookie('TEEEST', '12345ABCDE',{
            httpOnly: true
        })*/.send(populate(["user"], dialogs));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
