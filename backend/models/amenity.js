'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Amenity.belongsToMany(models.Hotel, { through: models.HotelAmenity, foreignKey: 'amenity_id' });
    }
  }
  Amenity.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Amenity',
    tableName: 'amenities',
    underscored: true,
    timestamps: false
  });
  return Amenity;
};