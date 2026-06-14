'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DestinationImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DestinationImage.belongsTo(models.Destination, { foreignKey: 'destination_id' });   
    }
  }
  DestinationImage.init({
    destination_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DestinationImage',
    tableName: 'destinationImages',
    underscored: true,
    timestamps: false
  });
  return DestinationImage;
};