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
const intentos = [];
const palabraCorrecta = dict[Math.trunc(Math.random() * dict.length)];

function handleChange(e) {
  let wordle = document.getElementById('juego');
  // ¿la palabra está en el dict?
  let intento = e.target.value;
  intentos.push(intento);
  if (dict.includes(intento) == false) return false;
  console.log(e.target.value);
  document.getElementById('ganaste').style.display = 'none';
  document.getElementById('termino').style.display = 'none';
  // filas
  for (let i = 0; i < 1; i++) {
    let fila = document.createElement("div");
    fila.nameClass = "filas";
    for(let j = 0; j < 5; j++) {
      let cuadrado = document.createElement("div")
      cuadrado.textContent = intento[j];
      if(palabraCorrecta.includes(intento[j])) cuadrado.style.backgroundColor = 'yellow';
      else cuadrado.style.backgroundColor = 'gray';
      if (intento[j] == palabraCorrecta) cuadrado.style.backgroundColor = 'green';
      cuadrado.className = "grid";
      fila.appendChild(cuadrado);
    }
  }
  wordle.appendChild(fila)
}

// reiniciar formulario
function handleReset(e) {
  document.getElementById('juego').reset();
}
