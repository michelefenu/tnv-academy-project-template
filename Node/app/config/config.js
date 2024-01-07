import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "spring",
  username: "root",
 
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
