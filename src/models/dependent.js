"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dependent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dependent.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.BOOLEAN,
      relationship: DataTypes.STRING,
      student_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dependent",
    }
  );
  return Dependent;
};
