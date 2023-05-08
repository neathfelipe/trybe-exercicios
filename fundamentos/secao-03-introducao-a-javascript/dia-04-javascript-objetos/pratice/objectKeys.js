let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};
// Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.

function habilidadesEstudantes(student) {
  for (let key in student) {
    console.log(key, 'Nivel:', student[key]);
  }
}
console.log('Estudante 1');
habilidadesEstudantes(student1);
console.log('--------');

console.log('Estudante 2');
habilidadesEstudantes(student2);
