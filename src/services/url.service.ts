import type { createShortenLinkDTO } from "../dto/url.dto.js";
import { createShortenLink } from "../repositories/url.repository.js";

import { nanoid } from "nanoid";

export async function createShortenLinkService(createShortenLinkObj: createShortenLinkDTO) {

    const shortenId: string = nanoid(7);

    const shorten = await createShortenLink(createShortenLinkObj.longUrl, shortenId);
    return shorten;
}