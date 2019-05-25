// function timer(callback) {
//   setTimeout(() => {
//     callback("done");
//   }, 2000);
// }

// timer(function(r) {
//   console.log(r);
// });

// // console.log("Fin");

// function regresar(x) {
//   console.log(x);
// }
// timer(regresar);

function timer(segundos) {
  return new Promise((resolve, reject) => {
    const segs = segundos * 1000;
    if (!isFinite(segs)) {
      return reject(
        new Error(`Error, ${segundos} segundos no es un valor válido`)
      );
    } else if (segs < 0) {
      return reject(
        new Error(`Error, ${segundos} segundos no es un valor válido`)
      );
    }

    setTimeout(segs => {
      return resolve("ok");
    }, segs);
  });
}

timer(-5)
  .then(status => {
    console.log("done" + status); // ojo, status(variable) viene de arriba, del resolve("ok")
  })
  .catch(err => {
    console.error(err.message);
  });
