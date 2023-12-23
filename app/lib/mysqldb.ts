/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql from 'mysql';

const conectar = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //port: process.env.DB_PORT,
    charset: 'utf8mb4_general_ci',
  });

  try {
    connection.connect();
    console.log('conectado mysql con exito');

    connection.on('err', (err: any) => {
      if (err) console.log(err);
    });

    return connection;
  } catch (error) {
    connection.end();
    return connection;
  }
};

export const dataBase = conectar();