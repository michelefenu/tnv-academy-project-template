import { Sequelize } from "sequelize";
import db from "../../config/config.js";

const { DataTypes } = Sequelize;

const Rating = db.define(
  "ratings",
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    movieId: {
      type: DataTypes.INTEGER,
    },
    movieTitle: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    timeSpend: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Rating;
