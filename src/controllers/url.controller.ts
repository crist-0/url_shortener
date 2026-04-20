import type { NextFunction, Request, Response } from "express";
import { createShortenLinkService } from "../services/url.service.js";

export async function createShortenLinkHandler(req: Request, res: Response, next: NextFunction) {
    console.log("body = "+req.body);

    const urlResponse = await createShortenLinkService(req.body);

    

    res.status(201).json({
        message: "Link Shortend",
        data: urlResponse,
        success: true,
    })
    
}