var $header = document.getElementById("header")
var $home = document.getElementById("home")
var $game = document.getElementById("game")
var $dash = document.getElementById("dash")
var $rank = document.getElementById("rank")
var $anchorHome = document.getElementById("AnchorHome")
var $content = document.getElementById("content")

//criando as variáveis de acesso aos botões
var $buttonHome = document.getElementById("homeButton")
var $buttonGame = document.getElementById("gameButton")
var $buttonDash = document.getElementById("stastButton")
var $buttonrank = document.getElementById("rankButton")


function dentro() {

    $header.style.width = "12.5rem";
    exibirLetras();




}


function fora() {

    $header.style.width = "3.5rem"

    ocultarLetras();
}





const exibirLetras = () => {
    $home.classList.remove("hide");
    $game.classList.remove("hide");
    $dash.classList.remove("hide");
    $rank.classList.remove("hide");
}


const ocultarLetras = () => {
    $home.classList.add("hide");
    $game.classList.add("hide");
    $dash.classList.add("hide");
    $rank.classList.add("hide");
}


const home = () => {

    window.location = "./dash.html"
}

const game = () => {

    window.location = "./quiz.html"



}


const stats = () => {
    window.location = "./stats.html"

}

const rank = () => {
    window.location = "./rank.html"

}

const main_home = () => {
    $home.style.borderBottom = '1px solid white'
    $dash.style.borderBottom = '0px'
    $rank.style.borderBottom = '0px'
    $game.style.borderBottom = '0px'
    $buttonHome.classList.add("aumentado")

}

const main_game = () => {
    $game.style.borderBottom = '1px solid white'
    $dash.style.borderBottom = '0px'
    $rank.style.borderBottom = '0px'
    $home.style.borderBottom = '0px'


}

const main_stats = () => {

    $dash.style.borderBottom = '1px solid white'
    $game.style.borderBottom = '0px'
    $rank.style.borderBottom = '0px'
    $home.style.borderBottom = '0px'

}

const main_rank = () => {

    $rank.style.borderBottom = '1px solid white'
    $game.style.borderBottom = '0px'
    $home.style.borderBottom = '0px'
    $dash.style.borderBottom = '0px'

}