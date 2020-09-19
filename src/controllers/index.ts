import { Express } from 'express';

import { userController } from './userController';

export const createControllers = (app: Express) => {
    userController(app);
}