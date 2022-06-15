// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)

let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];
const letraCorrectaIntento = 0;
const numeroDeIntentos = 6;
const intentosRestantes = 6;
const palabraCorrecta = dict[Math.floor(Math.random() * dict.length)]
console.log(letraCorrectaIntento)

function cuadrado(contenedor, fila, col, letra = '') {
  const cuadrado = document.createElement('div');
  cuadrado.className = 'cuadrado';
  cuadrado.id = `cuadrado${fila}${col}`;
  cuadrado.textContent = letra;

  contenedor.appendChild(cuadrado);
  return cuadrado;
}

function dibujarGrid(contenedor) {
  const grid = document.createElement('div');
  grid.className = 'grid';

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {

    }
  }
}

function inicio() {
  const juego = document.getElementById('juego');
  dibujarGrid(game);

  registerKeyboardEvents();
}

inicio();

// arrays.includes('');
// for (let c of apellido) console.log(c)
// let r = Math.trunc(Math.random()) * 3;
