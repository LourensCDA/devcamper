'use strict';
const { Model, QueryInterface } = require('sequelize');
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
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
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
      slug: DataTypes.TEXT,
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please add a description',
          },
          notEmpty: {
            msg: 'Please add a description',
          },
          max: {
            args: 500,
            msg: 'Description can not be more than 500 characters',
          },
        },
      },
      website: {
        type: DataTypes.TEXT,
        validate: {
          is: {
            args: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            msg: 'Please use a valid URL with HTTP or HTTPS',
          },
        },
      },
      phone: {
        type: DataTypes.STRING(20),
        validate: {
          max: {
            args: 20,
            msg: 'Phone number can not be longer than 20 characters',
          },
        },
      },
      email: {
        type: DataTypes.TEXT,
        validate: {
          isEmail: {
            msg: 'Please add a valid email',
          },
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please add an address',
          },
          notEmpty: {
            msg: 'Please add an address',
          },
        },
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
        allowNull: false,
      },
      averageRating: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: 'Rating must be at least 1',
          },
          max: {
            args: 10,
            msg: 'Rating must can not be more than 10',
          },
        },
      },
      averageCost: {
        type: DataTypes.DOUBLE,
      },
      photo: {
        type: DataTypes.TEXT,
        defaultValue: 'no-photo.jpg',
      },
      housing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      jobAssistance: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      jobGuarantee: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      acceptGi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      hooks: {
        // creates entry in history table when new records is created
        afterCreate: async (bootcamp, options) => {
          console.log(`New bootcamp ID: ${bootcamp.id}`);
          await sequelize.query(
            `insert into devcamper.bootcamps_h select * from devcamper.bootcamps where id = '${bootcamp.id}' on conflict do nothing;`
          );
        },
        // creates entry in history table after record is updated
        afterUpdate: async (bootcamp, options) => {
          console.log(`Update bootcamp ID: ${bootcamp.id}`);
          await sequelize.query(
            `insert into devcamper.bootcamps_h select * from devcamper.bootcamps where id = '${bootcamp.id}' on conflict do nothing;`
          );
        },
        // checks that copy of record exists on history table before delete
        beforeDestroy: async (bootcamp, options) => {
          console.log(`Delete bootcamp : ${bootcamp.id}`);
          await sequelize.query(
            `insert into devcamper.bootcamps_h select * from devcamper.bootcamps where id = '${bootcamp.id}' on conflict do nothing;`
          );
        },
      },
      sequelize,
      tableName: 'bootcamps',
      modelName: 'Bootcamp',
      schema: 'devcamper',
    }
  );
  return Bootcamp;
};
