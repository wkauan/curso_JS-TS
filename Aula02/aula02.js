const numero = prompt('Digite um número');
let confirma;

if (numero != null) {
    confirma = confirm(`O número que você digitou foi ${numero}?`);
} else {
    alert('Digite um número');
}

console.log(confirma);
