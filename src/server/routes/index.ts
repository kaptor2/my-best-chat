import e, { Router } from 'express';
import { db } from '../db';

export const apiRouter = Router();

apiRouter.get('/:id', async (req, res, next) => {
    try {
        let dialogs: any = await db.all(Number.parseInt(req.params.id));
        res.json(populate(["user"], dialogs));
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

