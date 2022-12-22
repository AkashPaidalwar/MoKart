const jwt = require("jsonwebtoken");
//get user from the token provided in header
const verifyToken = (req, res, next) => {
  let authHeader = req.headers.token;
  if (authHeader) {
    authHeader = authHeader.split(" ")[1];
  }

  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};
//compare the user got from token from header with the user in params
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("req.headers.userId " + req.headers.userId);
    console.log("req.headers.userId " + req.headers.token);
    if (
      req.user.id === req.params.id ||
      req.user.isAdmin ||
      req.user.id === req.body.userId ||
      req.user.id === req.params.userId
    ) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Only Admins are allowed for this operation");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
