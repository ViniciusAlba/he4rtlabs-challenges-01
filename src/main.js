// Utilizando Carousel na div de informações.

let posicaoSlide = 0;
const slides = document.getElementsByClassName('informacoesItem');
const slidesTotais = slides.length;

document.
    getElementById('botaoNext')
    .addEventListener("click", function() {
        avancarSlide();
    });
document.
    getElementById('botaoPrevious')
    .addEventListener("click", function() {
        retrocederSlide();
    });

function atualizandoPosicaoSlide() {
    for (let slide of slides) {
        slide.classList.remove('informacoesItemVisible');
        slide.classList.add('informacoesItemHidden');
    }

    slides[posicaoSlide].classList.add('informacoesItemVisible');
}

function avancarSlide() {
    if (posicaoSlide === slidesTotais - 1) {
        posicaoSlide = 0;
    } else {
        posicaoSlide++;
    }

    atualizandoPosicaoSlide();
}

function retrocederSlide() {
    if (posicaoSlide === 0) {
        posicaoSlide = slidesTotais - 1;
    } else {
        posicaoSlide--;
    }

    atualizandoPosicaoSlide();
}

// Função para calcular o valor da hora do usuário.
document.getElementById('calcular').addEventListener("click", function() {
    divResultado();
});

function divResultado() {

    //Variáveis para armazenar os dados impostos pelo usuário:
    var valorProjeto = document.getElementById('valorProjeto').value; // Armazenando o Valor do Projeto.
    var horasDiarias = document.getElementById('horasDiarias').value; // Armazenando a Quantidade de Horas Trabalhadas por Dia.
    var diasEfetivos = document.getElementById('diasEfetivos').value; // Armazenando os Dias Efetivos Trabalhados na Semana.
    var diasFerias = document.getElementById('diasFerias').value; // Armazenando os Dias de Férias pelo Projeto.
    var valorHora = 0; //Variável que irá receber o valor da hora do usuário.

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );

    document.getElementById('formulario').innerHTML = document.getElementById('resultado').innerHTML;
    if(isNaN(valorHora)) {
        document.getElementById('valorHora').innerHTML = '0';
    } else {
        document.getElementById('valorHora').innerHTML = valorHora.toFixed(2);
    }

}