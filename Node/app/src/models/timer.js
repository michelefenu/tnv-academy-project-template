import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Timer = db.define('timer', {
  userId: {
    type: DataTypes.STRING
  },
  movieId: {
    type: DataTypes.STRING
  },
  movieTitle: {
    type: DataTypes.STRING
  },
  timer: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});
 
export default Timer;