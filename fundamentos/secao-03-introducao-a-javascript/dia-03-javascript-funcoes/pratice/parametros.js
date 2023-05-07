// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaClienteTrybeBank(cliente) {
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente)
    return 'Cliente adicionado com sucesso.';
  } else {
    return 'O parâmetro passado deve ser um nome.';
  }
}

// console.log(adicionaClienteTrybeBank(true));
// console.log(adicionaClienteTrybeBank('José'));
// console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

function removeClienteTrybeBank(cliente) {
  let clienteEncontrado = false;
  if (typeof cliente === 'string') {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true
        return 'Cliente excluído com sucesso';
      }
    }
    if (clienteEncontrado === false)
      return 'Cliente não encontrado'
  } else {
    return 'O parâmetro passado deve ser um nome.';
  }
}

console.log(removeClienteTrybeBank(false));
console.log(removeClienteTrybeBank('José'));
console.log(removeClienteTrybeBank('Ada'));
console.log(clientesTrybeBank);


