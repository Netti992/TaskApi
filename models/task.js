'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    messages: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};
