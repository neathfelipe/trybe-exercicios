/* Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo.*/

let saldo = 90;

function somaSaldo(valor) {
  return valor + saldo;
}
function subtraiSaldo(valor) {
  return saldo - valor;
}
function multiplicaSaldo(valor) {
  return valor * saldo;
}
function divideSaldo(valor) {
  return saldo / valor;
}

console.log(somaSaldo(10));
console.log(subtraiSaldo(10));
console.log(multiplicaSaldo(10));
console.log(divideSaldo(10));