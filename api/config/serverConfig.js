import dotenv from 'dotenv'

dotenv.config();

export default {
    server:{
        PORT: process.env.PORT
    },
    database:{
        USER:process.env.DB_USER,
        PASSWORD:process.env.DB_PASSWORD,
        HOST:process.env.DB_HOST,
        PORT:process.env.DB_PORT,
        NAME:process.env.DB_NAME
    }
}