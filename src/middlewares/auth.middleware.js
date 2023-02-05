const jwt= require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;
    token = token.replace("Bearer ", "");
    console.log(token);
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      
      { algorithms: "HS512" },
      (err, decoded) => {
        if (err) {
          res.status(400).json({
            error: "invalid token",
            message: "El token no es válido, envía un token correcto",
          });
        } else {
          console.log(decoded);
          next();
        }
      }
    );
  };
  
  module.exports = authMiddleware;