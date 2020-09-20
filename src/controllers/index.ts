import { Express } from 'express';

import { userController } from './userController';
import { dialogController } from './dialogController';

export const createControllers = (app: Express) => {
    userController(app);
    dialogController(app);
}
