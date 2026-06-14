'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Destination.hasMany(models.DestinationImage, { foreignKey: 'destination_id' }); 
      Destination.hasMany(models.Hotel, { foreignKey: 'destination_id' }); 
    }
  }
  Destination.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Destination',
    tableName: 'destinations',
    underscored: true,     
    paranoid: true,
    timestamps: true
  });
  return Destination;
};