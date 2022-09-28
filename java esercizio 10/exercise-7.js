function sumUntil(maxValue) {
let somma = 0;
  for (let counter = 1; counter <= maxValue; counter++){
  somma = somma + counter;
}
return somma
}


console.log(sumUntil(5));