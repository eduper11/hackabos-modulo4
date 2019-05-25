"use strict";

const ARROZ = "🌾";
const CARNE = "🥩";
const LECHE = "🥛";
const TOMATE = "🍅";
const ingredientes = [ARROZ, CARNE, LECHE, TOMATE];

/**
 * Función que prepara un alimento a partir de un ingrediente, conviertiendo:
 *  ingrediente arroz a pan
 *  ingrediente carne a bacon
 *  ingrediente leche a queso
 *  ingrediente tomate a ensalada
 * @param {String} ingrediente [ARROZ, CARNE, LECHE, TOMATE]
 * @return {String} comida Devuelve el alimento procesado
 */
function prepare(ingrediente) {
  const pan = "🍞";
  const bacon = "🥓";
  const queso = "🧀";
  const ensalada = "🥗";
  if (ingrediente === ARROZ) {
    return pan;
  } else if (ingrediente === CARNE) {
    return bacon;
  } else if (ingrediente === LECHE) {
    return queso;
  } else if (ingrediente === TOMATE) {
    return ensalada;
  }
}

// const alimentos = ingredientes.map(ingrediente => {
//   return prepare(ingrediente);
// });

// console.log(alimentos);
// // return XXXX

/**
 * Indica si un ingrediente es vegano o no. Los ingredientes
 * veganos son el arroz y el tomate
 * @param {String} ingrediente [ARROZ, CARNE, LECHE, TOMATE]
 * @return {Boolean} true si es un ingrediente vegano
 */
function isVegan(ingrediente) {
  switch (ingrediente) {
    case ARROZ:
    case TOMATE:
      return true;
    default:
      return false;
  }
}

// function isVegan(ingrediente) {
//   switch (ingrediente) {
//     case ARROZ:
//     case TOMATE:
//       return ingrediente + " is vegan food";
//     default:
//       return ingrediente + " is not vegan food";
//   }
// }

/**
 * Junta (concatena) 2 ingredientes
 * @param {String} ingrediente1
 * @param {String} ingrediente2
 * @return {String} la unión de los ingredientes dados
 */
function combina(ingrediente1, ingrediente2) {
  if (isFinite(ingrediente1) == false && isFinite(ingrediente2) == false)
    return ingrediente1 + ingrediente2;
}

/**
 * Preparar los ingredientes dados en la variable "ingredientes" a sus
 * respectivos alimentos. Usar la función que sirva para recorrer cada elemento
 * del array y generar uno nuevo con el alimento preparado.
 */
const alimentos2 = ingredientes.map(ingrediente => {
  return prepare(ingrediente);
});

console.log(alimentos2);

/**
 * Mostrar en pantalla los elementos veganos. Para ello, usar la función
 * que recorra los elementos del array e indique cuál son veganos o no a partir
 * de una condición.
 */

// const veganFood = ingredientes.map(ingrediente => {
//   return isVegan(ingrediente);
// });
// console.log(veganFood);

//con filter:

const veganFood = ingredientes.filter(ingrediente => {
  return isVegan(ingrediente);
});

console.log(veganFood);

/**
 * Mostrar por pantalla la unión de todos los ingredientes. Usar el método que
 * recorra todos los elementos del array y permite obtener un nuevo objeto
 */

const sandwich = ingredientes.reduce((ingrediente1, ingrediente2) => {
  return combina(ingrediente1, ingrediente2);
});
console.log(sandwich);

// para pensar:
// n [0...12] dividir entre 4,
// function foo(n)

// const quali = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < quali.length; i++) {
//   if(quali[i] >8) {
//     return console.log("sobre");
//   } else if
// }
