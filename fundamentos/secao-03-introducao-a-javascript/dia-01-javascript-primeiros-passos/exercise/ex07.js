/*Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let nota = 60;
let notaMax = 70;
let percentNota = nota * (100 / notaMax)

if (percentNota >= 90 && percentNota < 100) {
  console.log('A');
} else if (percentNota >= 80 && percentNota < 100) {
  console.log('B');
} else if (percentNota >= 70 && percentNota < 100) {
  console.log('C');
} else if (percentNota >= 60 && percentNota < 100) {
  console.log('D');
} else if (percentNota >= 50 && percentNota < 100) {
  console.log('E');
} else if (percentNota < 50 && percentNota > 0) {
  console.log('F');
} else {
  console.log("Erro");
}