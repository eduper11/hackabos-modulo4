function timer(callback) {
  setTimeout(() => {
    callback("done");
  }, 2000);
}

timer(function(r) {
  console.log(r);
});

// console.log("Fin");

function regresar(x) {
  console.log(x);
}
timer(regresar);
