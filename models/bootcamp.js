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
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: 'Please add a name',
          },
          notEmpty: {
            msg: 'Please add a name',
          },
          max: {
            args: 50,
            msg: 'Name can not be more than 50 characters',
          },
        },
      },
      slug: {
        type: DataTypes.TEXT,
      },
      website: {
        type: DataTypes.TEXT,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.TEXT,
      },
      address: {
        type: DataTypes.TEXT,
      },
      location: {
        type: DataTypes.JSONB,
      },
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
      averageRating: {
        type: DataTypes.INTEGER,
      },
      averageCost: {
        type: DataTypes.DOUBLE,
      },
      photo: {
        type: DataTypes.TEXT,
      },
      housing: {
        type: DataTypes.BOOLEAN,
      },
      jobAssistance: {
        type: DataTypes.BOOLEAN,
      },
      jobGuarantee: {
        type: DataTypes.BOOLEAN,
      },
      acceptGi: {
        type: DataTypes.BOOLEAN,
      },
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
