const display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
}

function limparTudo() {
    display.value = '';
}

function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

function inverterSinal() {
    if (display.value !== '') {
        display.value = String(Number(display.value) * -1);
    }
}

function porcentagem() {
    if (display.value !== '') {
        display.value = String(Number(display.value) / 100);
    }
}

function calcular() {
    if (display.value === '') return;

    try {
        // troca os símbolos da calculadora pelos símbolos do JavaScript
        let conta = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        display.value = eval(conta);
    } catch (erro) {
        display.value = 'Erro';
    }
}

// teclado do computador
document.addEventListener('keydown', function(e) {
    const tecla = e.key;

    if (!isNaN(tecla) || ['+', '-', '*', '/', '.'].includes(tecla)) {
        adicionar(tecla);
    }

    if (tecla === 'Enter') {
        calcular();
    }

    if (tecla === 'Backspace') {
        apagarUltimo();
    }

    if (tecla === 'Escape') {
        limparTudo();
    }
});