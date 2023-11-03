const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const mainContainer = document.querySelector('.container')

function createDiv() {
    const div = document.createElement('div');

    return div;
}

function setElements() {
    const div = createDiv();

    mainContainer.appendChild(div);

    for (let i = 0; i < elementos.length; i++) {
        const elemento = document.createElement(elementos[i].tag);

        elemento.textContent = elementos[i].texto;

        div.appendChild(elemento);
    }
}

setElements()
