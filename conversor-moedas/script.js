function converter(){

    let valor = Number(document.getElementById("valor").value);

    let cotacao = Number(document.getElementById("moeda").value);

    let resultado = valor * cotacao;

    document.getElementById("resultado").innerHTML =
    "R$ " + resultado.toFixed(2);

}