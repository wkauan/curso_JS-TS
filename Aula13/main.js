let nome = 'Rodrigo';
let verdadeiro = true;

console.log('1:', nome);

{
    let nome = 'Jose';
    console.log('2:', nome);
}

console.log('3:', nome);

function escopo() {
    if(verdadeiro) {
        let nome = 'Kauan';
        var sobrenome = 'Bomfim';
        console.log(nome);
    }

    console.log(sobrenome);
}

escopo();

console.log('Nome 2:', nome2);

var nome2 = 'Pedro';
