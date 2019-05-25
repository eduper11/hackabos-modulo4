function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      return reject(new Error("/0"));
    }
    setTimeout(() => {
      const result = dividendo / divisor;
      return resolve(result);
    }, 2000);
  });
}
dividir(3, 0)
  .then(resultado => {
    console.log(resultado);
  })
  .catch(err => {
    console.error(err.message);
  });
