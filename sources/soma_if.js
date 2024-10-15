function soma(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
                return null;
        } else {
                return a + b
        }
}

module.exports = soma;
