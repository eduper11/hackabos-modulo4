const abc = ["A", "B", "C", "D"];

for (let i = 0; i < abc.length; i++) {
  for (let j = 0; j <= i; j++) {
    let x = "";
    x += abc[j];
    console.log(x);
  }
}

// abc.map(function(element) {
//   element.charCodeAt(0) + 32;
//   console.log(String.fromCharCode(element));
//   // return String.fromCharCode(element);
//   // console.log(String.fromCharCode(element));
// });
