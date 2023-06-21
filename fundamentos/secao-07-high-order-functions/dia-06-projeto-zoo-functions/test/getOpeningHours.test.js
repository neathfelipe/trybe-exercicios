const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao passar um parametro que não seja hora, ele retorna um erro', () => {
    expect(() => getOpeningHours('Monday', 'Oito horas')).toThrow(new Error('The hour should represent a number'));
  });

  it('Verifica se ao passar um parametro que não seja dia, ele retorna um erro', () => {
    expect(() => getOpeningHours('Joel', '02:30-PM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });

  it('Verifica se ao passar um parametro para hora que não seja AM, PM , ele retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '02:30-OP')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Verifica se ao passar um parametro para hora que não seja entre 0 e 12, ele retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '13:30-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Verifica se ao passar um parametro para hora que não seja entre 0 e 59, ele retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '10:70-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });

  it('Verifica se não passar nenhum parametro, um objeto com todos os dias e horarios', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Verifica se passar um dia e hora que o zoologico está aberto, ele retorna "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '10:40-AM')).toBe('The zoo is open');
  });

  it('Verifica se passar um dia e hora que o zoologico está fechado, ele retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '08:00-AM')).toBe('The zoo is closed');
  });
});
