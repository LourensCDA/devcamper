'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.sequelize.query(
      'create schema if not exists devcamper;'
    ); // create schema if not exists
    await queryInterface.createTable(
      'bootcamps',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
        slug: DataTypes.TEXT,
        description: {
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
          type: DataTypes.ARRAY(
            DataTypes.ENUM(
              'Web Development',
              'Mobile Development',
              'UI/UX',
              'Data Science',
              'Business',
              'Other'
            )
          ),
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
    // create a copy of the table for historic records
    await queryInterface.sequelize.query(
      'create table if not exists devcamper.bootcamps_h as (select * from devcamper.bootcamps);'
    );
    // create primary key for history table
    await queryInterface.sequelize.query(
      'alter table devcamper.bootcamps_h add primary key (id, "updatedAt");'
    );
  },
  down: async (queryInterface, Sequelize) => {
    // drop tables in other schemas
    await queryInterface.sequelize.query(
      'drop table if exists devcamper.bootcamps;'
    );
    await queryInterface.sequelize.query(
      'drop table if exists devcamper.bootcamps_h;'
    );
    await queryInterface.sequelize.query(
      'drop type if exists devcamper.enum_bootcamps_careers;'
    ); // drop enum
  },
};
