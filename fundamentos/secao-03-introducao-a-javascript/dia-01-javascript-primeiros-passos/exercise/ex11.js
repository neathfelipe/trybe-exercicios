/* Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
R$ 2.670,00 - salário com INSS já deduzido
7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
R$ 142,80 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55. */

let salarioBruto = 3000;
let impostoDeRenda;
let inss;
let salarioBase;
let aliquiotaImposto;

if (salarioBruto <= 1556.94) {
  inss = 0.08
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = 0.09
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = 0.11
}

if (salarioBruto > 5189.83) {
  salarioBase = salarioBruto - 570.88;
} else if (salarioBruto >= 0 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * inss);
}

if (salarioBase <= 1903.98) {
  aliquiotaImposto = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquiotaImposto = 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquiotaImposto = 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquiotaImposto = 636.13;
} else if (salarioBase > 4664.68) {
  aliquiotaImposto = 869.36;
}

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  impostoDeRenda = 0.075;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  impostoDeRenda = 0.15;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  impostoDeRenda = 0.225;
} else if (salarioBase > 4664.68) {
  impostoDeRenda = 0.275;
}

let descImposto = impostoDeRenda * salarioBase - aliquiotaImposto;

let salarioLiquido = salarioBase - descImposto;

console.log('Seu salário liquido vai ser de R$' + salarioLiquido.toFixed(2));