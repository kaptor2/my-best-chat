import express from 'express';
import { apiRouter } from './routes'

const app = express();
const PORT = process.env.PORT || 3004;
app.use(express.json());

app.use('/api/test', apiRouter);


app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
}) 