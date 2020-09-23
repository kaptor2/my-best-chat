import express from 'express';
import { apiRouter } from './routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3004;
app.use(express.json());
app.use(cors())

app.use('/api/get', apiRouter);


app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
}) 