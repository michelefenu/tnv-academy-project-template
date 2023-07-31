import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ratings', {
  IdReview: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.INTEGER
  },
  rating: {
    type: DataTypes.INTEGER
  },
  review: {
    type: DataTypes.STRING
  },
  totalTime: {
    type: DataTypes.INTEGER
  },
  movieTitle: {
    type: DataTypes.STRING
  },
  moviePoster: {
    type: DataTypes.STRING
  }


}, {
  freezeTableName: true,
  timestamps: true
});
 
export default Rating;