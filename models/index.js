const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./User");
const Task = require("./Task");
const Badge = require("./Badge");
const UserBadge = require("./UserBadge");

// Associations
User.hasMany(Task, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "userId",
});

User.belongsToMany(Badge, { through: UserBadge });
Badge.belongsToMany(User, { through: UserBadge });

const db = {
  sequelize,
  Sequelize,
  User,
  Task,
  Badge,
  UserBadge,
};

module.exports = db;
