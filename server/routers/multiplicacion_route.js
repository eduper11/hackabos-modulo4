const express = require("express");
const router = express.Router();
const operaciones = require("./operaciones");

router.get("/multiplicar", (req, res, next) => {
  const { n1, n2 } = req.query;

  const num1 = parseInt(n1, 10);
  const num2 = parseInt(n2, 10);

  const result = operaciones.multiplicar(num1, num2);

  const respuesta = {
    result: result
  };

  req.respuesta = respuesta;

  next();

  // res.send(respuesta);
});

module.exports = router;
