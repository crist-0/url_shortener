import express from 'express';
import { createShortenLinkHandler } from '../../controllers/url.controller.js';


const urlRouter = express.Router();


urlRouter.post('/shorten', createShortenLinkHandler);

// urlRouter.get('/:short_code')

export default urlRouter;