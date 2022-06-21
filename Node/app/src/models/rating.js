import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ratings', {
  userId: {
    type: DataTypes.BIGINT
  },
  movieId: {
    type: DataTypes.BIGINT
  },
  rating: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});
 
export default Rating;