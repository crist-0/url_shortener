import { createClient } from 'redis';

console.log(process.env.REDIS_URL);

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

