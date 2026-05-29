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
      HotelAmenity.belongsTo(models.Hotel, { foreignKey: 'hotel_id' });
      HotelAmenity.belongsTo(models.Amenity, { foreignKey: 'amenity_id' });
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