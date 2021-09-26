const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err }; // ... spread operator
  let error_fields = new Array();

  error.message = err.message;

  // log to console for dev
  console.log(err.stack.red);

  // Sequelize bad Object ID
  if (err.name === 'SequelizeDatabaseError') {
    const message = `Bootcamp not found`;
    error = new ErrorResponse(message, 404);
  }

  // Sequelize duplicate key
  if (err.name === 'SequelizeUniqueConstraintError') {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // Sequelize validaiton error
  if (err.name === 'SequelizeValidationError') {
    const message = `Invalid data provided`;
    error = new ErrorResponse(message, 400);
    // display fields as array of objects
    error_fields = err.errors.map((element) =>
      Object.assign({}, { field: element.path, description: element.message })
    );
  }

  // return arrary of errors per field if available
  if (error_fields.length > 0) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'Server Error',
      errors: error_fields,
    });
  } else {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'Server Error',
    });
  }
};

module.exports = errorHandler;
