// config logic for the app

import 'dotenv/config';

type ServerConfig = {
    PORT: number
}

type DBConfig = {
    DB_URL: string
}

function loadEnv() {
    console.log(`Environment variables loaded`);
    console.log(process.env.DATABASE_URL);
    
}


loadEnv();

export const DBConfig: DBConfig = {
    DB_URL: String(process.env.DATABASE_URL) || ""
}


export const ServerConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
}