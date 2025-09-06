const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("Task", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "completed"),
    allowNull: false,
    defaultValue: "pending",
  },
  xpReward: {
    type: DataTypes.INTEGER,
    defaultValue: 10, // you can give a sensible default
  },
});

module.exports = Task;
