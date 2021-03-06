const tablero = 
[
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
];


const bordeVerticalTablero = tablero.length - 1;
const bordeHorizontalTablero = tablero[0].length - 1;

let manzanas = 0;

// Obtengo la cantidad de manzanas al inicio de la partida

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    if (tablero[i][j] === '🍎') {
      manzanas++;
    }
  }
}

while (manzanas > 0) {
  // Obtengo tablero actual
  
  let tableroActual = '';

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      tableroActual += tablero[i][j];
    }
    tableroActual += '\n';
  }

  const movimiento = prompt('Ingrese una opción para moverse: ARRIBA, DERECHA, ABAJO, IZQUIERDA\n' + tableroActual);
  
  let movimientoValido = true;
  
  let x = 0;
  let y = 0;
  
  switch(movimiento) {
    case 'ARRIBA':
      y = -1;
      x = 0;
      break;
    case 'DERECHA':
      y = 0;
      x = 1;
      break;     
    case 'ABAJO':
      y = 1;
      x = 0;   
      break;
    case 'IZQUIERDA':
      y = 0;
      x = -1;   
      break;
    default:
      movimientoValido = false;
  }
  
  if (movimientoValido) {
    // Obtengo posición de serpiente
    let posXSerpiente = 0;
    let posYSerpiente = 0;

    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero[i].length; j++) {
        if (tablero[i][j] === '🐍') {
          posXSerpiente = j;
          posYSerpiente = i;
        }
      }  
    }

    // Obtengo nueva futura posición en base a posición actual más movimiento

    let nuevaPosY = posYSerpiente + y;
    let nuevaPosX = posXSerpiente + x;
  
    // Actualizo nueva futura posición si está en los bordes
  
    if (nuevaPosY < 0) {
      nuevaPosY = bordeVerticalTablero;
    }
    if (nuevaPosY > bordeVerticalTablero) {
      nuevaPosY = 0;
    }
    if (nuevaPosX < 0) {
      nuevaPosX = bordeHorizontalTablero;
    }
    if (nuevaPosX > bordeHorizontalTablero) {
      nuevaPosX = 0;
    }

    // Si en la futura posición hay una manzana, resto uno a la cantidad de manzanas disponibles

    if (tablero[nuevaPosY][nuevaPosX] === '🍎') {
      manzanas--;
    }
    
    // Si la futura posición no está bloqueada, actualizo el tablero

    if (tablero[nuevaPosY][nuevaPosX] !== '🧱') {
        tablero[posYSerpiente][posXSerpiente] = '🌱';
        tablero[nuevaPosY][nuevaPosX] = '🐍';
    } else {
      alert('¡Camino bloqueado!');
    }
  } else {
    alert('Por favor ingrese una opción correcta');
  }
}

alert('¡Felicitaciones! Has ganado 🎉🎉🎉');
