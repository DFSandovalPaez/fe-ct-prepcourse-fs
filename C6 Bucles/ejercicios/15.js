function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  const diasDeLaSemana = [
    "Lunes",    // 1
    "Martes",   // 2
    "Miercoles",// 3
    "Jueves",   // 4
    "Viernes",  // 5
    "Sabado",   // 6
    "Domingo"   // 7
  ];

  let dia = "No es un dia de la semana";
  if (numero >= 1 && numero <= 7) dia = diasDeLaSemana [numero - 1];
  return dia;
}

module.exports = obtenerDiaSemana;