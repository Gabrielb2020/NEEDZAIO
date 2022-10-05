import mysql from 'mysql2'
import dotenv from "dotenv";
dotenv.config();

// create the connection
export const cnx = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
  });