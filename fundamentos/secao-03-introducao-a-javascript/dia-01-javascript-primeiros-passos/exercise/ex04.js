/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.*/

let valor = 0.5;

if (valor > 0) {
  console.log('Positive');
} else if (valor == 0) {
  console.log('Zero');
} else if (valor < 0) {
  console.log('Negativo');
}