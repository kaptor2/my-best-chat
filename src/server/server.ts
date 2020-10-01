import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { checkToken } from './middleware';
import { dialogController, 
  messageController, 
  registrationController,
  authorizationController } from './controller';
import { connectController } from './controller/connectController';

dotenv.config();

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
  }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/', registrationController);
app.use('/api/', authorizationController);

app.use(checkToken);

app.use('/api/', connectController)
app.use('/api/', dialogController);
app.use('/api/', messageController);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port: ${process.env.PORT}`)
}) 