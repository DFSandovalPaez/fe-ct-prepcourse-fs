function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let division = false;
  if (num % 3 === 0) division = "fizz";
  if (num % 5 === 0) division = "buzz";
  if (num % 3 === 0 && num % 5 === 0) division = "fizzbuzz";
  return division;
}

module.exports = fizzBuzz;
