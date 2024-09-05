function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  const caracteres = texto.split('');
  
  const caracteresInvertidos = caracteres.reverse();
  
  const textoInvertido = caracteresInvertidos.join('');
  
  return textoInvertido;
}

module.exports = invertirTexto;
