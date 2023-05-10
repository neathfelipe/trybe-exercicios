// Desafio 11 - Crie a função generatePhoneNumber
// eslint-disable-next-line max-lines-per-function, complexity, sonarjs/cognitive-complexity
const verifyNumber = (array) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let contador = {};
  for (let index = 0; index < array.length; index += 1) {
    if (contador[array[index]]) {
      contador[array[index]] += 1;
    } else {
      contador[array[index]] = 1;
    }
  }
  let arrayOfValues = Object.values(contador)
  for (let values of arrayOfValues) {
    if (values >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  } return true;
}

const generatePhoneNumber = (array) => {
  if (verifyNumber(array) !== true) {
    return verifyNumber(array);
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}

// Desafio 12 -  Crie a função triangleCheck
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function triangleCheck(lineA, lineB, lineC) {
  let verify1 = false;
  let verify2 = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    verify1 = true;
  }
  // eslint-disable-next-line max-len
  if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineB - lineA)) {
    verify2 = true;
  }
  if (verify1 === true && verify2 === true) {
    return true;
  } return false;
}
// Desafio 13 - Crie a função hydrate
const hydrate = string => {
  let stringOfNumbers = string.replace(/[^0-9]/g, '').split('')
  let numbers = [];
  let sum = 0;
  for (let index = 0; index < stringOfNumbers.length; index += 1) {
    // eslint-disable-next-line radix
    numbers.push(parseInt(stringOfNumbers[index]))
  }
  for (let num of numbers) {
    sum += num
  } if (sum === 1) {
    return '1 copo de água';
  }
  return `${sum} copos de água`;
}

/* eslint no-undef: 0 */
