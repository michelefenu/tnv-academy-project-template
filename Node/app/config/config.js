import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "firstSpring",
  username: "root",
  password: "Normix200",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
