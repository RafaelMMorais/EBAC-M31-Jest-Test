const { expect } = require('@jest/globals');
const soma = require('../sources/soma_if');

test('Soma de 1 + 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3)
});

test('Não deve somar string', () => {
  expect(soma(1, 'a')).toBe(null)
});
