// Requisito 1 - Crie a função verificaPalindromo

function verificaPalindromo(word) {
  let wordNormal = word.toLowerCase().replace(/[\W_]/g, '')
  let wordReverse = wordNormal.split('').reverse().join('')
  if (wordNormal === wordReverse) {
    return true;
  } return false;
}


// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(array) {
  let bigNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigNumber) {
      bigNumber = array[index]
    }
  }
  return array.indexOf(bigNumber)
}

// Requisito 3 - Crie a função indiceDoMenor

function indiceDoMenor(array) {
  let smallNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < smallNumber) {
      smallNumber = array[index]
    }
  }
  return array.indexOf(smallNumber)
}

// Requisito 4 - Crie a função maiorPalavra
function maiorPalavra(array) {
  let bigWord = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > bigWord.length) {
      bigWord = array[index]
    }
  }
  return bigWord
}

// // Requisito 5 - Crie a função maisRepetido
function maisRepetido(array) {
  let numContagem = {}
  let maisRepetido;
  let maiorContagem = 0;

  for (let index = 0; index < array.length; index += 1) {
    let num = array[index];
    if (numContagem[num]) {
      numContagem[num] += 1
    } else {
      numContagem[num] = 1;
    }
  }
  for (let num in numContagem) {
    if (numContagem[num] > maiorContagem) {
      maiorContagem = numContagem[num]
      maisRepetido = num
    }
  } return parseInt(maisRepetido)
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// Requisito 6 - Crie a função somatorio
function somatorio(number) {
  let sum = 0;
  if (Number.isInteger(number) === true && number >= 0) {
    sum = (number * (number + 1) / 2);
  }
  else {
    sum = 'ERRO'
  } return sum;
}

// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1, palavra2) {
  return palavra1.endsWith(palavra2)
}