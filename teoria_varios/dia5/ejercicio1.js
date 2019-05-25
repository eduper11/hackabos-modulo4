// async function dividir(n1, n2) {
//   if (n2 === 0) {
//     throw new Error("Error"); // THROW: lanzar excepciones
//   }
//   return n1 / n2;
// }

// (async () => {
//   try {
//     const result = await dividir(5, 0);
//     console.log(result);
//   } catch (e) {
//     console.log(e.message);
//   }
// })();

// timer con async await

// asyc await que multiplique4

("use strict");

function sleep(seconds) {
  console.log(`${new Date().toISOString()}: starting timer`);
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(`timer ${seconds} seconds done!`);
    }, seconds * 1000);
  });
}

async function init() {
  try {
    console.log(`${await sleep(2)}: ${new Date().toISOString()}`);
    console.log(`${await sleep(3)}: ${new Date().toISOString()}`);
  } catch (e) {
    console.error(e.message);
  }
}

init();
