import { Router } from 'express';

export const connectController = Router();

connectController.get('/connect/', async (_, res) => {
    res.send({ message: "connect" });
});
