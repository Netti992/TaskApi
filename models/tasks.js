'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    messages: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};