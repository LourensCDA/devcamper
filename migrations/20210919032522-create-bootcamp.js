'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable(
      'bootcamps',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
        slug: {
          type: DataTypes.TEXT,
        },
        website: {
          type: DataTypes.TEXT,
        },
        phone: {
          type: DataTypes.STRING(20),
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
          default: 'no-photo.jpg',
        },
        housing: {
          type: DataTypes.BOOLEAN,
          default: false,
        },
        jobAssistance: {
          type: DataTypes.BOOLEAN,
          default: false,
        },
        jobGuarantee: {
          type: DataTypes.BOOLEAN,
          default: false,
        },
        acceptGi: {
          type: DataTypes.BOOLEAN,
          default: false,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      {
        schema: 'devcamper',
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bootcamps', {
      schema: 'devcamper',
    });
  },
};
