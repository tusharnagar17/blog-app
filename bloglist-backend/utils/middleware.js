const tokenExtractor = (req, res, next) => {
  // Check if the Authorization header exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    // Extract the token by removing the 'Bearer ' keyword
    const token = req.headers.authorization.slice(7); // Removes 'Bearer ' from the beginning
    req.token = token; // Attach the extracted token to the request object
  }

  next(); // Call the next middleware or route handler
};

module.exports = { tokenExtractor };
