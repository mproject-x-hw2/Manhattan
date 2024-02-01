var $pergunta1 = document.getElementById("pergunta1");
var $pergunta2 = document.getElementById("pergunta2");
var $pergunta3 = document.getElementById("pergunta3");
var $pergunta4 = document.getElementById("pergunta4");
var $pergunta5 = document.getElementById("pergunta5");
var $pergunta6 = document.getElementById("pergunta6");
var $pergunta7 = document.getElementById("pergunta7");
var $pergunta8 = document.getElementById("pergunta8");
var $pergunta9 = document.getElementById("pergunta9");
var $pergunta10 = document.getElementById("pergunta10");
var $resultado = document.getElementById("div-resultado");


var CountRight = 0;
var CountWrong = 0;
var indexQuestion = 0;


const perguntas = [$pergunta1, $pergunta2, $pergunta3, $pergunta4, $pergunta5, $pergunta6, $pergunta7, $pergunta8, $pergunta9, $pergunta10]

const certo = () => {



    indexQuestion++;

    CountRight++;

    ocultar();

    console.log(indexQuestion)

    if (indexQuestion < perguntas.length) {
        exibir();
    } else {
        console.log(`Você acertou ${CountRight} | Você errou ${CountWrong}`);
        $resultado.classList.remove("hide");
    }



}



const errado = () => {
    indexQuestion++;
    CountWrong++;
    ocultar();

    if (indexQuestion < perguntas.length) {
        exibir();
    } else {
        console.log(`Você acertou ${CountRight} | Você errou ${CountWrong}`);
        $resultado.classList.remove("hide");

    }

}







const ocultar = () => {
    perguntas[indexQuestion - 1].classList.add("hide")

}

const exibir = () => {
    perguntas[indexQuestion].classList.remove("hide")

}

