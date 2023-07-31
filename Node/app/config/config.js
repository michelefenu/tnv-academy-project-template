import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "gtm_reviews",
  username: "root",
  password: "Bambi0906",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
