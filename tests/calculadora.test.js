const { expect } = require('@jest/globals');
const calc = require('../sources/calculadora')

it('Soma de 30 + 10 deve ser 40', () => {
  expect(calc.soma(30, 10)).toBe(40)
});

//Colocar 2 testes iguais porem com valores diferentes não interfere na % de cobertura dos testes
//it('Soma de 2 + 2 deve ser 40', () => {
//  expect(calc.soma(2, 2)).toBe(4)
//});

it('Subtração de 30 - 10 deve ser 40', () => {
  expect(calc.subt(30, 10)).toBe(20)
});

it('Divisão de 40 por 20 deve ser 2', () => {
  expect(calc.div(40, 20)).toBe(2)
});

it('Multiplicação de 10 vezes 10 deve ser 100', () => {
  expect(calc.mult(10, 10)).toBe(100)
});
