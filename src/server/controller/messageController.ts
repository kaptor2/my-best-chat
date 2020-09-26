import { Router } from 'express';
import { messageModel } from '../model';
import { populate } from '../utils';

export const messageController = Router();

messageController.get('/get/messages/:idUser/:idDialog', async (req, res) => {
    try {
        let messages: any = await messageModel.getMessages(Number.parseInt(req.params.idUser), req.params.idDialog);
       // console.log(req.cookies['TEEEST']);
        res.send(populate(["user"], messages));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});