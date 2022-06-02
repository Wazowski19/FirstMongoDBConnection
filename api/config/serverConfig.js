import dotenv from 'dotenv';

const enviroment = process.env.NODE_ENV;

console.log(`Cargando variables del ambiente ${enviroment}`);

dotenv.config({
  path: `.env.${enviroment}`,
});

const config = {
  server: {
    PORT: process.env.PORT,
  },
  database: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
  },
};

if (enviroment === 'local') {
  console.log(config);
}
export default config;