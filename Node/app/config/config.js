import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "userdata",
  username: "root",
  password: "kirby6153",
 
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
