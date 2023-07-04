const nome = 'Kauan';
const sobrenome = 'Martins';
const idade = 19;
const peso = 70;
const alturaEmM = 1.70;
let indiceMassaCorporal = peso/(alturaEmM**2);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);