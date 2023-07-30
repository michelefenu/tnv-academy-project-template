import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ratings', {
  IdNomeReview: {
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
  }
}, {
  freezeTableName: true
});
 
export default Rating;