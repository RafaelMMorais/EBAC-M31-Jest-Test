class Calculadora {
    soma(a, b) { return a + b };
    subt(a, b) { return a - b };
    div(a, b) { return a / b };
    mult(a, b) { return a * b };
}

const calculadora = new Calculadora;
module.exports = calculadora;
