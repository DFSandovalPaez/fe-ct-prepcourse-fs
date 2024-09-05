function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  const primerElemento = array[0];
  return array.every(elemento => elemento === primerElemento);
}

module.exports = todosIguales;
