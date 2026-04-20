import express from 'express';

import 'dotenv/config';
import urlRouter from './routers/v1/url.router.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1', urlRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
});