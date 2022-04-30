const { ValidationError } = require("sequelize");

function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.statusCode).json({
      message: output.payload
    });
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}



module.exports = { logErrors, ormErrorHandler, boomErrorHandler, errorHandler };
