"use strict";

function dividir(n1, n2) {
  if (n2 === 0) {
    throw new Error("El divisor no es válido");
  }
  return n1 / n2;
}

module.exports = {
  dividir
};
