import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "userdata",
  username: "root",
  password: "Mysql1990@",

 
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
