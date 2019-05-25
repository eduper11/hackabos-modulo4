"use strict";

const jwt = require("jsonwebtoken");

const { JWT_PASS: authJwtPass } = process.env;

function checkJwt(req, res, next) {
  const { authorization } = req.headers;
  debugger;
  if (!authorization) {
    return res.status(401).send();
  }

  const [prefix, token] = authorization.split(" ");
  if (prefix !== "JWT") {
    return res.status(401).send();
  }

  if (!token) {
    return res.status(401).send("Invalid Token");
  }

  try {
    const decoded = jwt.verify(token, authJwtPass);

    req.claims = {
      uuid: decoded.uuid,
      role: decoded.role
    };

    return next();
  } catch (e) {
    return res.status(401).send(e.message);
  }
}

module.exports = checkJwt;
