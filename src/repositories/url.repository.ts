import { prisma } from "../utils/script.js"

export async function createShortenLink(longUrl: string, shortenCode: string) {
    const shorten = await prisma.urls.create({
        data: {short_code: shortenCode, long_url: longUrl}
    });
    console.log("Link shortended");
    
}


export async function getLink(shortCode: string) {
    const link = await prisma.urls.findFirst({
        where: { short_code: shortCode},
    });

    if(!link) {
        console.error("No Link with shorten id : "+shortCode);
    }

    console.log("Link found : "+link?.long_url);
    
    return link;
}