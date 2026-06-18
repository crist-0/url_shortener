import { redisClient } from "../config/redis.js";
import type { createShortenLinkDTO } from "../dto/url.dto.js";
import { createShortenLink, getLink } from "../repositories/url.repository.js";

import { nanoid } from "nanoid";

export async function createShortenLinkService(
  createShortenLinkObj: createShortenLinkDTO,
) {
  const shortenId: string = nanoid(7);

  const shorten = await createShortenLink(
    createShortenLinkObj.longUrl,
    shortenId,
  );
  return shorten;
}

export async function getLinkService(shortCode: string) {
  const link: string | null = await redisClient.get(shortCode);

  console.log("link == " + link);

  if (link == null) {
    const link = await getLink(shortCode);
    await redisClient.set(shortCode, String(link?.long_url), {
      EX: 3600,
    });
    return link?.long_url;
  }

  return link;
}
