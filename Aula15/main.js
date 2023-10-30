const pessoa = {
    nome: 'Kauan',
    sobrenome: 'Bomfim',
    idade: '19',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};


// const { nome = '', sobrenome, endereco: { rua, numero } } = pessoa;
// console.log(rua, numero);

const { nome, ...resto } = pessoa;
console.log(nome, resto)
