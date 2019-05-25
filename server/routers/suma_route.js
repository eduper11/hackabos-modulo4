const express = require("express");
const router = express.Router();
const operaciones = require("./operaciones");

router.get("/suma", (req, res, next) => {
  // console.log("Header recibidos", req.headers);
  //   console.log(
  //     "el header x-header-inventado tienen el valor",
  //     req.headers["x-header"]
  //   );
  // console.log("query params recibidos", req.query);

  const { n1, n2 } = req.query;

  console.log(n1);

  const num1 = parseInt(n1, 10);
  const num2 = parseInt(n2, 10);

  if (isNaN(num1) || isNaN(num2)) {
    const err = new Error("error 1");
    return next(err);
    // return res.status(400).send("num1 and num2 must be numbers");
  }

  const result = operaciones.sumar(num1, num2);

  const respuesta = {
    result
  };

  req.respuesta = respuesta;

  next();
});

router.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

module.exports = router;
