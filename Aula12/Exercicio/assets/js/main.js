const h1 = document.querySelector('.container h1');
const data = new Date();

function semanaTexto(diaSemana) {
    let semana;

    switch (diaSemana) {
        case 0:
            semana = 'Domingo';
            return semana;

        case 1:
            semana = 'Segunda-feira';
            return semana;

        case 2:
            semana = 'Terça-feira';
            return semana;

        case 3:
            semana = 'Quarta-feira';
            return semana;

        case 4:
            semana = 'Quinta-feira';
            return semana;

        case 5:
            semana = 'Sexta-feira';
            return semana;

        case 6:
            semana = 'Sábado';
            return semana;

        default:
            semana = '';
            return semana;
    }
}

function getMesTexto(mesNumero) {
    let mesTexto;

    switch (mesNumero) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;

        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;

        case 2:
            mesTexto = 'março';
            return mesTexto;

        case 3:
            mesTexto = 'abril';
            return mesTexto;

        case 4:
            mesTexto = 'maio';
            return mesTexto;

        case 5:
            mesTexto = 'junho';
            return mesTexto;

        case 6:
            mesTexto = 'julho';
            return mesTexto;

        case 7:
            mesTexto = 'agosto';
            return mesTexto;

        case 8:
            mesTexto = 'setembro';
            return mesTexto;

        case 9:
            mesTexto = 'outubro';
            return mesTexto;

        case 10:
            mesTexto = 'novembro';
            return mesTexto;

        case 11:
            mesTexto = 'dezembro';
            return mesTexto;

        default:
            mesTexto = '';
            return mesTexto;
    }
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const semana = semanaTexto(diaSemana);

    const mesNumero = data.getMonth();
    const mesTexto = getMesTexto(mesNumero);

    return (`${semana}, ${data.getDate()} de ${mesTexto}` +
        ` de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);

// Código simplificado sem o switch/case

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function semanaTexto(diaSemana) {
//     const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

//     return diasSemana[diaSemana]
// }

// function getMesTexto(mesNumero) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',
//         'novembro', 'dezembro'];

//     return meses[mesNumero];
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const semana = semanaTexto(diaSemana);

//     const mesNumero = data.getMonth();
//     const mesTexto = getMesTexto(mesNumero);

//     return (`${semana}, ${data.getDate()} de ${mesTexto}` +
//         ` de ${data.getFullYear()} ` +
//         `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
// }

// h1.innerHTML = criaData(data);
