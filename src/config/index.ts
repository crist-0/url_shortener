// config logic for the app

import dotenv from 'dotenv';


type ServerConfig = {
    PORT: number
}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}


loadEnv();


export const ServerConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
}