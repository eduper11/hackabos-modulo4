const bodyParser = require("body-parser");
const express = require("express");
const routers = require("./routers");

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use("/cerveza", routers.cervezaRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
