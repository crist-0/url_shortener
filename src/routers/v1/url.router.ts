import express from 'express';
import { createShortenLinkHandler, getLinkHandler } from '../../controllers/url.controller.js';


const urlRouter = express.Router();


urlRouter.post('/shorten', createShortenLinkHandler);

urlRouter.get('/:short_code', getLinkHandler);

export default urlRouter;