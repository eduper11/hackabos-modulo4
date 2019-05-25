const express = require("express");

const router = express.Router();

const cervezaArray = [];

router.post("/", (req, res, next) => {
  const { name, graduation } = req.body;

  if (!name || !graduation) {
    const err = new Error("Bad request");
    return next(err);
  }

  //   if (
  //     name ===
  //     cervezaArray.find(cerveza => {
  //       if (cerveza.name === name) {
  //         return cerveza.name;
  //       }
  //     })
  //   ) {
  //     const err = new Error("error1");
  //     next(err);
  //   }

  for (let i = 0; i < cervezaArray.length; i++) {
    if (
      name === cervezaArray[i].name &&
      graduation === cervezaArray[i].graduation
    ) {
      return next(new Error("cerveza type registered yet"));
    }
  }

  cervezaArray.push({
    name: name,
    graduation: graduation
  });

  res.status(200).send(cervezaArray);
});

router.get("/", (req, res) => {
  res.status(200).send(cervezaArray);
});

router.get("/:name", (req, res) => {
  const { name, graduation } = req.params;

  console.log(req.params);

  const foundBeer = cervezaArray.filter(cerveza => {
    if (cerveza.name === name) {
      return true;
    }
    return false;
  });

  if (foundBeer.lenght !== 0) {
    res.status(200).send(foundBeer);
  } else {
    res.status(404).send(new Error("beer do not exist"));
  }
});

router.delete("/:name", (req, res) => {
  const { name, graduation } = req.params;

  i = 0;

  const deletedBeer = cervezaArray.find((cerveza, i) => {
    //
    if (name === cerveza.name) {
      return true;
    }
    return false;
  });
  if (!deletedBeer) {
    res.status(404).send(`Beer ${name} has not been found`);
  } else {
    cervezaArray.splice(i, 1);
    res.status(200).send(cervezaArray);
  }
});

router.use((err, req, res, next) => {
  return res.status(400).send(err.message);
});

module.exports = router;
