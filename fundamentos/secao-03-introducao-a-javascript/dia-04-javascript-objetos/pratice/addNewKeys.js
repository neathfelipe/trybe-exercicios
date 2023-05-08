let student = {}

function adicionaObjeto(objeto, chave, valor) {
  objeto[chave] = valor
}

adicionaObjeto(student, 'nome', 'Felipe Rodrigues');
adicionaObjeto(student, 'email', 'neath.felipe@gmail.com')
adicionaObjeto(student, 'telefone', '31-992547049')
adicionaObjeto(student, 'github', 'github.com/neathfelipe/')
adicionaObjeto(student, 'linkedin', 'linkedin.com/in/neathfelipe/')

console.log(student);