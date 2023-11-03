const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Abacaxi', 'Morango'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`índice: ${i}`, frutas[i]);
}

console.log('')

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';

    console.log(i, par);
}
