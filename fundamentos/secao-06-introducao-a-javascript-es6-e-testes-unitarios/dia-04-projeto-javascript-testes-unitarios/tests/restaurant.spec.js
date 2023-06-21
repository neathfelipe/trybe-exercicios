const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  const coxinha = {
    food: { coxinha: 3.90, sanduiche: 9.90 },
    drinks: { agua: 3.90, cerveja: 6.90 },
  };

  const empty = { food: {}, drinks: {} };

  it('Escreva dois testes, um que verifica se a função `createMenu()` retorna um objeto que possui a chave `fetchMenu` e outro verificando se o valor da chave fetchMenu do objeto retornado pela função `createMenu()` é uma função.', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu()['fetchMenu']).toBe('function');
  });

  it('Escreva um teste que verifica se o objeto retornado pela função `createMenu({ food: {}, drinks: {} }).fetchMenu()` retorna um objeto cujas chaves são somente `food` e `drinks`', () => {
    expect(Object.keys(createMenu(empty).fetchMenu()).length).toBe(2);
    expect(createMenu(empty).fetchMenu()).toHaveProperty('food');
    expect(createMenu(empty).fetchMenu()).toHaveProperty('drinks');
  });

  it('Escreva um teste que verifica se o menu passado pra função `createMenu()` é idêntico ao menu recuperado pela função `createMenu({ food: {}, drinks: {} }).fetchMenu()`', () => {
    expect(createMenu(empty).fetchMenu()).toEqual(empty);
  });

  it('Escreva um teste que verifica se a propriedade `consumption` do objeto retornado pela função `createMenu({ food: {}, drinks: {} })`, após a criação do menu, retorna um array vazio', () => {
    expect(createMenu(empty).consumption).toEqual([]);
  });

  it('Escreva um teste para a seguinte situação: caso o valor (que nesse caso é uma string) passada por parâmetro para `order` não conste no objeto passado como parâmetro para `createMenu` (nem em `food` ou `drinks`), o retorno da chave `order` deve ser: exibir a mensagem `"Item indisponível"` e não alterar a chave `consumption` Caso o valor exista no objeto passado como parâmetro para `createMenu` o item deve ser adicionado ao array `consumption`', () => {
    const objetoRetornadoCreateMenu = createMenu(coxinha);
    objetoRetornadoCreateMenu.order('coxinha');
    expect(objetoRetornadoCreateMenu.consumption).toEqual(['coxinha']);
    expect(objetoRetornadoCreateMenu.order('picanha')).toBe('Item indisponível');
  });

  it('Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `consumption` contém os itens pedidos.', () => {
    const objetoRetornadoCreateMenu = createMenu(coxinha)
    objetoRetornadoCreateMenu.order('coxinha');
    objetoRetornadoCreateMenu.order('sanduiche');
    objetoRetornadoCreateMenu.order('agua');
    expect(objetoRetornadoCreateMenu.consumption).toEqual(['coxinha', 'sanduiche', 'agua']);
  });
  
  it('Escreva um teste que verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.', () => {
    const objetoRetornadoCreateMenu = createMenu(coxinha)
    objetoRetornadoCreateMenu.order('coxinha');
    objetoRetornadoCreateMenu.order('coxinha');
    expect(objetoRetornadoCreateMenu.consumption).toEqual(['coxinha', 'coxinha']);
  });

  it('Escreva um teste que verifica que, ao chamar a função `pay()` que será uma propriedade do objeto retornado pela função `createMenu`, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em `consumption`. A propriedade `pay` tem como valor uma função.', () => {
    const objetoRetornadoCreateMenu = createMenu(coxinha)
    objetoRetornadoCreateMenu.order('coxinha');
    objetoRetornadoCreateMenu.order('sanduiche');
    objetoRetornadoCreateMenu.order('cerveja');
    expect(objetoRetornadoCreateMenu.pay()).toBeCloseTo(22.77, 10)
    expect(typeof objetoRetornadoCreateMenu['pay']).toBe('function')
  });
});