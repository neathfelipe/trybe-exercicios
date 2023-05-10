/* Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
O nome da função deverá ser substituaX.
A função deverá receber um nome por parâmetro.
Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.
A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.*/

const substituaX = (name) => {
  let nome = name
  return `Tryber ${nome} aqui!`;
};
// Função 2: Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills.
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro.
// Declare dentro da função uma variável com o nome skills e do tipo const.
// A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
let subsName = substituaX('Felipe')

const minhasSkills = (skill, skill2, skill3) => `${subsName}
Minhas três principais habilidades são:
${skill}
${skill2}
${skill3}`

console.log(minhasSkills('html', 'CSS', 'JAVASCRIPT'));

