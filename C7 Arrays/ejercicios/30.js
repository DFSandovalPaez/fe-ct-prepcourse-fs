function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  const visto = {};

  for (const numero of numeros) {
    if (visto[numero]) {
      return numero;
    }
    visto[numero] = true; 
  }

  return null; 
}

module.exports = encontrarElementoRepetido;