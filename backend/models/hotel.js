'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hotel.hasMany(models.HotelImage, { foreignKey: 'hotel_id' });
      Hotel.hasMany(models.Room, { foreignKey: 'hotel_id' });
      Hotel.hasMany(models.Booking, { foreignKey: 'hotel_id' });
      Hotel.hasMany(models.Review, { foreignKey: 'hotel_id' });
      Hotel.hasMany(models.Wishlist, { foreignKey: 'hotel_id' });
      Hotel.belongsToMany(models.Amenity, { through: models.HotelAmenity, foreignKey: 'hotel_id' });
    }
  }
  Hotel.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    star_rating: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    check_in_time: DataTypes.TIME,
    check_out_time: DataTypes.TIME,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Hotel',
    tableName: 'hotels',
    underscored: true,     
    paranoid: false,
    timestamps: true
  });
  return Hotel;
};