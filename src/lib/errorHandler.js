const errorHandler = (error, request, response, next) => {
  try {
    const code = response.code ? response.code : 500;

    response.status(code).json({
      code,
      success: false,
      message: error.message || 'Internal server error',
      error: error.stack,
    });
  } catch (error) {
    next(error);
  }
};

export default errorHandler