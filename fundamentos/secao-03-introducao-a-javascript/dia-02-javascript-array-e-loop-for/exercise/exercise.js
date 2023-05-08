let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado.
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}
console.log(resultado);

//Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let somaAritimetica = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somaAritimetica += numbers[index];
}
let mediaAritimetica = somaAritimetica / numbers.length;
console.log(mediaAritimetica);

//Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (mediaAritimetica > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}

//Utilizando for, descubra o maior valor contido no array e imprima-o.
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let numerosImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares += 1;
  }
}
if (numerosImpares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(numerosImpares);
}

//Utilizando for, descubra o menor valor contido no array e imprima-o.
let menorNum = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  if (menorNum > numbers[index]) {
    menorNum = numbers[index];
  }
}
console.log(menorNum);

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let arrayNumbers = [];
for (let index = 1; index <= 25; index += 1) {
  arrayNumbers.push(index);
}
console.log(arrayNumbers);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 0; i < arrayNumbers.length; i += 1) {
  console.log(arrayNumbers[i] / 2);
}

/*O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.*/

let numeroFatorial = 10;
let arrayNumeros = [];
let result = 1;
for (let i = numeroFatorial; i >= 1; i -= 1) {
  arrayNumeros.push(i);
}
for (let i = 0; i < arrayNumeros.length - 1; i += 1) {
  result = arrayNumeros[i] * result;
}
console.log(result);

/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente. */
let word = "tryber";
let wordInvertida = [];
for (let i = 0; i < word.split("").length; i += 1) {
  wordInvertida.push(word.split("")[i]);
}
console.log(wordInvertida.reverse().join(""));

/*ou dessa maneira
 let word = 'tryber';
let wordInvertida = '';
for (let i = 0; i < word.length; i+= 1) {
  wordInvertida += word[word.length -1 -i]
} console.log (wordInvertida) */

let array = ["java", "javascript", "python", "html", "css"];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let maiorWord = array[0];
for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > maiorWord.length) {
    maiorWord = array[index]
  }
}

let menorWord = array[0];
for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > menorWord.length) {
    menorWord = array[index]
  }
}

//Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let biggestNumber = 0;
let maiorNum = 50;
for (let index = 0; index < maiorNum; index += 1) {
  for (let num = 0; num < index; num += 1) {
    if (index % num === 0 && index % 1 === 0) {
      biggestNumber = index
    }
  }
}
console.log(biggestNumber);