# Node.js API Masterclass With Express & ~~MongoDB~~ Postgres Sequelize

This is my attempt to use Sequelize instead of MongoDB to create the devcamper api from the udemy course.

## Credit

Brad Traversy. Node.js API Masterclass With Express & MongDB on udemy.

## Config

A config folder with two config files should be added:

**config.env example:**

Standard enviromental variable config file.

```
PORT=5006
NODE_ENV=development
```

**config.json example**

Sequelize init generates some boilaterplate files, one of these is the config.json file to use for connections and settings.

Some things to note:

- "freezTablename" uses tables names as declared in models
- "logging" default is to omit setting it as true, adding it and setting to false removes it

```json
{
  "development": {
    "username": "your username",
    "password": "your password",
    "database": "development_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 6432,
    "freezeTableName": true
  },
  "test": {
    "username": "your username",
    "password": "your password",
    "database": "test_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "freezeTableName": true
  },
  "production": {
    "username": "your username",
    "password": "your password",
    "database": "prod_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "freezeTableName": true,
    "logging": false
  }
}
```

## Database vs Schema

Postgresql has a distinction between a database and a schema.

Sequelize-cli provides a way to add the database but not the schema and will default the table creation (from the model) to be in the public schema.

A schema can be added in the options part of the model declaration and migration options.

This schema would have to be created manually first though. For example:

```sql
create schema devcamper;
```

This also highlights a potential issue where one runs multiple databases that the sequelize user may not need access to. I suggest creating your database and schemas seperatly, not using the sequelize-cli, so you can still control user access on schemas. Model migration can work using sequelize-cli.
