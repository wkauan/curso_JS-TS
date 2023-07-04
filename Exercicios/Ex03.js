let numero1 = prompt('Digite o primeiro número');
let numero2 = prompt('Digite o segundo numero');

// Poderia alterar o de string para number assim também
// numero1 = Number(numero1);
// numero2 - Number(numero2);

const resultado = parseFloat(numero1) + parseFloat(numero2);

alert(`O resultado da sua conta foi ${resultado}`);