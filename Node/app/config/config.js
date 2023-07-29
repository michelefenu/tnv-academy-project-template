import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "gtm",
  username: "root",
  password: "Famosissim090",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
