import { Router } from 'express';
import { messageModel, userModel } from '../model';
import { populate } from '../utils';

export const messageController = Router();

messageController.get('/get/messages/:idDialog', async (req, res) => {
    try {
        const id = await userModel.getIdByHash(req.cookies['ThisIsNotToken'])
        let messages: any = await messageModel.getMessages(id, req.params.idDialog);
        res.send(populate(["user"], messages));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});