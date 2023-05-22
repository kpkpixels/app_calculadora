const campoValor = document.querySelector(".campo");
const campoUltimaOperacao = document.querySelector(".operacaoAnterior");

let novaOperacao = false;
let valorAnterior = 0;

campoValor.addEventListener("input", function(event) {
  const valor = event.target.value;
  const novoValor = valor.replace(/[a-zA-Z]/g, '');
  event.target.value = novoValor;
});


function adicionaValor(numero){
    if (novaOperacao){
        campoValor.value = "0";
        novaOperacao = false;

        if (numero === '+' || numero === '-' || numero === '*' || numero === '/') {
            return;
        }
    }

    if (numero === "," && campoValor.value.includes(",")){
        return;
    }

    if (campoValor.value === "0"){
        if (numero === '+' || numero === '-' || numero === '*' || numero === '/') {
            return;
        }
        if (numero === ","){
            campoValor.value = "0,";
        }
        else{
            campoValor.value = numero;
        }
    }
    else{        
        campoValor.value += numero;
    }
}
function limpaValores(){
    campoValor.value = "0";
    campoUltimaOperacao.innerHTML = "0";
}
function apagaUltimo(){
    if (campoValor.value.length > 1){
        campoValor.value = campoValor.value.slice(0, -1);
    }
    else{
        campoValor.value = "0";
    }
}

function resultado(){
    campoUltimaOperacao.innerHTML = campoValor.value + " =";
    const calculo = eval(campoValor.value.replace(",", "."));
    campoValor.value = calculo.toString().replace(".", ",");
    novaOperacao = true;
}
