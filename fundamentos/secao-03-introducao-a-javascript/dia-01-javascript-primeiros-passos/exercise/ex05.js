/* Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. */

let angulo1 = 50;
let angulo2 = 70;
let angulo3 = 60;

if ((angulo1 + angulo2 + angulo3) <= 180) {
  console.log('true');
} else {
  console.log('false');
}