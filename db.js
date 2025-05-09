import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();  // used to connect with .env file

const pool = mysql.createPool({  // used to connect with the my_sql database
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: Number(process.env.DB_PORT)
}).promise();

async function initDB() {  // function to create users table if it does not exists
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);
    console.log("Table created or already exists.");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

initDB();

async function table_creator(email){   // function to create specific user table by his email if it does not exists
  try{
    await pool.query(`
      CREATE TABLE IF NOT EXISTS ${email.split("@")[0]} (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255),
          description VARCHAR(1000)
        );
    `)
      console.log("Table created or already exists.")
  }
  catch(err){
    console.error("Error creating table:",err)
  }
}


export default pool; // exporting it to use on index.js
export {table_creator}