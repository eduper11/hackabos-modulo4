async function dividir(dividendo, divisor) {
  try {
    if (divisor === 0) {
      throw new Error("El número indicado es erróneo");
    }
    await setTimeout(() => {
      const result = dividendo / divisor;
      console.log(result);
    }, 2000);
  } catch (err) {
    console.error(err);
  }
}

dividir(5, 2);
