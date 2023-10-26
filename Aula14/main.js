// ... = rest, ... = spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, ...resto] = numeros;

console.log(um, tres);
console.log(resto);

const numerosArray= [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [list1, list2, list3] = numerosArray;

console.log(list3[2]);
