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
    const lock_key = "lock:" + shortCode;

    const lock = await redisClient.set(lock_key, 'locked', { 'NX': true, 'EX': 10});

    if (lock === 'OK') {
      try {
          const link = await getLink(shortCode);
          await redisClient.set(shortCode, String(link?.long_url), {
            EX: 3600,
          });g
          return link?.long_url;
      } finally {
        await redisClient.del(lock_key);
      }
    }
    else {
      await new Promise(resolve => setTimeout(resolve, 200));
    } return getLinkService(shortCode);
  }

  return link;
}
