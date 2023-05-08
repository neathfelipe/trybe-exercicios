let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:
//Bem-vinda, Margarida

console.log('Bem vinda,', info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:
info['recorrente'] = 'Sim'
console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:
for (let key in info) {
  console.log(key);
}

//4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:
for (let values in info) {
  console.log(info[values])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (info[key] === 'Sim' && key === 'recorrente' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key], 'e', info2[key]);
  }
}