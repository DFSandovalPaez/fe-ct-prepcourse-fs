function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  let cifra = false;
  if(num < 50 && num > 20) cifra = true;
  return cifra;
}

module.exports = estaEnRango;
