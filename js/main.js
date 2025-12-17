function ColorLog(text, color) {
  console.log(`%c${text}`, `background-color: ${color}; color: black;`);
}

// * Soluzione 1:
// * For Loop fino da 1 a 100
for (let i = 1; i <= 100; i++) {
  // * Se multiplo di 15: Output `FizzBuzz`
  if (i % 15 === 0) { ColorLog(`FizzBuzz`, `green`); }
  // * Altrimenti Se multiplo di 5: Output `Buzz`
  else if (i % 5 === 0) { ColorLog(`Buzz`, `blue`); }
  // * Altrimenti Se multiplo di 3: Output `Fizz`
  else if (i % 3 === 0) { ColorLog(`Fizz`, `red`); }
  // * Altrimenti: Output i
  else { console.log(i); }
}

// * Soluzione 2:
// // ? In questa soluzione non so come colorare il testo
// let output = ``;

// // * For Loop fino da 1 a 100
// for (let i = 1; i <= 100; i++) {
//   output = ``;

//   // * Se multiplo di 3: Output += `Fizz`
//   if (i % 3 === 0) {
//     output += `Fizz`;
//   }

//   // * Se multiplo di 5: Output += `Buzz`
//   if (i % 5 === 0) {
//     output += `Buzz`;
//   }

//   if (output !== ``) {
//     console.log(output);
//   } else {
//     console.log(i);
//   }
// }