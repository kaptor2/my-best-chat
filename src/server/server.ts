import express from 'express';
import { dialogController, messageController, registrationController } from './controller';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
  }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/', registrationController);

app.use('/api/', dialogController);
app.use('/api/', messageController);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port: ${process.env.PORT}`)
}) 