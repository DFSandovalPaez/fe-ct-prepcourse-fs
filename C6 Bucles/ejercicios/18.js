function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    [a, b] = [b, a];
  }

  let resultado = 1;
  
  for (let i = a; i <= b; i++) {
    resultado *= i;
  }

  return resultado;
}

module.exports = productoEntreNúmeros;