import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Favourite = db.define('favourite', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.INTEGER
  },
}, {
  freezeTableName: true
});
 
export default Favourite;