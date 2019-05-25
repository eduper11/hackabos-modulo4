const bodyParser = require("body-parser");
const express = require("express");
const routers = require("./routers");
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const startDate = Date.now();
  req.startDate = startDate;
  res.set("x-inicial-time", startDate);
  next();
});

app.use("/calculadora", routers.sumaRouter);
app.use("/calculadora", routers.restaRouter);
app.use("/calculadora", routers.divisionRouter);
app.use("/calculadora", routers.multiplicacionRouter);

// app.get("/", (req, res) => res.send("Hello World!"));

app.use((req, res) => {
  const actualDate = Date.now();
  const dateDifference = actualDate - req.startDate;
  dateDif = {
    dateDifference
  };
  res.set("x-diff-time", dateDifference);

  res.send({ resp: req.respuesta, dateDif });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
