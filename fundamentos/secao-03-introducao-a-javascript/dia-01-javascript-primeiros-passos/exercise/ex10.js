/*Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);*/

let custoProduto = 73;
let valorProduto = 90;

let valorCustoTotal = custoProduto * 1.2;
let lucro = valorProduto - valorCustoTotal;
let lucroFinal = 1000 * lucro;

if (custoProduto < 0 || valorProduto < 0) {
  console.log('Erro');
  return 0;
}

if (lucroFinal > 0) {
  console.log('O valor de lucro desse produto ao vender 1000 unidades é de R$' + lucroFinal.toFixed(2));
} else if (lucroFinal == 0) {
  console.log('Você não terá nem lucro e nem prejuizo ao vender 1000 unidades');
} else {
  console.log('O produto vai ter um prejuizo de R$' + lucroFinal.toFixed(2) + ' ao vender 1000 unidades.');
}