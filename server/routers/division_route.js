const express = require("express");
const router = express.Router();
const operaciones = require("./operaciones");

router.post("/dividir", (req, res, next) => {
  const { n1, n2 } = req.body;

  const result = operaciones.dividir(n1, n2);
  const respuesta = {
    result
  };
  req.respuesta = respuesta;

  next();
});

module.exports = router;
