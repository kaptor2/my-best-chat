import mongoose from 'mongoose';
import { Express } from 'express';

const MONGO_PORT = ':27017';
const MONGO_URL = 'mongodb://localhost';
const MONGO_BD = '/chat';
const EXPRESS_PORT = 8000;

export const connectCore = (app: Express) => {
    mongoose.connect(MONGO_URL.concat(MONGO_PORT, MONGO_BD), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('DB Connected!'))
        .catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
        });

    app.listen(EXPRESS_PORT, () => {
        console.log('localhost:8000 started');
    })
}
