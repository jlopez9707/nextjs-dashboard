import { User } from './definitions';
import { dataBase } from './mysqldb';

export const getUsers = async () => {
  try {
    return (await new Promise((resolve, reject) => {
      dataBase.query(`SELECT * FROM users`, (err, data) =>
        err ? reject(err) : resolve(data),
      );
    })) /* as User[] */;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};
