/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const verifyNumber = (array) => {
  if (!array) {
    throw new Error(undefined);
  }

  for (let index = 0; index < array.length; index += 1) {
    const numero = array[index];
    if (Number.isNaN(numero) || typeof numero !== 'number') {
      throw new Error(undefined);
    }
  } return true;
};

const verifyArray = (array) => {
  if (array.length === 0) {
    throw new Error(undefined);
  }
};

const mediaValor = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  if (sum === 0) {
    return 0;
  }
  return Math.round(sum / array.length);
};

const average = (array) => {
  try {
    verifyNumber(array);
    verifyArray(array);
    mediaValor(array);
    return mediaValor(array);
  } catch (error) {
    return undefined;
  }
};

module.exports = average;
