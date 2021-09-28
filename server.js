const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHanlder = require('./middleware/error');

// load env vars
dotenv.config({ path: './config/config.env' });

const { sequelize } = require('./models');

// route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parse
app.use(express.json());

const PORT = process.env.PORT || 3000;

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routes
app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHanlder);

const server = app.listen(PORT, async () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
  // confirm db connection
  await sequelize.authenticate();
  const db_ver = await sequelize.databaseVersion();
  console.log(`PostgreSQL Connected: ${db_ver}`.cyan.underline.bold);
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server and exit process
  server.close(() => process.exit(1));
});
