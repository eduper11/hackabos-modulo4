"use strict";

function restar(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).send("num1 and num2 must be numbers");
  }
  return n1 - n2;
}

module.exports = {
  restar
};
