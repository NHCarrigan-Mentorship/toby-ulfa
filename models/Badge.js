const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Badge = sequelize.define("Badge", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  criteria: {
    type: DataTypes.JSON, // Example: { type: "level", value: 5 }
    allowNull: false,
  },
});

module.exports = Badge;
