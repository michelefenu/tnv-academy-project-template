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
    movieOverview: {
      type: DataTypes.STRING,
    },
    moviePoster: {
      type: DataTypes.STRING,
    },
    movieRevenue: {
      type: DataTypes.INTEGER,
    },
    movieDurata: {
      type: DataTypes.INTEGER,
    },
    movieRelease: {
      type: DataTypes.STRING,
    },
    punteggio: {
      type: DataTypes.INTEGER,
    },
    commento: {
      type: DataTypes.STRING
    },


  },
  {
    freezeTableName: true,
  }
);

export default Rating;
