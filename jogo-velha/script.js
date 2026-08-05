const casas = document.querySelectorAll(".casa");
const status = document.getElementById("status");
const reiniciar = document.getElementById("reiniciar");

let jogador = "X";
let jogoAtivo = true;

let tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
];

const vencer = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

];

casas.forEach(casa=>{

    casa.addEventListener("click",jogar);

});

reiniciar.addEventListener("click",reiniciarJogo);

function jogar(){

    const index = this.dataset.index;

    if(tabuleiro[index]!=="" || !jogoAtivo){

        return;

    }

    tabuleiro[index]=jogador;

    this.textContent=jogador;

    verificar();

}

function verificar(){

    let ganhou=false;

    vencer.forEach(combinacao=>{

        const[a,b,c]=combinacao;

        if(
            tabuleiro[a] &&
            tabuleiro[a]===tabuleiro[b] &&
            tabuleiro[a]===tabuleiro[c]
        ){

            ganhou=true;

        }

    });

    if(ganhou){

        status.textContent="Jogador "+jogador+" venceu!";

        jogoAtivo=false;

        return;

    }

    if(!tabuleiro.includes("")){

        status.textContent="Empate!";

        jogoAtivo=false;

        return;

    }

    jogador = jogador==="X" ? "O" : "X";

    status.textContent="Vez do jogador: "+jogador;

}

function reiniciarJogo(){

    jogador="X";

    jogoAtivo=true;

    tabuleiro=["","","","","","","","",""];

    status.textContent="Vez do jogador: X";

    casas.forEach(casa=>{

        casa.textContent="";

    });

}