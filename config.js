import 'dotenv/config';

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || 'funkoshop-api.koyeb.app';
export const DB_HOST = process.env.DB_HOST || 'bllxj36u2qg6powvyu2e-mysql.services.clever-cloud.com';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_NAME = process.env.DB_NAME || 'bllxj36u2qg6powvyu2e';
export const DB_USER = process.env.DB_USER || 'ufp9jstylnskeaum';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'v7zwBjWwSopK8FC2OM0E';
export const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';