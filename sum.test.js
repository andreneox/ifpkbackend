
const sum = require('./sum');

test ("soma de dois valores", () => {
    const resultado = sum(2, 3);
    expect(resultado).toBe(5);
})