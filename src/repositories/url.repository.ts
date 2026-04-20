import { prisma } from "../utils/script.js"

export async function createShortenLink(longUrl: string, shortenCode: string) {
    const shorten = await prisma.urls.create({
        data: {short_code: shortenCode, long_url: longUrl}
    });
    console.log("Link shortended");
    
}