'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.TEXT,
      website: DataTypes.TEXT,
      phone: DataTypes.STRING,
      email: DataTypes.TEXT,
      address: DataTypes.TEXT,
      location: DataTypes.JSONB,
      careers: {
        type: DataTypes.ENUM,
        values: [
          'Web Development',
          'Mobile Development',
          'UI/UX',
          'Data Science',
          'Business',
          'Other',
        ],
      },
      averageRating: DataTypes.INTEGER,
      averageCost: DataTypes.DOUBLE,
      photo: DataTypes.TEXT,
      housing: DataTypes.BOOLEAN,
      jobAssistance: DataTypes.BOOLEAN,
      jobGuarantee: DataTypes.BOOLEAN,
      acceptGi: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: 'bootcamps',
      modelName: 'Bootcamp',
      schema: 'devcamper',
    }
  );
  return Bootcamp;
};
