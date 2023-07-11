let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

/* Maneira antiga
const varD = varA;
varA = varB;
varB = varC;
varC = varD */

// Maneira mais moderna para resolver esse problema
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);