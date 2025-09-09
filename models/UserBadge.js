const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserBadge = sequelize.define("UserBadge", {
  awardedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = UserBadge;
