import { log } from "node:console";

import { createClient } from 'redis';

export const redisClient = createClient({
    url: process.env.REDIS_URL || ""
});


redisClient.on('error', (err) => console.log('Redis Client Error:',err));
redisClient.on('connect', () => console.log('Redis Client Connected! '));


const connectRedis = async () => {
    try{
        await redisClient.connect();
    } catch(error) {
        console.error('Could not establish Redis connection:', error);
        process.exit(1);
    }
};

connectRedis();

