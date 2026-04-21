import type { NextFunction, Request, Response } from "express";
import { createShortenLinkService, getLinkService } from "../services/url.service.js";

export async function createShortenLinkHandler(req: Request, res: Response, next: NextFunction) {
    console.log("body = "+req.body);

    const urlResponse = await createShortenLinkService(req.body);

    res.status(201).json({
        message: "Link Shortend",
        data: urlResponse,
        success: true,
    })
}

export async function getLinkHandler(req: Request, res: Response, next: NextFunction) {
    const shortCode: string = String(req.params.short_code);

    const LinkResponse = await getLinkService(shortCode);

    if(!LinkResponse){
        res.status(404).json({
            message: "Link not found",
            success: false,
        })
        
    }

    res.redirect(String(LinkResponse?.long_url));
    
}