// Desafio 1 - Crie a função compareTrue
const compareTrue = (boolean, boolean2) => boolean && boolean2;

// Desafio 2 - Crie a função splitSentence
const splitSentence = (phrase) => phrase.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let contador = {};
  for (let index = 0; index < array.length; index += 1) {
    if (contador[array[index]]) {
      contador[array[index]] += 1;
    } else {
      contador[array[index]] = 1;
    }
  }
  let maiorNumero = Object.keys(contador);
  return contador[maiorNumero[maiorNumero.length - 1]];
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let diferencaCat1Mouse = Math.abs(cat1 - mouse);
  let diferencaCat2Mouse = Math.abs(cat2 - mouse);
  if (diferencaCat1Mouse === diferencaCat2Mouse) {
    return 'os gatos trombam e o rato foge';
  } if (diferencaCat1Mouse < diferencaCat2Mouse) {
    return 'cat1';
  } return 'cat2';
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  let arrayStrings = [];
  for (let values of array) {
    if (values % 3 === 0 && values % 5 === 0) {
      arrayStrings.push('fizzBuzz');
    } else if (values % 5 === 0) {
      arrayStrings.push('buzz');
    } else if (values % 3 === 0) {
      arrayStrings.push('fizz');
    } else {
      arrayStrings.push('bug!');
    }
  } return arrayStrings;
};

// Desafio 9 - Crie a função encode e a função decode
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
const encode = (string) => {
  let stringPartida = string.split('');
  for (let index = 0; index < stringPartida.length; index += 1) {
    if (stringPartida[index] === 'a') {
      stringPartida[index] = '1';
    } if (stringPartida[index] === 'e') {
      stringPartida[index] = '2';
    } if (stringPartida[index] === 'i') {
      stringPartida[index] = '3';
    } if (stringPartida[index] === 'o') {
      stringPartida[index] = '4';
    } else if (stringPartida[index] === 'u') {
      stringPartida[index] = '5';
    }
  } return stringPartida.join('');
};

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
const decode = (string) => {
  let stringPartida = string.split('');
  for (let index = 0; index < stringPartida.length; index += 1) {
    if (stringPartida[index] === '1') {
      stringPartida[index] = 'a';
    } if (stringPartida[index] === '2') {
      stringPartida[index] = 'e';
    } if (stringPartida[index] === '3') {
      stringPartida[index] = 'i';
    } if (stringPartida[index] === '4') {
      stringPartida[index] = 'o';
    } else if (stringPartida[index] === '5') {
      stringPartida[index] = 'u';
    }
  } return stringPartida.join('');
};

// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  const arrayInAlphabetic = array.sort()
  let object = [];
  if (array === object) {
    return object;
  }
  for (let index = 0; index < arrayInAlphabetic.length; index += 1) {
    object.push({
      tech: arrayInAlphabetic[index],
      name: string,
    });
  } return object;
};