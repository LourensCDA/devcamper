const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err }; // ... spread operator

  error.message = err.message;

  // log to console for dev
  console.log(err.stack.red);

  // Sequelize bad Object ID
  if (err.name === 'SequelizeDatabaseError') {
    const message = `Bootcamp not found`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
