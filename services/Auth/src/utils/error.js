const errorHandler = (statusCode, message, err = null) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  if (err) {
    error.stack = err.stack;
  }
  return error;
};

module.exports = { errorHandler };
