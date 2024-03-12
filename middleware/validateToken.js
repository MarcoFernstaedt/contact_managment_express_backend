const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization; // Use lowercase "authorization" header
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "User is not authorized" }); // Return here to stop execution
      }
      req.user = decoded.user;
      next(); // Call next() to proceed to the next middleware
    });
  } else {
    return res.status(401).json({ error: "User is not authorized" }); // Return if no token found
  }
};

module.exports = validateToken;
