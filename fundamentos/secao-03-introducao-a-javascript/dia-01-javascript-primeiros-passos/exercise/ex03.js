/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.*/

let a = 11;
let b = 40;
let c = 40;

if (a > b && a > c) {
  console.log('O numero ' + a + ' é maior que os numeros ' + b + ' e ' + c);
} else if (b > a && b > c) {
  console.log('O numero ' + b + ' é maior que os numeros ' + a + ' e ' + c);
} else if (c > a && c > b) {
  console.log('O numero ' + c + ' é maior que os numeros ' + b + ' e ' + a);
} else if (a == b && a > c) {
  console.log('Os numero ' + b + ' e ' + a + ' é maior que o numero ' + c);
} else if (a == c && a > b) {
  console.log('Os numeros ' + a + ' e ' + c + ' é maior que o numero ' + b);
} else if (b == c && b > a) {
  console.log('Os numeros ' + b + ' e ' + c + ' é maior que o numero ' + a);
} else {
  console.log('Os numeros ' + a + ' e ' + b + ' e ' + c + ' são iguais');
}