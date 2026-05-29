'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelAmenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelAmenity.init({
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amenity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'HotelAmenity',
    tableName: 'hotelAmenities',
    underscored: true,
    timestamps: false
  });
  return HotelAmenity;
};