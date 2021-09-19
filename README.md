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
