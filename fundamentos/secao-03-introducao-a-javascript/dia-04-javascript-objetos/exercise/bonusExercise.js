let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function addTurnOfNight(object, key, value) {
  object[key] = value
}
addTurnOfNight(lesson2, 'turno', 'noite')
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
  console.log(Object.keys(object))
}

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function sizeObject(object) {
  console.log(Object.keys(object).length);
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(object) {
  console.log(Object.values(object));
}

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte */

let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalStudents(object) {
  let totalStudents = 0;
  let keys = Object.keys(object)
  for (let index in keys) {
    totalStudents += object[keys[index]].numeroEstudantes
  } return totalStudents
}

// console.log(totalStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
function getValueByNumber(object, number) {
  return Object.values(object)[number]
}
console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:
function verifyKeyAndValue(object, key, value) {
  if (object[key] === value) {
    return true
  } else {
    return false
  }
}

// console.log(verifyKeyAndValue(lesson3, 'turno', 'noite'));