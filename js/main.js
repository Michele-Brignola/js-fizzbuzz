// * For Loop fino da 1 a 100
for (let i = 1; i <= 100; i++) {
  // * Se multiplo di 15: Output "FizzBuzz"
  if (i % 15 === 0) { console.log("FizzBuzz"); }
  // * Altrimenti Se multiplo di 5: Output "Buzz"
  else if (i % 5 === 0) { console.log("Buzz"); }
  // * Altrimenti Se multiplo di 3: Output "Fizz"
  else if (i % 3 === 0) { console.log("Fizz"); }
  // * Altrimenti: Output i
  else { console.log(i); }
}