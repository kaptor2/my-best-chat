import { Router } from 'express';
import { db } from '../db'

export const apiRouter = Router();

apiRouter.get('/', async (req, res, next) => {
    try {
        const users = await db.all();
        res.json(users);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    } 
});