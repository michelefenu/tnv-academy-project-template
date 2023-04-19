import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "tnv_final_project",
  username: "root",
  password: "mirelush",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
