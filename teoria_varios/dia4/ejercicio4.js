// repe del deividendo y divisor

function split(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      return reject(new Error("Error"));
    }
    setTimeout(() => {
      const result = dividendo / divisor;
      return resolve(result);
    }, 500);
  });
}

function multiply(m1, m2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(m1 * m2);
    }, 500);
  });
}

function sum(s1, s2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(s1 + s2);
    }, 500);
  });
}

function substract(r1, r2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(r1 - r2);
    }, 500);
  });
}

multiply(3, 5)
  .then(result => {
    console.log("A", result);
    return split(result, 3);
  })
  .then(result => {
    console.log("B", result);
    return sum(result, 4);
  })
  .then(result => {
    console.log("C", result);
    return result, 1;
  })
  .then(result => {
    console.log("D", result);
  })
  .catch(err => {
    console.err(new Error("Error, "));
  });
