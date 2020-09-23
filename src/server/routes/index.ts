import { Router } from 'express';
import { db } from '../db';

export const apiRouter = Router();

apiRouter.get('/dialogs/:id', async (req, res) => {
    try {
        let dialogs: any = await db.getDialogs(Number.parseInt(req.params.id));
        res.json(populate(["user"], dialogs));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

apiRouter.get('/messages/:idUser/:idDialog', async (req, res) => {
    try {
        let messages: any = await db.getMessages(Number.parseInt(req.params.idUser), req.params.idDialog);
        res.json(populate(["user"], messages));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



/* converter string to object
    folders -> array folders
    jsonArrayObject -> property with child json string 
*/
const populate = (folders: Array<string>, jsonArrayObject: Array<any>) =>
    jsonArrayObject.map((itemObject) => {
        folders.forEach((folder) => {
            itemObject[folder] = JSON.parse(itemObject[folder]);
        });
        return itemObject
    })

