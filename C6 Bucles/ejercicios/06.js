function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let digitos = false;
  if (num > 99 && num < 1000) digitos = true;
  return digitos;
}

module.exports = tieneTresDigitos;
