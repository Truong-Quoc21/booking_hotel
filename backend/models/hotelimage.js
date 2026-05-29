'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HotelImage.belongsTo(models.Hotel, { foreignKey: 'hotel_id' });
    }
  }
  HotelImage.init({
    hotel_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HotelImage',
    tableName: 'hotelImages',
    underscored: true,  
    timestamps: false
  });
  return HotelImage;
};