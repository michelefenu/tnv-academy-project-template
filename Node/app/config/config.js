import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "tnv-final-project",
  username: "root",
  password: "root",
  host: "localhost",
  port: 8889,
  dialect: "mysql",
});

export default db;
