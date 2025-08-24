const notFound = (request, response, next) => {
  response.status(404).json({
    code: 404,
    success: false,
    message: 'Resource not found',
  });
};

export default notFound;