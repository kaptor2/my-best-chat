import { Express } from 'express';

import { userController } from './userController';
import { dialogController } from './dialogController';
import { messageController } from './messageController';

export const createControllers = (app: Express) => {
    userController(app);
    dialogController(app);
    messageController(app);
}
