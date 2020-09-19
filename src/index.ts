import express from 'express';
import { json as parsJson } from 'body-parser';

import { createControllers } from './controllers';
import { connectCore } from './core'

const app = express();
app.use(parsJson());

connectCore(app);
createControllers(app);