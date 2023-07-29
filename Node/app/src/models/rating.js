import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ratings', {
  userId: {
    type: DataTypes.STRING
  },
  movieId: {
    type: DataTypes.STRING
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