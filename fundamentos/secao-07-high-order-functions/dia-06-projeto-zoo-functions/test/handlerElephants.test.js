const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se usando "count" como parametro retorna quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se usando "names" como parametro retorna um array com nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se usando "averageAge" como parametro retorna a media de idades', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Verifica se usando "lingua de gato" como parametro retorna a media de idades', () => {
    expect(handlerElephants('lingua de gato')).toBeNull();
  });

  it('Verifica se não usar parâmetro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se ao usar um padrão diferente de string retorna "Parâmetro inválido, é necessário uma string"', () => {
    const equal = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(['array'])).toBe(equal);
  });

  it('Verifica se ao usar um padrão diferente de string retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
